import Handlebars from "handlebars";
import { tmpl } from "./avatar.tmpl";

export const Avatar = () => {
    return Handlebars.compile(tmpl)({});
}