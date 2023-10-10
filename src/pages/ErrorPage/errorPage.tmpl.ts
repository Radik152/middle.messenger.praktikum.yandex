import css from './ErrorPage.module.scss';

export const tmpl = `
    <div class="${css.container}">
        <div class="${css.contentError}">
            <span class="${css.codeError}">{{codeError}}</span>
            <span class="${css.titleError}">{{titleError}}</span>
            {{{linkBack}}}
        </div>
    </div>
`;
