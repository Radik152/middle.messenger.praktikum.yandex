import { tmpl } from './button.tmpl';
import { Block } from '../../utils/Block';

interface IProps {
    titleButton: string;
    className?: string;
    events?: {
        click: () => void;
    };
}

export class Button extends Block {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
