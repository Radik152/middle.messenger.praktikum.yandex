import Handlebars from "handlebars";
import { tmpl } from "./link.tmpl";

interface IProps {
    to: string;
    titleLink: string;
    className?: string;
}

export const Link = (props: IProps) => {
    return Handlebars.compile(tmpl)(props);
};
