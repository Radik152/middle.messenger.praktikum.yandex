import { tmpl } from './profilePage.tmpl';
import { Title } from '../../components/Title/Title';
import { ProfileValueElement } from '../../components/Profle/ProfileValueElement/ProfileValueElement';
import { Link } from '../../components/Link/Link';
import { Line } from '../../components/Line/Line';

import { Block } from '../../utils/Block';

import css from './ProfilePage.module.scss';
import { Button } from '../../components/Button/Button';
// eslint-disable-next-line import/no-named-as-default
import AuthController from '../../utils/controllers/AuthController';
import { withUser } from '../../utils/store/WithStore';
import { Routes } from '../../utils/routes/routes';
import { AvatarComponent } from '../../components/AvatarComponent/AvatarComponent';
import { BASE_IMAGE_URL } from '../../utils/Contants';

class ProfileComponent extends Block {
    init() {
        this.children.backLink = new Link({ titleLink: '', to: Routes.Main, className: css.backIcon });
        this.children.avatar = new AvatarComponent({
            id: 'file',
            isActive: false,
            avatar: this.props.avatar ? `${BASE_IMAGE_URL}${this.props.avatar}` : null,
            inputContainerClasses: 'profile__avatar',
        });
        this.children.titleName = new Title({ title: 'Иван', className: css.titleName });
        this.children.emailValue = new ProfileValueElement({ title: 'Почта', value: this.props.email });
        this.children.loginValue = new ProfileValueElement({ title: 'Логин', value: this.props.login });
        this.children.nameValue = new ProfileValueElement({ title: 'Имя', value: this.props.first_name });
        this.children.familyValue = new ProfileValueElement({ title: 'Фамилия', value: this.props.second_name });
        this.children.nameChatValue = new ProfileValueElement({ title: 'Имя в чате', value: this.props.display_name });
        this.children.phoneValue = new ProfileValueElement({ title: 'Телефон', value: this.props.phone, hideLine: true });
        this.children.linkChangeProfile = new Link({ titleLink: 'Изменить данные', to: Routes.ProfileEdit });
        this.children.linkChangePassword = new Link({ titleLink: 'Изменить пароль', to: Routes.ProfileChangePassword });
        this.children.linkExit = new Button({
            titleButton: 'Выйти',
            className: css.exitLink,
            events: {
                click: async () => {
                        await AuthController.logout();
                    },
            },
        });
        this.children.line = new Line({ className: css.line });
        this.children.line_2 = new Line({ className: css.line });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

export const ProfilePage = withUser(ProfileComponent);
