import Handlebars from 'handlebars';
import { tmpl } from './profileValueInput.tmpl';

import { Line } from '../../Line/Line';

import css from './ProfileValueInput.module.scss';

interface IProps {
  title: string;
  value: string;
  typeInput: string;
  keyInput: string;
  hideLine?: boolean;
}

export const ProfileValueInput = (props: IProps) => {
  return Handlebars.compile(tmpl)({
    ...props,
    Line: !props.hideLine ? Line({ className: css.lineClass }) : null,
  });
};
