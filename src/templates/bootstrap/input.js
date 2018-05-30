export default {
  form: `
{% if (component.prefix || component.suffix) { %}
<div class="input-group">
{% } %}
{% if (component.prefix) { %}
<div class="input-group-addon">{{component.prefix}}</div>
{% } %}
<{{input.type}} 
  ref="input" 
  name="{{input.attr.name}}" 
  type="{{input.attr.type}}" 
  class="{{input.attr.class}}" 
  lang="{{input.attr.lang}}" 
  value="{{value}}"
  {% if (input.attr.placeholder) { %}placeholder="{{input.attr.placeholder}}"{% } %}
  {% if (input.attr.tabindex) { %}tabindex="{{input.attr.tabindex}}"{% } %}
>{{input.content}}</{{input.type}}>
{% if (component.suffix) { %}
<div class="input-group-addon">{{component.suffix}}</div>
{% } %}
{% if (component.prefix || component.suffix) { %}
</div>
{% } %}
`,
};