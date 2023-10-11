import { tmpl } from './Title.tmpl';
import Block from '../../utils/Block';

import css from './Title.module.scss';

interface IProps {
    title: string;
    className?: string;
}

export class Title extends Block {
    constructor(props: IProps) {
        super('h1', props);
    }

    init() {
        this.element!.className = `${css.title} ${this.props.className}`;
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
