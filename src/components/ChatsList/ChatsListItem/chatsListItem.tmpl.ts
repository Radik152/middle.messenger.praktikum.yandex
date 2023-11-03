import moment from 'moment';
import Handlebars from 'handlebars';
import { BASE_IMAGE_URL } from '../../../utils/Contants';
import css from './ChatsListItem.module.scss';

Handlebars.registerHelper('lastMessage', (array) => {
  if (array && array.length > 0) {
      return array[array.length - 1].message;
  }

  return '';
});

Handlebars.registerHelper('lastItemDate', (array) => {
  if (array && array.length > 0) {
      return moment(new Date(array[array.length - 1].date)).format('L');
  }

  return '';
});

Handlebars.registerHelper('ifIdEquals', (id, opts) => {
  const activeId = window.location.pathname.slice(1);
  if (activeId === id) {
      return opts.fn('background-color: #A8D8EA');
  }

  return opts.inverse({});
});

Handlebars.registerHelper('ifLastPerson', (array, opts) => {
  if (array && array.length > 0) {
      if (array[array.length - 1].author !== 'Вы') {
          return opts.fn(array[array.length - 1].message);
      }

      return opts.inverse(array[array.length - 1].message);
  }

  return '';
});

export const tmpl = `
<div>
  <li {{#ifIdEquals chat.id }} style='{{chat}}' {{else}}  {{/ifIdEquals}} class="${css.containerChat}"> 
    {{#if chat.avatar}}
        <img class="${css.img}" src="${BASE_IMAGE_URL}{{chat.avatar}}" alt="Аватар - {{chat.title}}">
    {{else}}
        <div class="${css.img}"></div>
    {{/if}}
    <div class="${css.infoChat}">
        <span class="${css.nameChat}">{{chat.title}}</span>
        <p class="${css.lastMessage}">{{chat.last_message.content}}</p>
        {{#ifLastPerson chat.last_message.content}}
            <p class="${css.lastMessage}">{{chat.last_message.content}}</p>
        {{else}}
            <p class="${css.lastMessage}"><b class="item__text--bold">Вы:</b> {{chat.last_message.content}}</p>
        {{/ifLastPerson}}
        <div class="${css.timeBlock}">
          <div class="additional__date">
              {{lastItemDate chat.messanges}}
          </div>
          {{#if chat.new}}
          <div class="additional__new-messenges-container">
              <p class="additional__new-messenges">{{chat.new}}</p>
          <div>
          {{/if}}
      </div>
    </div>
  </li>
  <div class="${css.line}"></div>
</div>
`;
