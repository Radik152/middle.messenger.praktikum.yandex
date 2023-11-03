import css from './ChatsPage.module.scss';

export const tmpl = `
    <div class="${css.containerChats}">
        <div class="${css.chatsList}">
            <div class="${css.chatsListHeader}">
                {{{linkProfile}}}
                {{{input}}}
                {{{addChatButton}}}
            </div>
            {{{line}}}
            {{{chats}}}
        </div>
        {{{chat}}}
    </div>
`;
