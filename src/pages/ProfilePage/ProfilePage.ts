import { tmpl } from './profilePage.tmpl';
import { Title } from '../../components/Title/Title';
import { ProfileValueElement } from '../../components/Profle/ProfileValueElement/ProfileValueElement';
import { Link } from '../../components/Link/Link';
import { Line } from '../../components/Line/Line';
import { Avatar } from '../../components/Profle/Avatar/Avatar';

import Block from '../../utils/Block';

import css from './ProfilePage.module.scss';

export class ProfilePage extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.children.avatar = new Avatar();
        this.children.titleName = new Title({ title: 'Иван', className: css.titleName });
        this.children.emailValue = new ProfileValueElement({ title: 'Почта', value: 'pochta@yandex.ru' });
        this.children.loginValue = new ProfileValueElement({ title: 'Логин', value: 'lineClass' });
        this.children.nameValue = new ProfileValueElement({ title: 'Имя', value: 'Иван' });
        this.children.familyValue = new ProfileValueElement({ title: 'Фамилия', value: 'Иванов' });
        this.children.nameChatValue = new ProfileValueElement({ title: 'Имя в чате', value: 'Иван' });
        this.children.phoneValue = new ProfileValueElement({ title: 'Телефон', value: '+7 (909) 967 30 30', hideLine: true });
        this.children.linkChangeProfile = new Link({ titleLink: 'Изменить данные', to: '/changeProfile' });
        this.children.linkChangePassword = new Link({ titleLink: 'Изменить пароль', to: '/changePassword' });
        this.children.linkExit = new Link({ titleLink: 'Выйти', to: '/auth', className: css.exitLink });
        this.children.line = new Line({ className: css.line });
        this.children.line_2 = new Line({ className: css.line });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
