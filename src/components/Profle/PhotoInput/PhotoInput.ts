import Handlebars from "handlebars";
import { tmpl } from "./photoInput.tmpl";

export const PhotoInput = () => {
    return Handlebars.compile(tmpl)({});
};
