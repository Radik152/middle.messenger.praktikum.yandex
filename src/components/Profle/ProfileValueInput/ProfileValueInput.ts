import { tmpl } from './profileValueInput.tmpl';

import { Line } from '../../Line/Line';
import Block from '../../../utils/Block';

import css from './ProfileValueInput.module.scss';
import { Input } from '../../Input/Input';

interface IProps {
  title: string;
  value: string;
  typeInput: string;
  keyInput: string;
  hideLine?: boolean;
  events?: {
    focus?: () => void;
  };
}

export class ProfileValueInput extends Block {
  constructor(props: IProps) {
      super('div', props);
  }

  init() {
      if (!this.props.hideLine) {
        this.children.line = new Line({ className: css.lineClass });
      }
      this.children.input = new Input({
        className: css.inputChangeProfile,
        name: this.props.keyInput,
        type: this.props.typeInput,
        events: this.props.events,
        placeholder: this.props.value,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
