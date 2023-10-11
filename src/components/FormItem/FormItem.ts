import { tmpl } from './FormItem.tmpl';
import Block from '../../utils/Block';

import css from './FormItem.module.scss';
import { Input } from '../Input/Input';

interface IProps {
    titleInput: string;
    keyInput: string;
    typeInput: string;
    classNameContainer?: string;
    regExp?: RegExp;
    events?: {
        focus?: () => void;
    }
}

export class FormItem extends Block {
    constructor(props: IProps) {
        super('div', props);
    }

    init() {
        this.element!.className = `${css.formItem} ${this.props.classNameContainer}`;
        this.children.input = new Input({
            className: css.input,
            name: this.props.keyInput,
            type: this.props.typeInput,
            events: this.props.events,
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
