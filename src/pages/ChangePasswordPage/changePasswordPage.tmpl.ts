import css from './ChangePasswordPage.module.scss';

export const tmpl = `
    <div class="${css.containerProfile}">
        <div class="${css.back}">
            <div class="${css.backIcon}"></div>
        </div>
        <div class="${css.profile}">
            <form class="${css.windowProfile}">
                {{{Avatar}}}
                {{{TitleName}}}
                <div class="${css.valueBlock}">
                    {{{OldPasswordValue}}}
                    {{{NewPasswordValue}}}
                    {{{NewPasswordRepeatValue}}}
                </div>
                {{{ButtonSave}}}
            </form>
        </div>
    </div>  
`;
