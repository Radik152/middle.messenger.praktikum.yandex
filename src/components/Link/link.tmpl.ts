import css from './Link.module.scss';

export const tmpl = `
    <a href="{{to}}" class="${css.link} {{className}}">{{titleLink}}</a>
`;
