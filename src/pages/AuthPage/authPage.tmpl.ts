import css from './AuthPage.module.scss';

export const tmpl = `
    <div class="${css.container}">
        <div class="${css.containerAuthPage}">
            {{{titleAuth}}}
            <form id="authForm" class="${css.form}" onsubmit="return false">
                <div>
                    {{{formItemLogin}}}
                    {{{formItemPassword}}}
                </div>
                <div class="${css.buttonBlock}">
                    {{{buttonAuth}}}
                    {{{linkRegistration}}}
                </div>
            </form>
        </div>
    </div>
`;
