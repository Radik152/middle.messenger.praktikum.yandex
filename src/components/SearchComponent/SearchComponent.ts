
import { Block } from '../../utils/Block';
import { tmpl } from './searchComponent.tmpl';

interface IProps {
    events: Record<string, (event: Event) => void>;
}

export class SearchComponent extends Block<IProps> {
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
