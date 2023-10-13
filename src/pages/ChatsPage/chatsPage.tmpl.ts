import css from './ChatsPage.module.scss';

export const tmpl = `
    <div class="${css.containerChats}">
        <div class="${css.chatsList}">
            <div class="${css.chatsListHeader}">
                {{{linkProfile}}}
                {{{input}}}
            </div>
            {{{line}}}
            {{{chats}}}
        </div>
        {{{chat}}}
    </div>
`;


// <input class="${css.searchChat}" type="text"  id="message" name="message " placeholder="Поиск" />
