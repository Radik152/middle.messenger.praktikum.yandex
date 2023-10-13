import Handlebars from 'handlebars';
import moment from 'moment';
import css from './ChatsList.module.scss';

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
  <ul class="${css.container}">
    {{#each chats}}
        <li {{#ifIdEquals this.id }} style='{{this}}' {{else}}  {{/ifIdEquals}} onclick="window.location.replace('/{{this.id}}')" class="${css.containerChat}"> 
            {{#if this.avatar}}
                <img class="${css.img}"  src={{this.avatar}} alt="Аватар - {{this.name}}">
            {{else}}
                <div class="${css.img}" ></div>
            {{/if}}
            <div class="${css.infoChat}">
                <span class="${css.nameChat}">{{this.name}}</span>
                <p class="${css.lastMessage}">{{lastMessage this}}</p>
                {{#ifLastPerson this.messanges}}
                    <p class="${css.lastMessage}">{{this}}</p>
                {{else}}
                    <p class="${css.lastMessage}"><b class="item__text--bold">Вы:</b> {{this}}</p>
                {{/ifLastPerson}}
                <div class="${css.timeBlock}">
                  <div class="additional__date">
                      {{lastItemDate this.messanges}}
                  </div>
                  {{#if this.new}}
                  <div class="additional__new-messenges-container">
                      <p class="additional__new-messenges">{{this.new}}</p>
                  <div>
                  {{/if}}
              </div>
            </div>
        </li>
        <div class="${css.line}"></div>
    {{/each}}
  </ul>
`;
