/* eslint-disable no-console */
import { tmpl } from './chatsPage.tmpl';
import { Link } from '../../components/Link/Link';
import { Line } from '../../components/Line/Line';
import { chats } from '../../utils/data/chats';
import { ChatsList } from '../../components/ChatsList/ChatsList';

import { Block } from '../../utils/Block';
import { notEmptyValidator } from '../../utils/validations/validation';
import { ChatWindow } from '../../components/ChatWindow/ChatWindow';

import css from './ChatsPage.module.scss';
import { withChats, withMessages, withSelectedChat } from '../../utils/store/WithStore';
import ChatsController from '../../utils/controllers/ChatsController';
import { SearchComponent } from '../../components/SearchComponent/SearchComponent';
import { SEARCH_INTERVAL_TIME_MS } from '../../utils/Contants';
import { Button } from '../../components/Button/Button';
import { ModalComponent } from '../../components/Modal/ModalComponent/ModalComponent';
import { ModalInputComponent } from '../../components/Modal/ModalInputComponent/ModalInputComponent';
import { ModalFormComponent } from '../../components/Modal/ModalFormComponent/ModalFormComponent';
import { Routes } from '../../utils/routes/routes';

let interval: NodeJS.Timeout;
export class ChatsPageComponent extends Block {
    constructor(props: any) {
        super(props);
        ChatsController.fetchChats();
    }

    activeChat() {
      const pathname = window.location.pathname.slice(1);
      const activeChat = chats.find((person) => person?.id === pathname);

      return activeChat || null;
    }


    init() {
      this.children.linkProfile = new Link({ titleLink: 'Профиль >', to: Routes.Profile, className: css.linkProfile });
      this.children.line = new Line({});
      this.children.input = new SearchComponent({
        events: { keyup: (e) => this.submitSearch(e) },
      });
      this.children.chats = new ChatsList({});
      this.children.chat = new ChatWindow({ activeChat: this.activeChat() });

      const inputs = [new ModalInputComponent({ name: 'title', labelValue: 'Название', isAutofocus: true })];
      const form = new ModalFormComponent({
        inputs,
        events: {
            submit: this.onModalSubmit.bind(this),
        },
        title: 'Создание чата',
        button: new Button({ titleButton: 'Создать', className: css.addChatButton }),
        classNames: 'chats-list__form',
      });

      this.children.addChatButton = new Button({
        titleButton: 'Добавить',
        className: css.addChatButton,
        events: {
            click: () => {
                const modal = new ModalComponent({ container: '#app', form });
                this.children.Modal = modal;
                modal.createPortal();
            },
        },
      });

      this.children.Modal = new ModalComponent({ container: '#app', form });
    }

    render() {
      return this.compile(tmpl, this.props);
    }

    submitSearch = async (e: Event) => {
      if (e.target != null) {
        const input = e.target as HTMLInputElement;
        clearInterval(interval);
        interval = setTimeout(async () => {
            await ChatsController.fetchChats(input.value);
        }, SEARCH_INTERVAL_TIME_MS);
      }
    };

    validationMessages() {
      const input = document.getElementById('message') as HTMLInputElement;

      return notEmptyValidator(input.value);
    }

    private async onModalSubmit(e: Event): Promise<void> {
      e.preventDefault();
      if (e.target != null && e.target instanceof HTMLFormElement) {
          if (this.children.Modal instanceof ModalComponent && this.children.Modal.children.form instanceof ModalFormComponent) {
              const { form } = this.children.Modal.children;
              form.validateInputs();
              form.props.error = '';
              const values = form.getValues<{ title: string }>();

              if (form.isFormValid() && values != null) {
                  try {
                      await ChatsController.create(values.title);
                      this.children.Modal.closeModal();
                  } catch (event: unknown) {
                    console.error(event);
                  }
              }
          }
      }
  }
}

export const ChatsPage = withChats(withMessages(withSelectedChat(ChatsPageComponent)));
