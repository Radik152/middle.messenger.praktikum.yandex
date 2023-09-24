import css from './FormItem.module.scss';

export const tmpl = `
    <div class="${css.formItem} {{classNameContainer}}">
        <input class="${css.input}" type="{{typeInput}}" id="{{keyInput}}" name="{{keyInput}}" required />
        <label class="${css.label}" for="{{keyInput}}">{{titleInput}}</label>
    </div>
`