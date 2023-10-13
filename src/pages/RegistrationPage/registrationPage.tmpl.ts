import css from './RegistrationPage.module.scss';

export const tmpl = `
    <div class="${css.container}">
        <div class="${css.containerRegPage}">
            {{{titleAuth}}}
            <form id="registrationForm" class="${css.form}" onsubmit="return false">
                <div>
                    {{{formItemEmail}}}
                    {{{formItemLogin}}}
                    {{{formItemFirstName}}}
                    {{{formItemSecondName}}}
                    {{{formItemPhone}}}
                    {{{formItemPassword}}}
                    {{{formItemRepeatPassword}}}
                </div>
                <div class="${css.buttonBlock}">
                    {{{buttonAuth}}}
                    {{{linkRegistration}}}
                </div>
            </form>
        </div>
    </div>
`;
