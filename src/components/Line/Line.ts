import Block from '../../utils/Block';
import { tmpl } from './line.tmpl';

interface IProps {
    className?: string;
}

export class Line extends Block {
    constructor(props: IProps) {
        super('div', props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
