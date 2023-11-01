import css from './ChatsList.module.scss';

export const tmpl = `
<div>
  <ul class="${css.container}">
    {{#each chatItems}}
        {{{this}}}
    {{/each}}
  </ul>
</div>
`;
