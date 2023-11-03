import Handlebars from 'handlebars';
import { store } from '../../utils/store/Store';
import { converChatDate } from '../../utils/Helpers';

Handlebars.registerHelper('messageDate', (message, opts) => {
    const userId = store.selectUserId();
    if (message.user_id === userId) {
        return opts.fn(converChatDate(message.time));
    }

    return opts.inverse(converChatDate(message.time));
});

Handlebars.registerHelper('ifMessageAuthorContainer', (messageUserId, opts) => {
    const userId = store.selectUserId();
    if (userId === messageUserId) {
        return opts.fn("class='messages-container__message messages-container__message--you'");
    }

    return opts.inverse("class='messages-container__message'");
});

export const tmpl = `
  <div id="{{id}}" class="messages-container">
      {{#each messages}}
        {{#if this.user_id}}
          <div {{#ifMessageAuthorContainer this.user_id}} {{{this}}} {{else}} {{{this}}} {{/ifMessageAuthorContainer}}>
              <p>{{this.content}}</p>
              {{#messageDate this}}
                <p class="message-date message-date--you">{{this}}<p>
              {{else}}
                <p class="message-date">{{this}}</p>
              {{/messageDate}}
          </div>
        {{/if}}
      {{/each}}
  </div>`;
