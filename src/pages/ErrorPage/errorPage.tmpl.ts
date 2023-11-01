import css from './ErrorPage.module.scss';

export const tmpl = `
    <div class="${css.container}">
        <div class="${css.contentError}">
            <span class="${css.titleError}">Что-то пошло не так..</span>
            <span class="${css.titleError}">Уже фиксим</span>
            {{{linkBack}}}
        </div>
    </div>
`;
