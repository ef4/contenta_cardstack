import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cardstack/recipe-page', 'Integration | Component | cardstack/recipe page', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cardstack/recipe-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cardstack/recipe-page}}
      template block text
    {{/cardstack/recipe-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
