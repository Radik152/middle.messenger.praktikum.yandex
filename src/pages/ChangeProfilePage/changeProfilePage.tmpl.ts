import css from './ChangeProfilePage.module.scss';

export const tmpl = `
    <div class="${css.containerProfile}">
        <div class="${css.back}">
            {{{backLink}}}
        </div>
        <div class="${css.profile}">
            <form id="changeProfileForm" class="${css.windowProfile}" onsubmit="return false">
                <div class="${css.imgContainer}">
                    {{{changeProfileInput}}}
                </div>
                {{{display_name}}}
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
