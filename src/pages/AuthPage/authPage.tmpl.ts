import css from './AuthPage.module.scss';

export const tmpl = `
    <main class="${css.container}">
        <div class="${css.containerAuthPage}">
            {{{TitleAuth}}}
            <form class="${css.form}">
                <div>
                    {{{FormItemLogin}}}
                    {{{FormItemPassword}}}
                </div>
                <div class="${css.buttonBlock}">
                    {{{ButtonAuth}}}
                    {{{LinkRegistration}}}
                </div>
            </form>
        </div>
    </main>
`;
