/* eslint-disable no-console */
import { tmpl } from './changePasswordPage.tmpl';
import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button/Button';
import { ProfileValueInput } from '../../components/Profle/ProfileValueInput/ProfileValueInput';
import { Block } from '../../utils/Block';

import css from './ChangePasswordPage.module.scss';
import { validatePassword, validateRepeatPassword } from '../../utils/validations/validation';
import { withUser } from '../../utils/store/WithStore';
// eslint-disable-next-line import/no-named-as-default
import UserController from '../../utils/controllers/UserController';
import { Link } from '../../components/Link/Link';
import { Routes } from '../../utils/routes/routes';
import { AvatarComponent } from '../../components/AvatarComponent/AvatarComponent';
import { BASE_IMAGE_URL } from '../../utils/Contants';

interface ChangePasswordFormType {
    oldPassword: string;
    newPassword: string;
    repeat_password: string;
}

export class ChangePasswordPageComponent extends Block {
    init() {
        this.children.backLink = new Link({ titleLink: '', to: Routes.Profile, className: css.backIcon });
        this.children.avatar = new AvatarComponent({
            id: 'file',
            isActive: false,
            avatar: this.props.avatar ? `${BASE_IMAGE_URL}${this.props.avatar}` : null,
            inputContainerClasses: 'profile__avatar',
        });
        this.children.titleName = new Title({ title: this.props.display_name, className: css.titleName });
        this.children.oldPasswordValue = new ProfileValueInput({
            title: 'Старый пароль',
            value: '',
            typeInput: 'password',
            keyInput: 'oldPassword',
            events: { focus: () => validatePassword('oldPassword') },
            errorMessage: 'Неправильный пароль',
        });
        this.children.newPasswordValue = new ProfileValueInput({
            title: 'Новый пароль',
            value: '',
            typeInput: 'password',
            keyInput: 'newPassword',
            events: { focus: () => validatePassword('newPassword') },
            errorMessage: 'Неправильный пароль',
        });
        this.children.newPasswordRepeatValue = new ProfileValueInput({
            title: 'Повторите новый пароль',
            value: '',
            typeInput: 'password',
            keyInput: 'repeat_password',
            events: { focus: () => validateRepeatPassword('repeat_password', 'newPassword') },
        });
        this.children.buttonSave = new Button({ titleButton: 'Сохранить', className: css.buttonSave, events: { click: () => this.submitForm() } });
    }

    render() {
        return this.compile(tmpl, this.props);
    }

    async submitForm() {
        if (validatePassword('oldPassword') && validatePassword('newPassword') && validatePassword('repeat_password')) {
            const form = document.getElementById('changePasswordForm');
            const oldPassword = form?.querySelector('[name="oldPassword"]') as HTMLInputElement;
            const newPassword = form?.querySelector('[name="newPassword"]') as HTMLInputElement;
            const repeatNewPassword = form?.querySelector('[name="repeat_password"]') as HTMLInputElement;

            const data: ChangePasswordFormType = {
                oldPassword: oldPassword.value,
                newPassword: newPassword.value,
                repeat_password: repeatNewPassword.value,
            };
            console.log(data);
            try {
                await UserController.updatePassword(data);
            } catch (event: unknown) {
                console.error(event);
            }
        } else {
            console.log('noValidation');
        }
    }
}


export const ChangePasswordPage = withUser(ChangePasswordPageComponent);
