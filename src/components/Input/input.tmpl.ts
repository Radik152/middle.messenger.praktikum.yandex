
export const tmpl = `
  {{#if placeholder}}
    <input name="{{name}}" id="{{name}}" type="{{type}}" class="{{className}}" placeholder="{{placeholder}}" /> 
  {{else}}
    <input name="{{name}}" id="{{name}}" type="{{type}}" class="{{className}}" /> 
  {{/if}}
  
`;
