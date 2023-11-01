import css from './ProfilePage.module.scss';

export const tmpl = `
    <div class="${css.containerProfile}">
        <div class="${css.back}">
            {{{backLink}}}
        </div>
        <div class="${css.profile}">
            <div class="${css.windowProfile}">
                <div class="${css.imgContainer}">
                    {{{avatar}}}
                </div>
                {{display_name}}
                <div class="${css.valueBlock}">
                    {{{emailValue}}}
                    {{{loginValue}}}
                    {{{nameValue}}}
                    {{{familyValue}}}
                    {{{nameChatValue}}}
                    {{{phoneValue}}}
                </div>
                <div class="${css.buttonsBlock}">
                    {{{linkChangeProfile}}}
                    {{{line}}}
                    {{{linkChangePassword}}}
                    {{{line_2}}}    
                    {{{linkExit}}}
                </div>
            </div>
        </div>
    </div>
`;
