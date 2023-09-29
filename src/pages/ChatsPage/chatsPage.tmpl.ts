import css from './ChatsPage.module.scss';

export const tmpl = `
    <div class="${css.containerChats}">
        <div class="${css.chatsList}">
            <div class="${css.chatsListHeader}">
                {{{LinkProfile}}}
                <input class="${css.searchChat}" type="text"  id="message" name="message " placeholder="Поиск" />
            </div>
            {{{Line}}}
        </div>
        <div class="${css.chatWindow}">
            <div class="${css.containerEmptyChat}">
                <span>Выберите чат чтобы отправить сообщение</span>
            </div>
        </div>
    </div>
`;
