import Block from '../../../utils/Block';
import { tmpl } from './photoInput.tmpl';

export class PhotoInput extends Block {
    constructor() {
        super('div', {});
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
