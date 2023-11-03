import { Link } from '../../components/Link/Link';
import { Block } from '../../utils/Block';

import { tmpl } from './errorPage.tmpl';

import css from './ErrorPage.module.scss';
import { Routes } from '../../utils/routes/routes';

export class ErrorPage extends Block {
    init() {
        this.children.linkBack = new Link({ titleLink: 'Назад к чатам', to: Routes.Main, className: css.linkDecoration });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
