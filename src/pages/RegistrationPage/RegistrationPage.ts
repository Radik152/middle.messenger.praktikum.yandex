/* eslint-disable import/no-named-as-default */
/* eslint-disable no-console */
import { tmpl } from './registrationPage.tmpl';
import { Title } from '../../components/Title/Title';
import { FormItem } from '../../components/FormItem/FormItem';
import { Button } from '../../components/Button/Button';

import css from './RegistrationPage.module.scss';
import { Link } from '../../components/Link/Link';
import { Block } from '../../utils/Block';
import {
    validateEmail, validateLogin, validateName, validatePassword, validatePhone, validateRepeatPassword,
} from '../../utils/validations/validation';
import AuthController from '../../utils/controllers/AuthController';
import { Routes } from '../../utils/routes/routes';

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
        super({});
    }

    init() {
        this.children.titleAuth = new Title({ title: 'Регистрация' });
        this.children.formItemEmail = new FormItem({
            titleInput: 'Почта',
            keyInput: 'email',
            typeInput: 'text',
            classNameContainer: css.formItemMargin_0,
            events: { focus: () => validateEmail() },
            errorMessage: 'Неправильный email',
        });
        this.children.formItemLogin = new FormItem({
            titleInput: 'Логин', keyInput: 'login', typeInput: 'text', events: { focus: () => validateLogin() }, errorMessage: 'Неправильный логин',
        });
        this.children.formItemFirstName = new FormItem({
            titleInput: 'Имя', keyInput: 'first_name', typeInput: 'text', events: { focus: () => validateName('first_name') }, errorMessage: 'Может содержать только буквы',
        });
        this.children.formItemSecondName = new FormItem({
            titleInput: 'Фамилия', keyInput: 'second_name', typeInput: 'text', events: { focus: () => validateName('second_name') }, errorMessage: 'Может содержать только буквы',
        });
        this.children.formItemPhone = new FormItem({
            titleInput: 'Телефон', keyInput: 'phone', typeInput: 'text', events: { focus: () => validatePhone() }, errorMessage: 'Состоит и цифр от 10 до 15',
        });
        this.children.formItemPassword = new FormItem({
            titleInput: 'Пароль', keyInput: 'password', typeInput: 'password', events: { focus: () => validatePassword('password') }, errorMessage: 'Неправильный пароль',
        });
        this.children.formItemRepeatPassword = new FormItem({
            titleInput: 'Пароль (ещё раз)',
            keyInput: 'password_repeat',
            typeInput: 'password',
            events: { focus: () => validateRepeatPassword('password_repeat', 'password') },
            errorMessage: 'Пароли не совпадают',
        });
        this.children.buttonAuth = new Button({ titleButton: 'Зарегистрироваться', className: css.button, events: { click: () => this.submitForm() } });
        this.children.linkRegistration = new Link({ titleLink: 'Войти', to: Routes.Login });
    }

    render() {
        return this.compile(tmpl, this.props);
    }

    async submitForm() {
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
                try {
                    await AuthController.register(data);
                } catch (event: unknown) {
                    console.log(event);
                    // if (event instanceof CustomError) {
                    //     form.props.error = event.reason;
                    // }
                }
        } else {
            console.log('noValidation');
        }
    }
}
