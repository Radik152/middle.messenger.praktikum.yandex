import css from './AvatarComponent.module.scss';

export const tmpl = `
  {{#if avatar}}
    <div class="${css.avatar} {{inputContainerClasses}} {{#if isActive }} ${css.avatarActive} {{/if}}">
      <img class="${css.avatarImage}" src='{{avatar}}' alt="Аватар">
      <input id="{{id}}" type='file' accept="image/png, image/jpeg" class="${css.avatarInput}" />
    </div>
  {{else}} 
    <div class="${css.avatar} {{inputContainerClasses}} {{#if isActive }} ${css.avatarActive} {{/if}}">
      <input id="{{id}}" type='file' accept="image/png, image/jpeg" class="${css.avatarInput}" />
    </div>
  {{/if}}
`;
