import { Line } from '../../Line/Line';

import { tmpl } from './profileValueElement.tmpl';

import css from './ProfileValueElement.module.scss';
import Block from '../../../utils/Block';

interface IProps {
    title: string;
    value: string;
    hideLine?: boolean;
}

export class ProfileValueElement extends Block {
    constructor(props: IProps) {
        super('div', props);
    }

    init() {
        if (!this.props.hideLine) {
            this.children.line = new Line({ className: css.lineClass });
        }
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
