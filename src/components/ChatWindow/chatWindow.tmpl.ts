import Handlebars from 'handlebars';
import css from './ChatWindow.module.scss';

const converChatDate = (date: string): string => {
  const formattedDate = new Date(date);
  const hours = formattedDate.getHours();
  const minutes = formattedDate.getMinutes();
  if (minutes < 10) {
      return `${hours}:0${minutes}`;
  }

  return `${hours}:${minutes}`;
};

Handlebars.registerHelper('ifMessageAuthorContainer', (message, opts) => {
  if (message.author === 'Вы') {
      return opts.fn("class='main__message main__message--you'");
  }

  return opts.inverse("class='main__message'");
});

Handlebars.registerHelper('messageDate', (message, opts) => {
  if (message.author === 'Вы') {
      return opts.fn(converChatDate(message.date));
  }

  return opts.inverse(converChatDate(message.date));
});

export const tmpl = `
  <div class="${css.chatWindow}">
    {{#if activeChat}}
      <div class="${css.containerChat}">
        <div>
          <div class="${css.headerChat}">
            <div class="${css.titleChat}">
              {{#if activeChat.avatar}}
                  <img class="${css.img}"  src={{this.avatar}} alt="Аватар - {{this.name}}">
              {{else}}
                  <div class="${css.img}" ></div>
              {{/if}}
              <span>{{activeChat.name}}</span>
            </div>
            <div class="${css.moreInfo}">...</div>
          </div>
          {{{line}}}
        </div>
        <div class="${css.chatMain}">
            {{#each activeChat.messanges}}
              <div {{#ifMessageAuthorContainer this}} {{{this}}} {{else}} {{{this}}} {{/ifMessageAuthorContainer}}>
                  <p>{{this.message}}</p>
                  {{#messageDate this}}
                      <p class="main__date main__date--you">{{this}}<p>
                  {{else}}
                      <p class="main__date">{{this}}</p>
                  {{/messageDate}}
              </div>
          {{/each}}
        </div>
        <div>
          {{{line_2}}}
          <div class="${css.footerChat}">
            <div class="${css.attachmentIcon}"></div>
            {{{textField}}}
            <div class="${css.sendIcon}"></div>
          </div>
        </div>
      </div>
    {{else}}
      <div class="${css.containerEmptyChat}">
          <span>Выберите чат чтобы отправить сообщение</span>
      </div>
    {{/if}}
      
  </div>  
`;
