import css from './ChangePasswordPage.module.scss';

export const tmpl = `
    <div class="${css.containerProfile}">
        <div class="${css.back}">
            {{{backLink}}}
        </div>
        <div class="${css.profile}">
            <form id="changePasswordForm" class="${css.windowProfile}" onsubmit="return false">
                <div class="${css.imgContainer}">
                    {{{avatar}}}
                </div>
                {{{titleName}}}
                <div class="${css.valueBlock}">
                    {{{oldPasswordValue}}}
                    {{{newPasswordValue}}}
                    {{{newPasswordRepeatValue}}}
                </div>
                {{{buttonSave}}}
            </form>
        </div>
    </div>  
`;
