import { tmpl } from './FormItem.tmpl';
import { Block } from '../../utils/Block';

import css from './FormItem.module.scss';
import { Input } from '../Input/Input';

interface IProps {
    titleInput: string;
    keyInput: string;
    typeInput: string;
    classNameContainer?: string;
    errorMessage?: string
    events?: {
        focus?: () => void;
    }
}

export class FormItem extends Block {
    constructor(props: IProps) {
        super(props);
    }

    init() {
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
