/* eslint-env node */

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
        initialModels: []
      }
    }
  }
];
