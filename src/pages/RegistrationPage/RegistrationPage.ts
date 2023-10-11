/* eslint-disable no-console */
import { tmpl } from './registrationPage.tmpl';
import { Title } from '../../components/Title/Title';
import { FormItem } from '../../components/FormItem/FormItem';
import { Button } from '../../components/Button/Button';

import css from './RegistrationPage.module.scss';
import { Link } from '../../components/Link/Link';
import Block from '../../utils/Block';
import {
    validateEmail, validateLogin, validateName, validatePassword, validatePhone,
} from '../../utils/validations/validation';

interface RegistrationFormType {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    phone: string;
    password: string;
    password_repeat: string;
}

export class RegistrationPage extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.children.titleAuth = new Title({ title: 'Регистрация' });
        this.children.formItemEmail = new FormItem({
            titleInput: 'Почта', keyInput: 'email', typeInput: 'text', classNameContainer: css.formItemMargin_0, events: { focus: () => validateEmail() },
        });
        this.children.formItemLogin = new FormItem({
            titleInput: 'Логин', keyInput: 'login', typeInput: 'text', events: { focus: () => validateLogin() },
        });
        this.children.formItemFirstName = new FormItem({
            titleInput: 'Имя', keyInput: 'first_name', typeInput: 'text', events: { focus: () => validateName('first_name') },
        });
        this.children.formItemSecondName = new FormItem({
            titleInput: 'Фамилия', keyInput: 'second_name', typeInput: 'text', events: { focus: () => validateName('second_name') },
        });
        this.children.formItemPhone = new FormItem({
            titleInput: 'Телефон', keyInput: 'phone', typeInput: 'text', events: { focus: () => validatePhone() },
        });
        this.children.formItemPassword = new FormItem({
            titleInput: 'Пароль', keyInput: 'password', typeInput: 'password', events: { focus: () => validatePassword('password') },
        });
        this.children.formItemRepeatPassword = new FormItem({
            titleInput: 'Пароль (ещё раз)', keyInput: 'password_repeat', typeInput: 'password', events: { focus: () => validatePassword('password_repeat') },
        });
        this.children.buttonAuth = new Button({ titleButton: 'Зарегистрироваться', className: css.button, events: { click: () => this.submitForm() } });
        this.children.linkRegistration = new Link({ titleLink: 'Войти', to: '/auth' });
    }

    render() {
        return this.compile(tmpl, this.props);
    }

    submitForm() {
        if (
            validateEmail() && validateLogin() && validateName('first_name') && validateName('second_name')
            && validatePhone() && validatePassword('password') && validatePassword('password_repeat')) {
                const form = document.getElementById('registrationForm');
                const email = form?.querySelector('[name="email"]') as HTMLInputElement;
                const login = form?.querySelector('[name="login"]') as HTMLInputElement;
                const fName = form?.querySelector('[name="first_name"]') as HTMLInputElement;
                const sName = form?.querySelector('[name="second_name"]') as HTMLInputElement;
                const phone = form?.querySelector('[name="phone"]') as HTMLInputElement;
                const password = form?.querySelector('[name="password"]') as HTMLInputElement;
                const passwordRepeat = form?.querySelector('[name="password_repeat"]') as HTMLInputElement;

                const data: RegistrationFormType = {
                    email: email.value,
                    login: login.value,
                    first_name: fName.value,
                    second_name: sName.value,
                    phone: phone.value,
                    password: password.value,
                    password_repeat: passwordRepeat.value,
                };
                console.log(data);
        } else {
            console.log('noValidation');
        }
    }
}
