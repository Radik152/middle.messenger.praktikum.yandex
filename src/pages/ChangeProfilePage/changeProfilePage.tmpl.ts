import css from './ChangeProfilePage.module.scss';

export const tmpl = `
    <div class="${css.containerProfile}">
        <div class="${css.back}">
            <div class="${css.backIcon}"></div>
        </div>
        <div class="${css.profile}">
            <form id="changeProfileForm" class="${css.windowProfile}" onsubmit="return false">
                {{{changeProfileInput}}}
                {{{titleName}}}
                <div class="${css.valueBlock}">
                    {{{emailValue}}}
                    {{{loginValue}}}
                    {{{nameValue}}}
                    {{{familyValue}}}
                    {{{nameChatValue}}}
                    {{{phoneValue}}}
                </div>
                {{{buttonSave}}}
            </form>
        </div>
    </div>
`;
