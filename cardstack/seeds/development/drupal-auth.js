/* eslint-env node */

module.exports = [
  {
    type: 'plugin-configs',
    id: '@cardstack/drupal-auth',
    attributes: {
      module: '@cardstack/drupal-auth'
    }
  },
  {
    type: 'authentication-sources',
    id: 'drupal',
    attributes: {
      'authenticator-type': '@cardstack/drupal-auth',
      params: {
        url: 'http://localhost',
        'client-id': '3e1a2872-e329-47f4-8447-3b4589744de6',
        'client-secret': 'contenta',
        userType: 'users',
        userIdField: 'internal-id'
      }
    }
  }
];
