/* eslint-disable no-console */
import { tmpl } from './changeProfilePage.tmpl';
import { Title } from '../../components/Title/Title';
import { ProfileValueInput } from '../../components/Profle/ProfileValueInput/ProfileValueInput';
import { Button } from '../../components/Button/Button';

import { Block } from '../../utils/Block';

import css from './ChangeProfilePage.module.scss';
import {
  validateEmail, validateLogin, validateName, validatePhone,
} from '../../utils/validations/validation';
import { withUser } from '../../utils/store/WithStore';
// eslint-disable-next-line import/no-named-as-default
import UserController from '../../utils/controllers/UserController';
import { User } from '../../types/user';
import { Link } from '../../components/Link/Link';
import { Routes } from '../../utils/routes/routes';
import { BASE_IMAGE_URL } from '../../utils/Contants';
import { AvatarComponent } from '../../components/AvatarComponent/AvatarComponent';

export class ChangeProfilePageComponent extends Block {
    init() {
        this.children.backLink = new Link({ titleLink: '', to: Routes.Profile, className: css.backIcon });
        this.children.changeProfileInput = new AvatarComponent({
          id: 'file',
          isActive: true,
          avatar: this.props.avatar ? `${BASE_IMAGE_URL}${this.props.avatar}` : null,
          inputContainerClasses: 'profile__avatar',
          events: {
              click: async () => {
                  const inputComponent = document.getElementById('file') as HTMLInputElement;
                  inputComponent?.click();
                  inputComponent?.addEventListener('change', async () => {
                      const files = inputComponent?.files;
                      if (files != null) {
                          try {
                              await UserController.updateAvatar(files[0]);
                              const avatar = this.children.avatar as Block;
                              avatar.setProps({
                                  ...avatar.props,
                                  avatar: this.props.avatar ? `${BASE_IMAGE_URL}${this.props.avatar}` : null,
                              });
                          } catch (e: unknown) {
                            console.error(e);
                          }
                      }
                  });
              },
          },
        });
        this.children.titleName = new Title({ title: this.props.displayName, className: css.titleName });
        this.children.emailValue = new ProfileValueInput({
          title: 'Почта',
          value: this.props.email,
          typeInput: 'text',
          keyInput: 'email',
          events: { focus: () => validateEmail() },
          errorMessage: 'Неправильный email',
        });
        this.children.loginValue = new ProfileValueInput({
          title: 'Логин', value: this.props.login, typeInput: 'text', keyInput: 'login', events: { focus: () => validateLogin() }, errorMessage: 'Неправильный логин',
        });
        this.children.nameValue = new ProfileValueInput({
          title: 'Имя',
          value: this.props.first_name,
          typeInput: 'text',
          keyInput: 'first_name',
          events: { focus: () => validateName('first_name') },
          errorMessage: 'Может содержать только буквы',
        });
        this.children.familyValue = new ProfileValueInput({
          title: 'Фамилия',
          value: this.props.second_name,
          typeInput: 'text',
          keyInput: 'second_name',
          events: { focus: () => validateName('second_name') },
          errorMessage: 'Может содержать только буквы',
        });
        this.children.nameChatValue = new ProfileValueInput({
          title: 'Имя в чате',
          value: this.props.display_name,
          typeInput: 'text',
          keyInput: 'display_name',
          events: { focus: () => validateName('display_name') },
          errorMessage: 'Может содержать только буквы',
        });
        this.children.phoneValue = new ProfileValueInput({
          title: 'Телефон',
          value: this.props.phone,
          hideLine: true,
          typeInput: 'text',
          keyInput: 'phone',
          events: { focus: () => console.log(validatePhone()) },
          errorMessage: 'Состоит и цифр от 10 до 15',
        });
        this.children.buttonSave = new Button({ titleButton: 'Сохранить', className: css.buttonSave, events: { click: () => this.submitForm() } });
    }

    render() {
      return this.compile(tmpl, this.props);
    }

    async submitForm() {
      const form = document.getElementById('changeProfileForm');
      const email = validateEmail() ? (form?.querySelector('[name="email"]') as HTMLInputElement).value : this.props.email;
      const login = validateLogin() ? (form?.querySelector('[name="login"]') as HTMLInputElement).value : this.props.login;
      const fName = validateName('first_name')
                      ? (form?.querySelector('[name="first_name"]') as HTMLInputElement).value : this.props.first_name;
      const sName = validateName('second_name')
                      ? (form?.querySelector('[name="second_name"]') as HTMLInputElement).value : this.props.second_name;
      const displayName = (form?.querySelector('[name="display_name"]') as HTMLInputElement).value
                      ? (form?.querySelector('[name="display_name"]') as HTMLInputElement).value : this.props.display_name;
      const phone = validatePhone() ? (form?.querySelector('[name="phone"]') as HTMLInputElement).value : this.props.phone;

      const data: User = {
        email,
        login,
        first_name: fName,
        second_name: sName,
        display_name: displayName,
        phone,
      };
      console.log(data);
      try {
        await UserController.update(data);
      } catch (event: unknown) {
        console.error(event);
      }
    }
}

export const ChangeProfilePage = withUser(ChangeProfilePageComponent);
