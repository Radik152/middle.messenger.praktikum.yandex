import Handlebars from "handlebars";
import { tmpl } from "./container.tmpl";

export const Container = () => {
    return Handlebars.compile(tmpl)({});
}
