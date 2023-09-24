import Handlebars from "handlebars"
import { Button } from "../../components/Button/Button";
import { Link } from "../../components/Link/Link";
import { FormItem } from "../../components/FormItem/FormItem";

import { tmpl } from "./authPage.tmpl"

import css from './AuthPage.module.scss'
import { Title } from "../../components/Title/Title";

export const AuthPage = () => {
    return Handlebars.compile(tmpl)({
        TitleAuth: Title({title: 'Вход'}),
        FormItemLogin: FormItem({titleInput: 'Логин', keyInput: 'login', typeInput: 'text', classNameContainer: css.formItemMargin_0}),
        FormItemPassword: FormItem({titleInput: 'Пароль', keyInput: 'password', typeInput: 'password'}),
        ButtonAuth: Button({titleButton: 'Войти', className: css.button}),
        LinkRegistration: Link({titleLink: 'Нет аккаунта?', to: '/registration'})
    });
}