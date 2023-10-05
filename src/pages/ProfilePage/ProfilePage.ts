import Handlebars from 'handlebars';
import { tmpl } from './profilePage.tmpl';
import { Title } from '../../components/Title/Title';
import { ProfileValueElement } from '../../components/Profle/ProfileValueElement/ProfileValueElement';
import { Link } from '../../components/Link/Link';
import { Line } from '../../components/Line/Line';

import css from './ProfilePage.module.scss';
import { Avatar } from '../../components/Profle/Avatar/Avatar';

export const ProfilePage = () => {
    return Handlebars.compile(tmpl)({
        Avatar: Avatar(),
        TitleName: Title({ title: 'Иван', className: css.titleName }),
        EmailValue: ProfileValueElement({ title: 'Почта', value: 'pochta@yandex.ru' }),
        LoginValue: ProfileValueElement({ title: 'Логин', value: 'lineClass' }),
        NameValue: ProfileValueElement({ title: 'Имя', value: 'Иван' }),
        FamilyValue: ProfileValueElement({ title: 'Фамилия', value: 'Иванов' }),
        NameChatValue: ProfileValueElement({ title: 'Имя в чате', value: 'Иван' }),
        PhoneValue: ProfileValueElement({ title: 'Телефон', value: '+7 (909) 967 30 30', hideLine: true }),
        LinkChangeProfile: Link({ titleLink: 'Изменить данные', to: '/changeProfile' }),
        LinkChangePassword: Link({ titleLink: 'Изменить пароль', to: '/changePassword' }),
        LinkExit: Link({ titleLink: 'Выйти', to: '/auth', className: css.exitLink }),
        Line: Line({ className: css.line }),
    });
};
