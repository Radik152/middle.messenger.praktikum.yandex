import css from './ChangePasswordPage.module.scss';

export const tmpl = `
    <div class="${css.containerProfile}">
        <div class="${css.back}">
            <div class="${css.backIcon}"></div>
        </div>
        <div class="${css.profile}">
            <form id="changePasswordForm" class="${css.windowProfile}" onsubmit="return false">
                {{{avatar}}}
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
