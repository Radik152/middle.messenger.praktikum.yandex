import css from './ChangePasswordPage.module.scss';

export const tmpl = `
<div class="${css.containerProfile}">
        <div class="${css.back}">
            <div class="${css.backIcon}"></div>
        </div>
        <div class="${css.profile}">
            <div class="${css.windowProfile}">
                {{{Avatar}}}
                {{{TitleName}}}
                <div class="${css.valueBlock}">
                    {{{OldPasswordValue}}}
                    {{{NewPasswordValue}}}
                    {{{NewPasswordRepeatValue}}}
                </div>
                {{{ButtonSave}}}
            </div>
        </div>
    </div>  
`;