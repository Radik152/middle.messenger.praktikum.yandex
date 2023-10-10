import Block from '../../utils/Block';
import { Chat } from '../../utils/data/chats';
import { tmpl } from './chatsList.tmpl';

interface IProps {
  chats: Chat[];
}

export class ChatsList extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
