import { Chat } from '../../types/chat';
import { Block } from '../../utils/Block';
import { withChats, withMessages, withSelectedChat } from '../../utils/store/WithStore';
import { notEmptyValidator } from '../../utils/validations/validation';
import { Button } from '../Button/Button';
import { Line } from '../Line/Line';
import { ModalComponent } from '../Modal/ModalComponent/ModalComponent';
import { ModalFormComponent } from '../Modal/ModalFormComponent/ModalFormComponent';
import { ModalInputComponent } from '../Modal/ModalInputComponent/ModalInputComponent';
import { tmpl } from './chatWindow.tmpl';
// eslint-disable-next-line import/no-named-as-default
import UserController from '../../utils/controllers/UserController';
import ChatsController from '../../utils/controllers/ChatsController';
import { router } from '../../utils/routes/Router';
import { Routes } from '../../utils/routes/routes';
import { isEqual } from '../../utils/Helpers';
import { MessagesContainerComponent } from '../MessagesContainerComponent/MessagesContainerComponent';
import MessagesController from '../../utils/controllers/MessagesController';
import { AvatarComponent } from '../AvatarComponent/AvatarComponent';
import { BASE_IMAGE_URL } from '../../utils/Contants';

import css from './ChatWindow.module.scss';


interface IProps {
  activeChat: Chat | null;
}

export class ChatWindowComponent extends Block {
  constructor(props: IProps) {
    super(props);
  }

  init() {
    this.children.line = new Line({});
    this.children.line_2 = new Line({});

    this.children.ChatDeleteModal = new ModalComponent({
      container: '#app',
      form: new ModalFormComponent({
          inputs: [
              new ModalInputComponent({
                  name: 'title',
                  labelValue: 'Введите название',
                  isAutofocus: true,
                  validate: (value: string) => {
                      const activeChat = (this.props.chats as Chat[]).find((chat) => chat.id === this.props.selectedChat);
                      if (activeChat != null && value !== activeChat.title) {
                          return 'Название введено неверно';
                      }

                      return null;
                  },
              }),
          ],
          events: {
              submit: this.onChatDeleteModalSubmit.bind(this),
          },
          title: 'Удаление чата',
          button: new Button({ titleButton: 'Удалить', className: css.buttonModal }),
          classNames: '',
      }),
    });

    this.children.chatDeleteButton = new Button({
      titleButton: '',
      className: css.deleteChat,
      events: {
          click: () => {
              const { ChatDeleteModal } = this.children;
              if (ChatDeleteModal instanceof ModalComponent) {
                  ChatDeleteModal.createPortal();
              }
          },
      },
    });

    this.children.DeletePersonModal = new ModalComponent({
      container: '#app',
      form: new ModalFormComponent({
          inputs: [
              new ModalInputComponent({
                  name: 'login',
                  labelValue: 'Введите логин',
                  isAutofocus: true,
              }),
          ],
          events: {
              submit: this.onDeletePersonModalSubmit.bind(this),
          },
          title: 'Удалить пользователя',
          button: new Button({ titleButton: 'Удалить', className: css.buttonModal }),
          classNames: '',
      }),
  });

    this.children.deletePersonButton = new Button({
      titleButton: '',
      className: css.deletePerson,
      events: {
          click: () => {
              const { DeletePersonModal } = this.children;
              if (DeletePersonModal instanceof ModalComponent) {
                  DeletePersonModal.createPortal();
              }
          },
      },
    });

    this.children.AddPersonModal = new ModalComponent({
      container: '#app',
      form: new ModalFormComponent({
          inputs: [
              new ModalInputComponent({
                  name: 'login',
                  labelValue: 'Введите логин',
                  isAutofocus: true,
              }),
          ],
          events: {
              submit: this.onAddPersonModalSubmit.bind(this),
          },
          title: 'Добавить пользователя',
          button: new Button({ titleButton: 'Добавить', className: css.buttonModal }),
          classNames: '',
      }),
    });

    this.children.addPersonButton = new Button({
      titleButton: '',
      className: css.addPerson,
      events: {
          click: () => {
              const { AddPersonModal } = this.children;
              if (AddPersonModal instanceof ModalComponent) {
                  AddPersonModal.createPortal();
              }
          },
      },
    });

    const inputs = [
      new ModalInputComponent({
          name: 'message',
          labelValue: '',
          isAutofocus: true,
          inputClasses: css.textField,
          inputContainerClasses: css.textField,
          validate: (message) => {
              if (!message || message.trim().length === 0) {
                  return '';
              }

              return null;
          },
      }),
  ];
  const formEvents = { submit: (e: Event) => this.onMessageSubmit(e) };
  this.children.form = new ModalFormComponent({
      inputs,
      classNames: css.formMessages,
      events: formEvents,
      button: new Button({ titleButton: '', className: css.sendIcon }),
  });
  }

