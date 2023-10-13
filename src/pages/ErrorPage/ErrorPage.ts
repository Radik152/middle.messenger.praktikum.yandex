import { Link } from '../../components/Link/Link';
import Block from '../../utils/Block';

import { tmpl } from './errorPage.tmpl';

import css from './ErrorPage.module.scss';

interface IProps {
    codeError: number;
    titleError: string;
}

export class ErrorPage extends Block {
    constructor(props: IProps) {
        super('div', props);
    }

    init() {
        this.children.linkBack = new Link({ titleLink: 'Назад к чатам', to: '/chats', className: css.linkDecoration });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
