import css from './ProfileValueInput.module.scss';

export const tmpl = `
    <div class="${css.containerProfileValue}">
        <label class="${css.titleProfile}">{{title}}</label>
        {{{input}}}
    </div> 
    {{{line}}}
`;
