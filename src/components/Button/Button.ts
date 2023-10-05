import Handlebars from 'handlebars';
import { tmpl } from './button.tmpl';

interface IProps {
    titleButton: string;
    className: string;
}

export const Button = (props: IProps) => {
    return Handlebars.compile(tmpl)(props);
};
