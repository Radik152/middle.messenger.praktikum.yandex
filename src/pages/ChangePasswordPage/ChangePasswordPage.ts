import Handlebars from 'handlebars';
import { tmpl } from './changePasswordPage.tmpl';
import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button/Button';
import { ProfileValueInput } from '../../components/Profle/ProfileValueInput/ProfileValueInput';

import css from './ChangePasswordPage.module.scss';
import { Avatar } from '../../components/Profle/Avatar/Avatar';

export const ChangePasswordPage = () => {
    return Handlebars.compile(tmpl)({
        Avatar: Avatar(),
        TitleName: Title({ title: 'Иван', className: css.titleName }),
        OldPasswordValue: ProfileValueInput({
            title: 'Старый пароль', value: '', typeInput: 'password', keyInput: 'login',
        }),
        NewPasswordValue: ProfileValueInput({
            title: 'Новый пароль', value: '', typeInput: 'password', keyInput: 'login',
        }),
        NewPasswordRepeatValue: ProfileValueInput({
            title: 'Повторите новый пароль', value: '', typeInput: 'password', keyInput: 'login',
        }),
        ButtonSave: Button({ titleButton: 'Сохранить', className: css.buttonSave }),
    });
};
