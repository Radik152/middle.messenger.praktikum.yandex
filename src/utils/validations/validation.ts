import {
  emailRegExp, loginRegExp, nameRegExp, passwordRegExp, phoneRegExp,
} from './RegExp';


export const validation = (name: string, regExp: RegExp) => {
    const input = document.getElementById(name) as HTMLInputElement;
    const error = document.getElementById(`error_${name}`);

    if (input?.value) {
      input?.classList.remove('invalidInput');
      error?.classList.add('dnone');

      return input?.value.match(regExp);
    }
    error?.classList.remove('dnone');
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

export const validateRepeatPassword = (pName: string, pPasw: string) => {
  const input = document.getElementById(pName) as HTMLInputElement;
  const password = document.getElementById(pPasw) as HTMLInputElement;

  if (password.value === input.value) {
    return validation(
      pName,
      passwordRegExp,
    );
  }

  return null;
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