  componentDidUpdate(_oldProps: any, _newProps: any): boolean {
    if (isEqual(_oldProps, _newProps)) {
        if (_newProps.selectedChat != null) {
            if (isEqual(_oldProps.messages[this.props.selectedChat], _newProps.messages[this.props.selectedChat])) {
                this.children.messagesContainer = new MessagesContainerComponent({
                    messages: this.props.messages[this.props.selectedChat],
                    id: 'messages',
                });
                setTimeout(() => {
                    const messagesContainer = document.getElementById('messages');
                    if (messagesContainer != null) {
                        messagesContainer.scrollTop = messagesContainer.scrollHeight;
                    }
                }, 0);
            }
        }

        return true;
    }

    return false;
}

    render() {
        const activeChat = (this.props.chats as Chat[]).find((chat) => chat.id === this.props.selectedChat);

        if (activeChat != null) {
            this.children.avatar = new AvatarComponent({
                id: 'chatAvatar',
                isActive: true,
                inputContainerClasses: 'header__image',
                events: {
                    click: async () => {
                        const inputComponent = document.getElementById('chatAvatar') as HTMLInputElement;
                        inputComponent?.click();
                        inputComponent?.addEventListener('change', async () => {
                            const files = inputComponent?.files;
                            if (files != null) {
                                try {
                                    const newAvatar = await ChatsController.updateAvatar(files[0], activeChat.id);
                                    const avatar = this.children.avatar as Block;

                                    avatar.setProps({
                                        ...avatar.props,
                                        avatar: newAvatar ? `${BASE_IMAGE_URL}${newAvatar}` : null,
                                    });
                                } catch (e: unknown) {
                                    console.error(e);
                                }
                            }
                        });
                    },
                },
                avatar: activeChat.avatar != null ? `${BASE_IMAGE_URL}${activeChat.avatar}` : null,
            });
        }

        return this.compile(tmpl, { ...this.props, activeChat });
    }

    validationMessages() {
        const input = document.getElementById('message') as HTMLInputElement;

        return notEmptyValidator(input.value);
    }

    private async onChatDeleteModalSubmit(e: Event): Promise<void> {
        e.preventDefault();
        if (e.target != null && e.target instanceof HTMLFormElement) {
            if (
                this.children.ChatDeleteModal instanceof ModalComponent
                && this.children.ChatDeleteModal.children.form instanceof ModalFormComponent
            ) {
                const { form } = this.children.ChatDeleteModal.children;

                form.validateInputs();

                if (form.isFormValid()) {
                    try {
                        const activeChat = (this.props.chats as Chat[]).find((chat) => chat.id === this.props.selectedChat);
                        if (activeChat != null) {
                            await ChatsController.delete(activeChat.id);
                            this.children.ChatDeleteModal.closeModal();
                            router.go(Routes.Main);
                        }
                    } catch (event: unknown) {
                        console.error(event);
                    }
                }
            }
        }
    }

    private async onAddPersonModalSubmit(e: Event): Promise<void> {
        e.preventDefault();
        if (e.target != null && e.target instanceof HTMLFormElement) {
            if (
                this.children.AddPersonModal instanceof ModalComponent
                && this.children.AddPersonModal.children.form instanceof ModalFormComponent
            ) {
                const { form } = this.children.AddPersonModal.children;

                const search = form.getValues<{ login: string }>();

                try {
                    const activeChat = (this.props.chats as Chat[]).find((chat) => chat.id === this.props.selectedChat);

                    if (search != null && activeChat != null) {
                        const users = await UserController.searchUser(search);
                        if (users != null && users.length === 1) {
                            await ChatsController.addUserToChat(activeChat.id, users[0].id);
                            this.children.AddPersonModal.closeModal();
                        } else {
                            form.props.error = 'Пользователь не найден';
                        }
                    }
                } catch (event: unknown) {
                    console.error(event);
                }
            }
        }
    }

    private async onDeletePersonModalSubmit(e: Event): Promise<void> {
        e.preventDefault();
        if (e.target != null && e.target instanceof HTMLFormElement) {
            if (
                this.children.DeletePersonModal instanceof ModalComponent
                && this.children.DeletePersonModal.children.form instanceof ModalFormComponent
            ) {
                const { form } = this.children.DeletePersonModal.children;

                const search = form.getValues<{ login: string }>();

                try {
                    const activeChat = (this.props.chats as Chat[]).find((chat) => chat.id === this.props.selectedChat);

                    if (search != null && activeChat != null) {
                        const users = await UserController.searchUser(search);
                        if (users != null && users.length === 1) {
                            await ChatsController.deleteUserToChat(activeChat.id, users[0].id);
                            this.children.DeletePersonModal.closeModal();
                        } else {
                            form.props.error = 'Пользователь не найден';
                        }
                    }
                } catch (event: unknown) {
                    console.error(event);
                }
            }
        }
    }

    private onMessageSubmit(e: Event): void {
        e.preventDefault();
        if (e.target != null && e.target instanceof HTMLFormElement) {
            if (this.children.form instanceof ModalFormComponent) {
                const { form } = this.children;

                form.validateInputs();
                const values = form.getValues<{ message: string }>();

                if (form.isFormValid() && values != null && values.message.trim().length > 0) {
                    MessagesController.sendMessage(this.props.selectedChat, values.message);
                    form.clearForm();
                }
            }
        }
    }
}


export const ChatWindow = withChats(withMessages(withSelectedChat(ChatWindowComponent)));
