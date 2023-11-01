import { Block } from '../../../utils/Block';
import { render } from '../../../utils/routes/Route';
import { Button } from '../../Button/Button';
import { ModalFormComponent } from '../ModalFormComponent/ModalFormComponent';
import { tmpl } from './modalComponent.tmpl';
import './ModalComponents.scss';

interface IProps {
    container: string;
    form: ModalFormComponent;
}

export class ModalComponent extends Block<IProps> {
    protected init(): void {
        this.children.CancelButton = new Button({
            titleButton: 'Закрыть',
            className: 'cancel-button',
            events: {
                click: this.closeModal.bind(this),
            },
        });
    }

    public createPortal(): void {
        document.body.classList.add('modal__portal');
        render(this.props.container, this);
    }

    public closeModal(): void {
        if (this.children.form instanceof ModalFormComponent) {
            this.children.form.clearForm();
        }
        const modal = document.getElementById('modal');
        const container = document.querySelector(this.props.container);
        if (modal != null && container != null) {
            document.body.classList.remove('modal__portal');
            container.removeChild(modal);
        }
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props);
    }
}
