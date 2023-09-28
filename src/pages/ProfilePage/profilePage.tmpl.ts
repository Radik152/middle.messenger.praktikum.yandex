import css from './ProfilePage.module.scss';

export const tmpl = `
    <main class="${css.containerProfile}">
        <div class="${css.back}">
            <div class="${css.backIcon}"></div>
        </div>
        <div class="${css.profile}">
            <div class="${css.windowProfile}">
                {{{Avatar}}}
                {{{TitleName}}}
                <div class="${css.valueBlock}">
                    {{{EmailValue}}}
                    {{{LoginValue}}}
                    {{{NameValue}}}
                    {{{FamilyValue}}}
                    {{{NameChatValue}}}
                    {{{PhoneValue}}}
                </div>
                <div class="${css.buttonsBlock}">
                    {{{LinkChangeProfile}}}
                    {{{Line}}}
                    {{{LinkChangePassword}}}
                    {{{Line}}}    
                    {{{LinkExit}}}
                </div>
            </div>
        </div>
    </main>
`;
