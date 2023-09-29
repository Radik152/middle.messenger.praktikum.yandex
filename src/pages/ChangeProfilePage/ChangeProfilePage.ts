import Handlebars from "handlebars";
import { tmpl } from "./changeProfilePage.tmpl";
import { Title } from "../../components/Title/Title";
import { ProfileValueInput } from "../../components/Profle/ProfileValueInput/ProfileValueInput";
import { Button } from "../../components/Button/Button";

import css from "./ChangeProfilePage.module.scss";
import { PhotoInput } from "../../components/Profle/PhotoInput/PhotoInput";

export const ChangeProfilePage = () => {
  return Handlebars.compile(tmpl)({
    ChangeProfileInput: PhotoInput(),
    TitleName: Title({ title: "Иван", className: css.titleName }),
    EmailValue: ProfileValueInput({
      title: "Почта",
      value: "pochta@yandex.ru",
      typeInput: 'text',
      keyInput: 'email',
    }),
    LoginValue: ProfileValueInput({ title: "Логин", value: "ivan", typeInput: 'text', keyInput: 'login' }),
    NameValue: ProfileValueInput({ title: "Имя", value: "Иван", typeInput: 'text', keyInput: 'first_name'}),
    FamilyValue: ProfileValueInput({ title: "Фамилия", value: "Иванов", typeInput: 'text', keyInput: 'second_name'}),
    NameChatValue: ProfileValueInput({ title: "Имя в чате", value: "Иван", typeInput: 'text', keyInput: 'display_name'}),
    PhoneValue: ProfileValueInput({
      title: "Телефон",
      value: "+7 (909) 967 30 30",
      hideLine: true,
      typeInput: 'text',
      keyInput: 'phone'
    }),
    ButtonSave: Button({titleButton: 'Сохранить', className: css.buttonSave})
  });
};

