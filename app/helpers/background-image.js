import { helper } from 'ember-helper';
import { htmlSafe } from 'ember-string';

export function backgroundImage([url]) {
  if (!url) { return; }

  return htmlSafe(`background-image:url("${url}")`);
}

export default helper(backgroundImage);
