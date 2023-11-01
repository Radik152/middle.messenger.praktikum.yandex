import { tmpl } from './Title.tmpl';
import { Block } from '../../utils/Block';

interface IProps {
    title: string;
    className?: string;
}

export class Title extends Block {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
