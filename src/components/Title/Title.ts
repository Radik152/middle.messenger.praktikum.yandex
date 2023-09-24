import Handlebars from "handlebars";
import { tmpl } from "./Title.tmpl";

interface IProps {
    title: string;
    className?: string;
}

export const Title = (props: IProps ) => {
    return Handlebars.compile(tmpl)(props)
} 