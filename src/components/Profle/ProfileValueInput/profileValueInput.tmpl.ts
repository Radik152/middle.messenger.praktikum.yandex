import css from './ProfileValueInput.module.scss';

export const tmpl = `
    <div class="${css.containerProfileValue}">
        <label class="${css.titleProfile}">{{title}}</label>
        <input class="${css.inputChangeProfile}" type="{{typeInput}}" id="{{keyInput}}" name="{{keyInput}}" placeholder="{{value}}" />
    </div> 
    {{{Line}}}
`;