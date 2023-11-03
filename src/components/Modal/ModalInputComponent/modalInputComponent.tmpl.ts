import css from './ModalInputComponent.module.scss';

export const tmpl = `
  <div class="${css.inputContainer} {{inputContainerClasses}}">
      <label class="${css.inputLabel}" for={{name}}>{{labelValue}}</label>
      <input {{#if isAutofocus }} autofocus {{/if}} type='{{type}}' 
        value='{{value}}' {{#if isDisabled }} disabled {{/if}} id={{name}} type="text" name={{name}} class="input {{inputClasses}}" />
      {{#if error}}
          <p class="input__error input__error--active">{{error}}</p>
      {{/if}}
  </div>
`;
