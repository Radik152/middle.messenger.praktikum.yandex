import Handlebars from "handlebars";
import { tmpl } from "./registrationPage.tmpl";
import { Title } from "../../components/Title/Title";
import { FormItem } from "../../components/FormItem/FormItem";
import { Button } from "../../components/Button/Button";

import css from './RegistrationPage.module.scss'
import { Link } from "../../components/Link/Link";

export const RegistrationPage = () => {
    return Handlebars.compile(tmpl)({
        TitleAuth: Title({title: 'Регистрация'}),
        FormItemEmail: FormItem({titleInput: 'Почта', keyInput: 'email', typeInput: 'text', classNameContainer: css.formItemMargin_0}),
        FormItemLogin: FormItem({titleInput: 'Логин', keyInput: 'login', typeInput: 'text'}),
        FormItemFirstName: FormItem({titleInput: 'Имя', keyInput: 'first_name', typeInput: 'text'}),
        FormItemSecondName: FormItem({titleInput: 'Фамилия', keyInput: 'second_name', typeInput: 'text'}),
        FormItemPhone: FormItem({titleInput: 'Телефон', keyInput: 'phone', typeInput: 'text'}),
        FormItemPassword: FormItem({titleInput: 'Пароль', keyInput: 'password', typeInput: 'password'}),
        FormItemRepeatPassword: FormItem({titleInput: 'Пароль (ещё раз)', keyInput: 'password_repeat', typeInput: 'password'}),
        ButtonAuth: Button({titleButton: 'Зарегистрироваться', className: css.button}),
        LinkRegistration: Link({titleLink: 'Войти', to: '/auth'})
    })
};
