import Handlebars from "handlebars";
import { tmpl } from "./chatsPage.tmpl";
import { Link } from "../../components/Link/Link";

import css from './ChatsPage.module.scss'
import { Line } from "../../components/Line/Line";

export const ChatsPage = () => {
    return Handlebars.compile(tmpl)({
        LinkProfile: Link({titleLink: 'Профиль >', to: '/profile', className: css.linkProfile}),
        Line: Line({})
    });
};
