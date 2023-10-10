import Block from '../../utils/Block';
import { Chat } from '../../utils/data/chats';
import { Line } from '../Line/Line';
import { TextField } from '../TextField/TextField';
import { tmpl } from './chatWindow.tmpl';

interface IProps {
  activeChat: Chat | null;
}

export class ChatWindow extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  init() {
    this.children.line = new Line({});
    this.children.line_2 = new Line({});
    this.children.textField = new TextField();
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
