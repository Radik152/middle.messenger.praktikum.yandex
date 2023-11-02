import { Message } from '../../types/messages';
import { Block } from '../../utils/Block';

import { tmpl } from './messagesContainerComponent.tmpl';

import './MessagesContainerComponent.scss';

interface IProps {
    messages: Message[];
    id: string;
    events?: Record<string, (event: Event) => void>;
}

export class MessagesContainerComponent extends Block<IProps> {
    render() {
      console.log(this.props.messages);

      return this.compile(tmpl, this.props);
    }
}
