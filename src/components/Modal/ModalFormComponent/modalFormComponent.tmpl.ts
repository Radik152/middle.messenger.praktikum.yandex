import css from './ModalFormComponent.module.scss';

export const tmpl = `
  <form class="${css.form} {{classNames}}">
    {{#if title}} <h2 class="${css.formTitle}">{{title}}</h2> {{/if}}
    <p class="${css.formError}">{{error}}</p>
    {{#each inputs}}
        {{{this}}}
    {{/each}}
    {{{button}}}
    {{{link}}}
  </form>
`;
