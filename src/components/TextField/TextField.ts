import Block from '../../utils/Block';
import { tmpl } from './textField.tmpl';

import css from './TextField.module.scss';

interface IProps {
  name: string;
  events: {
    change: () => void;
  }
}

export class TextField extends Block {
  constructor(props: IProps) {
    super('input', props);
  }

  init() {
    this.element!.className = css.textField;
    (this.element! as HTMLInputElement).name = this.props.name;
    (this.element! as HTMLInputElement).id = this.props.name;
    (this.element! as HTMLInputElement).placeholder = 'Сообщение';
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
