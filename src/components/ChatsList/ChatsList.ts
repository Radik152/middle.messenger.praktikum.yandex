import { Chat } from '../../types/chat';
import { Block } from '../../utils/Block';
import { withChats } from '../../utils/store/WithStore';
import { ChatsListItem } from './ChatsListItem/ChatsListItem';
import { tmpl } from './chatsList.tmpl';

class ChatsListComponent extends Block {
  render() {
    this.children.chatItems = (this.props.chats as Chat[]).map((chat) => {
      return new ChatsListItem({ chat });
    });

    return this.compile(tmpl, this.props);
  }
}

export const ChatsList = withChats(ChatsListComponent);
