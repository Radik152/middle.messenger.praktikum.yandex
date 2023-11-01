/* eslint-disable import/extensions */
import { Block } from '../../utils/Block.ts';
import { tmpl } from './avatarComponent.tmpl.ts';

interface IProps {
    id: string;
    avatar: string | null;
    isActive: boolean;
    inputContainerClasses: string;
    events?: Record<string, (args: unknown) => void>;
}

export class AvatarComponent extends Block<IProps> {
    render(): DocumentFragment {
      return this.compile(tmpl, this.props);
    }
}
