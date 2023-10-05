import Handlebars from 'handlebars';
import { Link } from '../../components/Link/Link';
import { tmpl } from './errorPage.tmpl';

import css from './ErrorPage.module.scss';

interface IProps {
    codeError: number;
    titleError: string;
}

export const ErrorPage = (props: IProps) => {
    return Handlebars.compile(tmpl)({
        ...props,
        LinkBack: Link({ titleLink: 'Назад к чатам', to: '/chats', className: css.linkDecoration }),
    });
};
