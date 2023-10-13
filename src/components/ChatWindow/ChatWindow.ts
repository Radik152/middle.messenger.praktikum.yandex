import Block from '../../utils/Block';
import { Chat } from '../../utils/data/chats';
import { notEmptyValidator } from '../../utils/validations/validation';
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
    this.children.textField = new TextField({ name: 'message', events: { change: () => this.validationMessages() } });
  }

  render() {
    return this.compile(tmpl, this.props);
  }

  validationMessages() {
    const input = document.getElementById('message') as HTMLInputElement;

    return notEmptyValidator(input.value);
  }
}
