/* eslint-disable no-console */
import { tmpl } from './chatsPage.tmpl';
import { Link } from '../../components/Link/Link';
import { Line } from '../../components/Line/Line';
import { Input } from '../../components/Input/Input';
import { chats } from '../../utils/data/chats';
import { ChatsList } from '../../components/ChatsList/ChatsList';

import Block from '../../utils/Block';
import { notEmptyValidator } from '../../utils/validations/validation';
import { ChatWindow } from '../../components/ChatWindow/ChatWindow';

import css from './ChatsPage.module.scss';

export class ChatsPage extends Block {
    constructor() {
        super('div', {});
    }

    activeChat() {
      const pathname = window.location.pathname.slice(1);
      const activeChat = chats.find((person) => person?.id === pathname);

      return activeChat || null;
    }


    init() {
      this.children.linkProfile = new Link({ titleLink: 'Профиль >', to: '/profile', className: css.linkProfile });
      this.children.line = new Line({});
      this.children.input = new Input({
        type: 'text', name: 'chats', placeholder: 'Поиск', className: css.searchChat, events: { change: () => notEmptyValidator('chats') },
      });
      this.children.chats = new ChatsList({ chats });
      this.children.chat = new ChatWindow({ activeChat: this.activeChat() });
    }

    render() {
      return this.compile(tmpl, this.props);
    }

    validationMessages() {
      const input = document.getElementById('message') as HTMLInputElement;

      return notEmptyValidator(input.value);
    }
}
