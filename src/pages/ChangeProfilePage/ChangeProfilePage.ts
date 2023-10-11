/* eslint-disable no-console */
import { tmpl } from './changeProfilePage.tmpl';
import { Title } from '../../components/Title/Title';
import { ProfileValueInput } from '../../components/Profle/ProfileValueInput/ProfileValueInput';
import { Button } from '../../components/Button/Button';
import { PhotoInput } from '../../components/Profle/PhotoInput/PhotoInput';

import Block from '../../utils/Block';

import css from './ChangeProfilePage.module.scss';
import {
  validateEmail, validateLogin, validateName, validatePhone,
} from '../../utils/validations/validation';

interface ChangeProfileFormType {
  email: string,
  login: string,
  fName: string,
  sName: string,
  displayName: string,
  phone: string
}

export class ChangeProfilePage extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.children.changeProfileInput = new PhotoInput();
        this.children.titleName = new Title({ title: 'Иван', className: css.titleName });
        this.children.emailValue = new ProfileValueInput({
          title: 'Почта',
          value: 'pochta@yandex.ru',
          typeInput: 'text',
          keyInput: 'email',
          events: { focus: () => console.log(validateEmail()) },
        });
        this.children.loginValue = new ProfileValueInput({
          title: 'Логин', value: 'ivan', typeInput: 'text', keyInput: 'login', events: { focus: () => validateLogin() },
        });
        this.children.nameValue = new ProfileValueInput({
          title: 'Имя', value: 'Иван', typeInput: 'text', keyInput: 'first_name', events: { focus: () => validateName('first_name') },
        });
        this.children.familyValue = new ProfileValueInput({
          title: 'Фамилия', value: 'Иванов', typeInput: 'text', keyInput: 'second_name', events: { focus: () => validateName('second_name') },
        });
        this.children.nameChatValue = new ProfileValueInput({
          title: 'Имя в чате', value: 'Иван', typeInput: 'text', keyInput: 'display_name', events: { focus: () => validateName('display_name') },
        });
        this.children.phoneValue = new ProfileValueInput({
          title: 'Телефон',
          value: '+7 (909) 967 30 30',
          hideLine: true,
          typeInput: 'text',
          keyInput: 'phone',
          events: { focus: () => console.log(validatePhone()) },
        });
        this.children.buttonSave = new Button({ titleButton: 'Сохранить', className: css.buttonSave, events: { click: () => this.submitForm() } });
    }

    render() {
      return this.compile(tmpl, this.props);
    }

    submitForm() {
      if (
        validateEmail() && validateLogin() && validateName('first_name') && validateName('second_name')
        && validatePhone()) {
          const form = document.getElementById('changeProfileForm');
          const email = form?.querySelector('[name="email"]') as HTMLInputElement;
          const login = form?.querySelector('[name="login"]') as HTMLInputElement;
          const fName = form?.querySelector('[name="first_name"]') as HTMLInputElement;
          const sName = form?.querySelector('[name="second_name"]') as HTMLInputElement;
          const displayName = form?.querySelector('[name="display_name"]') as HTMLInputElement;
          const phone = form?.querySelector('[name="phone"]') as HTMLInputElement;

          const data: ChangeProfileFormType = {
            email: email.value,
            login: login.value,
            fName: fName.value,
            sName: sName.value,
            displayName: displayName.value,
            phone: phone.value,
          };
          console.log(data);
      } else {
        console.log('noValidation');
      }
    }
}
