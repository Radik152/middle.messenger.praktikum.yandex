import {
  emailRegExp, loginRegExp, nameRegExp, passwordRegExp, phoneRegExp,
} from './RegExp';


export const validation = (name: string, regExp: RegExp) => {
    const input = document.getElementById(name) as HTMLInputElement;

    if (input?.value) {
      input?.classList.remove('invalidInput');

      return input?.value.match(regExp);
    }
    input?.classList.add('invalidInput');

    return null;
};

export const validateLogin = () => {
  return validation('login', loginRegExp);
};

export const validateEmail = () => {
  return validation(
    'email',
    emailRegExp,
  );
};

export const validatePassword = (pName: string) => {
  return validation(
    pName,
    passwordRegExp,
  );
};

export const validateName = (pName: string) => {
  return validation(
    pName,
    nameRegExp,
  );
};

export const validatePhone = () => {
  return validation(
    'phone',
    phoneRegExp,
  );
};

export const notEmptyValidator = (value: string) => {
  return value.trim().length > 0;
};
