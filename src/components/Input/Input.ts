import Block from '../../utils/Block';

import { tmpl } from './input.tmpl';

interface IProps {
  className: string;
  type: string;
  name: string;
  placeholder?: string;
  events?: {
    focus?: () => void;
    change?: () => void;
  }
}


export class Input extends Block {
  constructor(props: IProps) {
    super('input', props);
  }

  init() {
    this.element!.className = this.props.className;
    (this.element! as HTMLInputElement).name = this.props.name;
    (this.element! as HTMLInputElement).id = this.props.name;
    (this.element! as HTMLInputElement).type = this.props.type;
    (this.element! as HTMLInputElement).placeholder = this.props.placeholder ? this.props.placeholder : '';
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
