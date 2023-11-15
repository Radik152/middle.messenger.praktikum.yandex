/* eslint-disable import/extensions */
import { tmpl } from './button.tmpl.ts';
import { Block } from '../../utils/Block.ts';

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
