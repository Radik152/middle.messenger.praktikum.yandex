import css from './RegistrationPage.module.scss';

export const tmpl = `
    <main class="${css.container}">
        <div class="${css.containerRegPage}">
            {{{TitleAuth}}}
            <form class="${css.form}">
                <div>
                    {{{FormItemEmail}}}
                    {{{FormItemLogin}}}
                    {{{FormItemFirstName}}}
                    {{{FormItemSecondName}}}
                    {{{FormItemPhone}}}
                    {{{FormItemPassword}}}
                    {{{FormItemRepeatPassword}}}
                </div>
                <div class="${css.buttonBlock}">
                    {{{ButtonAuth}}}
                    {{{LinkRegistration}}}
                </div>
            </form>
        </div>
    </main>
`;
