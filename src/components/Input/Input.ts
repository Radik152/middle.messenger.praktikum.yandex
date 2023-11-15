import { Block } from '../../utils/Block';

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
    super(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
