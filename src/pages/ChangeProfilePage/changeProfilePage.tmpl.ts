import css from './ChangeProfilePage.module.scss';

export const tmpl = `
    <div class="${css.containerProfile}">
        <div class="${css.back}">
            <div class="${css.backIcon}"></div>
        </div>
        <div class="${css.profile}">
            <div class="${css.windowProfile}">
                {{{ChangeProfileInput}}}
                {{{TitleName}}}
                <div class="${css.valueBlock}">
                    {{{EmailValue}}}
                    {{{LoginValue}}}
                    {{{NameValue}}}
                    {{{FamilyValue}}}
                    {{{NameChatValue}}}
                    {{{PhoneValue}}}
                </div>
                {{{ButtonSave}}}
            </div>
        </div>
    </div>
`;