import Handlebars from 'handlebars';
import { tmpl } from './line.tmpl';

interface IProps {
    className?: string;
}

export const Line = (props: IProps) => {
    return Handlebars.compile(tmpl)(props);
};
