import { Block } from '../../../utils/Block';
import { Button } from '../../Button/Button';
import { Link } from '../../Link/Link';
import { ModalInputComponent } from '../ModalInputComponent/ModalInputComponent';
import { tmpl } from './modalFormComponent.tmpl';


interface IProps {
    button: Button;
    link?: typeof Link;
    events?: Record<string, (args: any) => void>;
    inputs?: ModalInputComponent[];
    classNames?: string;
    title?: string;
    error?: string;
}

export class ModalFormComponent extends Block<IProps> {
    constructor({
      button, link, events = {}, inputs = [], classNames = '', title = '', error = '',
      }: IProps) {
        const props = {
            button,
            link,
            inputs,
            classNames,
            title,
            events,
            error,
        };
        super(props);
    }

    public validateInputs(): void {
        if (this.children.inputs && Array.isArray(this.children.inputs)) {
            (this.children.inputs as ModalInputComponent[]).forEach((input) => {
                input.validate();
            });
        }
    }

    public isFormValid(): boolean {
        if (this.children.inputs && Array.isArray(this.children.inputs)) {
            return (this.children.inputs as ModalInputComponent[]).every((input) => {
                return input.isInputValid();
            });
        }

        return false;
    }

    public getValues<T>(): T | null {
        if (this.children.inputs && Array.isArray(this.children.inputs)) {
            const object: T = {} as T;
            (this.children.inputs as ModalInputComponent[]).forEach((input) => {
                object[input.name as keyof T] = input.value as T[keyof T];
            });

            return object;
        }

        return null;
    }

    public clearForm(): void {
        this.props.error = '';
        if (this.children.inputs && Array.isArray(this.children.inputs)) {
            this.children.inputs.forEach((input) => {
                if (input instanceof ModalInputComponent) {
                    input.setProps({ ...input.props, value: '' });
                }
            });
        }
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
