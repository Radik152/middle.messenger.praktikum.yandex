import { tmpl } from './avatar.tmpl';
import Block from '../../../utils/Block';

import css from './Avatar.module.scss';

export class Avatar extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.element!.className = `${css.inputBlock}`;
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
