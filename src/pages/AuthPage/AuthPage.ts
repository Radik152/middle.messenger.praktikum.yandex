/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-console */
import { Button } from '../../components/Button/Button';
import { Link } from '../../components/Link/Link';
import { FormItem } from '../../components/FormItem/FormItem';
import { Title } from '../../components/Title/Title';

import Block from '../../utils/Block';

import { tmpl } from './authPage.tmpl';

import css from './AuthPage.module.scss';
import { validateLogin, validatePassword } from '../../utils/validations/validation';
import { loginRegExp } from '../../utils/validations/RegExp';

interface AuthFormType {
    login: string;
    password: string;
}

export class AuthPage extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        console.log(validateLogin());
        this.children.titleAuth = new Title({
            title: 'Вход',
        });
        this.children.formItemLogin = new FormItem({
            titleInput: 'Логин',
            keyInput: 'login',
            typeInput: 'text',
            classNameContainer: css.formItemMargin_0,
            events: { focus: () => validateLogin() },
            regExp: loginRegExp,
        });
        this.children.formItemPassword = new FormItem({
            titleInput: 'Пароль', keyInput: 'password', typeInput: 'password', events: { focus: () => validatePassword('password') },
        });
        this.children.buttonAuth = new Button({ titleButton: 'Войти', className: css.button, events: { click: () => this.submitForm() } });
        this.children.linkRegistration = new Link({ titleLink: 'Нет аккаунта?', to: '/registration' });
    }

    render() {
        return this.compile(tmpl, this.props);
    }

    submitForm() {
        if (validateLogin() && validatePassword('password')) {
            const form = document.getElementById('authForm');
            const login = form?.querySelector('[name="login"]') as HTMLInputElement;
            const password = form?.querySelector('[name="password"]') as HTMLInputElement;

            const data: AuthFormType = {
                login: login.value,
                password: password.value,
            };
            console.log(data);
            window.location.href = '/chats';
        } else {
            console.log('noValidation');
        }
    }
}
