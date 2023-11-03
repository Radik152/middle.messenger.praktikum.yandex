import { tmpl } from './link.tmpl';
import { Block } from '../../utils/Block';

interface IProps {
    to: string;
    titleLink: string;
    className?: string;
}

export class Link extends Block {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
