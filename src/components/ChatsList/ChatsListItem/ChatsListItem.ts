import { Chat } from '../../../types/chat';
import { Block } from '../../../utils/Block';
import { store } from '../../../utils/store/Store';
import { withSelectedChat } from '../../../utils/store/WithStore';
import { tmpl } from './chatsListItem.tmpl';

interface IProps {
  chat: Chat;
  selectedChat: Chat['id'];
  events?: Record<string, (args: unknown) => void>;
}


class ChatsListItemComponent extends Block {
  constructor(props: IProps) {
    super({
        ...props,
        events: {
            ...props?.events,
            click: () => {
                store.set('selectedChat', this.props.chat.id);
            },
        },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}

export const ChatsListItem = withSelectedChat(ChatsListItemComponent);
