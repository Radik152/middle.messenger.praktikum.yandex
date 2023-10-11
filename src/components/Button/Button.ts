import { tmpl } from './button.tmpl';
import Block from '../../utils/Block';

interface IProps {
    titleButton: string;
    className: string;
    events?: {
        click: () => void;
    };
}

export class Button extends Block {
    constructor(props: IProps) {
        super('button', props);
    }

    init() {
        this.element!.className = `${this.props.className}`;
        // (this.element! as HTMLButtonElement).type = 'submit';
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
