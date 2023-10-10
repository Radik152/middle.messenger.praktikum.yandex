import Block from '../../utils/Block';
import { tmpl } from './textField.tmpl';

import css from './TextField.module.scss';

export class TextField extends Block {
  constructor() {
    super('input', {});
  }

  init() {
    this.element!.className = css.textField;
    (this.element! as HTMLInputElement).placeholder = 'Сообщение';
  }

  render() {
    return this.compile(tmpl, {});
  }
}
