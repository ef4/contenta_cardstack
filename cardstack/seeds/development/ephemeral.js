/* eslint-env node */

const JSONAPIFactory = require('@cardstack/test-support/jsonapi-factory');

function initialModels() {
  let factory = new JSONAPIFactory();
  factory.addResource("content-types", "pages").withRelated('fields', [
    factory.addResource('fields', 'title').withAttributes({
      'field-type': '@cardstack/core-types::string'
    })
  ]);
  factory.addResource('pages', ' ').withAttributes({
    title: 'Umami'
  });
  return factory.getModels();
}

module.exports = [
  {
    type: 'plugin-configs',
    id: '@cardstack/ephemeral',
    attributes: {
      module: '@cardstack/ephemeral'
    }
  },
  {
    type: 'data-sources',
    id: 'cardstack-ephemeral-default',
    attributes: {
      'source-type': '@cardstack/ephemeral',
      params: {
        initialModels: initialModels()
      }
    }
  }
];
