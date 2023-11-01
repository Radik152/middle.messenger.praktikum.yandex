import css from './ProfileValueElement.module.scss';

export const tmpl = `
    <div>
        <div class="${css.containerProfileValue}">
            <span class="${css.titleProfile}">{{title}}</span>
            <span class="${css.valueProfile}">{{value}}</span>
        </div> 
        {{{line}}}
    </div>
`;
