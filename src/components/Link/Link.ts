import { tmpl } from './link.tmpl';
import Block from '../../utils/Block';

import css from './Link.module.scss';

interface IProps {
    to: string;
    titleLink: string;
    className?: string;
}

export class Link extends Block {
    constructor(props: IProps) {
        super('a', props);
    }

    init() {
        (this.element! as HTMLAnchorElement).href = this.props.to;
        this.element!.className = `${css.link} ${this.props.className}`;
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
