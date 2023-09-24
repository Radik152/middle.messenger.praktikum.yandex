import Handlebars from "handlebars";
import { tmpl } from "./FormItem.tmpl";

interface IProps {
    titleInput: string;
    keyInput: string;
    typeInput: string;
    classNameContainer?: string;
}

export const FormItem = (props: IProps) => {
    return Handlebars.compile(tmpl)(props);
}