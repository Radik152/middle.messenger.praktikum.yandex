import css from './ProfileValueInput.module.scss';

export const tmpl = `
    <div class="${css.containerProfileValue}">
        <label class="${css.titleProfile}">{{title}}</label>
        {{{input}}}
        <span id="error_{{keyInput}}" class="${css.error} dnone">{{errorMessage}}</span>
    </div> 
    {{{line}}}
`;
