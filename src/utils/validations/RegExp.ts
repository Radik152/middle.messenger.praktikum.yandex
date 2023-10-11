export const loginRegExp = /^[a-zA-z\d\-_]{3,20}$/;

export const emailRegExp = /^[\w\d\S\-+\\]{1,40}[@][\w]{1,20}.[\w]{2,10}$/;

export const passwordRegExp = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,39})\S$/;

export const nameRegExp = /^[А-ЯA-Z][a-zа-я-]{1,30}$/;

export const phoneRegExp = /^([+]?[\d]{10,15})$/;
