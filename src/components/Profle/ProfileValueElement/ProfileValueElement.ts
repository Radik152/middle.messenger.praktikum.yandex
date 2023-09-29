import Handlebars from "handlebars";
import { Line } from "../../Line/Line";

import { tmpl } from "./profileValueElement.tmpl";

import css from './ProfileValueElement.module.scss'

interface IProps {
    title: string;
    value: string;
    hideLine?: boolean;
}


export const ProfileValueElement = (props: IProps) => {
    return Handlebars.compile(tmpl)({
        ...props,
        Line: !props.hideLine ? Line({className: css.lineClass}) : null
    })
};
