import css from './FormItem.module.scss';

export const tmpl = `
    {{{input}}}
    <label class="${css.label}" for="{{keyInput}}">{{titleInput}}</label>
`;
