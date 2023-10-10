/* eslint-disable no-console */
import { tmpl } from './changePasswordPage.tmpl';
import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button/Button';
import { ProfileValueInput } from '../../components/Profle/ProfileValueInput/ProfileValueInput';
import { Avatar } from '../../components/Profle/Avatar/Avatar';
import Block from '../../utils/Block';

import css from './ChangePasswordPage.module.scss';
import { validatePassword } from '../../utils/validations/validation';

interface ChangePasswordFormType {
    oldPassword: string;
    newPassword: string;
    repeatNewPassword: string;
}

export class ChangePasswordPage extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.children.avatar = new Avatar();
        this.children.titleName = new Title({ title: 'Иван', className: css.titleName });
        this.children.oldPasswordValue = new ProfileValueInput({
            title: 'Старый пароль', value: '', typeInput: 'password', keyInput: 'oldPassword', events: { focus: () => validatePassword('oldPassword') },
        });
        this.children.newPasswordValue = new ProfileValueInput({
            title: 'Новый пароль', value: '', typeInput: 'password', keyInput: 'newPassword', events: { focus: () => validatePassword('oldPassword') },
        });
        this.children.newPasswordRepeatValue = new ProfileValueInput({
            title: 'Повторите новый пароль',
            value: '',
            typeInput: 'password',
            keyInput: 'repeatNewPassword',
            events: { focus: () => console.log(validatePassword('repeatNewPassword')) },
        });
        this.children.buttonSave = new Button({ titleButton: 'Сохранить', className: css.buttonSave, events: { click: () => this.submitForm() } });
    }

    render() {
        return this.compile(tmpl, this.props);
    }

    submitForm() {
        if (validatePassword('oldPassword') && validatePassword('oldPassword') && validatePassword('repeatNewPassword')) {
            const form = document.getElementById('changePasswordForm');
            const oldPassword = form?.querySelector('[name="oldPassword"]') as HTMLInputElement;
            const newPassword = form?.querySelector('[name="newPassword"]') as HTMLInputElement;
            const repeatNewPassword = form?.querySelector('[name="repeatNewPassword"]') as HTMLInputElement;

            const data: ChangePasswordFormType = {
                oldPassword: oldPassword.value,
                newPassword: newPassword.value,
                repeatNewPassword: repeatNewPassword.value,
            };
            console.log(data);
        } else {
            console.log('noValidation');
        }
    }
}
