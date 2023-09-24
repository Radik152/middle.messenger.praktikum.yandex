import Handlebars from "handlebars";
import { tmpl } from "./Container.tmpl";

interface IProps {
    children: any;
}

export const Container = () => {
    return Handlebars.compile(tmpl)({});
}
