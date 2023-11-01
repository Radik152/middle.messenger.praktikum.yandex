import { Block } from '../../../utils/Block';
import { tmpl } from './modalInputComponent.tmpl';


interface IProps {
    name: string;
    labelValue: string;
    inputErrorClasses?: string;
    isAutofocus?: boolean;
    events?: Record<string, (args: unknown) => void>;
    error?: string;
    inputClasses?: string;
    inputContainerClasses?: string;
    isDisabled?: boolean;
    value?: string;
    type?: string;
    validate?: (args: string) => string | null;
}

export class ModalInputComponent extends Block<IProps> {
    public constructor({
        name,
        labelValue,
        inputErrorClasses = '',
        error = '',
        isAutofocus = false,
        events = {},
        inputClasses = '',
        inputContainerClasses = '',
        isDisabled = false,
        value = '',
        type = 'text',
        validate,
    }: IProps) {
        const props = {
            name,
            error,
            inputContainerClasses,
            inputErrorClasses,
            isAutofocus,
            labelValue,
            events,
            inputClasses,
            isDisabled,
            value,
            type,
            validate,
        };
        super(props);
    }

    public isInputValid(): boolean {
        if (this.props.validate != null) {
            return Boolean(!this.props.validate(this.value));
        }

        return true;
    }

    public validate(): void {
        if (this.props.validate != null) {
            const error = this.props.validate(this.value);
            if (error != null) {
                this.setProps({
                    ...this.props,
                    value: this.value,
                    error,
                    inputClasses: `${this.props.inputClasses} input--error`,
                });
            }
            if (error == null && this.props.error != null) {
                this.setProps({
                    ...this.props,
                    value: this.value,
                    error: undefined,
                    inputClasses: this.props.inputClasses?.replaceAll('input--error', '').trim(),
                });
            }
        }
    }

    public get value(): string {
        return this.element?.querySelector('input')?.value ?? '';
    }

    public get name(): string {
        return this.props.name;
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
