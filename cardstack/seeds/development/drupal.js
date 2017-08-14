/* eslint-env node */

const openAPIPatch = [
  // Workaround for https://www.drupal.org/node/2902117
  {
    op: "add",
    path: "/definitions/node:recipe/properties/attributes/properties/difficulty/enum",
    value: ["easy", "medium", "hard"]
  },

  // Workaround for https://www.drupal.org/node/2902127
  {
    op: "add",
    path: "/definitions/node:recipe/properties/type/enum",
    value: ["recipes"]
  },
  {
    op: "add",
    path: "/definitions/node:article/properties/type/enum",
    value: ["articles"]
  },
  {
    op: "add",
    path: "/definitions/node:page/properties/type/enum",
    value: ["pages"]
  },
  {
    op: "add",
    path: "/definitions/node:tutorial/properties/type/enum",
    value: ["node--tutorial"]
  },

  // Workaround for https://www.drupal.org/node/2902112
  {
    op: "replace",
    path: "/basePath",
    value: "/"
  }
];

module.exports = [
  {
    type: 'plugin-configs',
    id: '@cardstack/drupal',
    attributes: {
      module: '@cardstack/drupal'
    }
  },
  {
    type: 'data-sources',
    id: 'contenta',
    attributes: {
      'source-type': '@cardstack/drupal',
      params: {
        url: 'http://localhost',
        dataSourceId: 'contenta',
        authToken: process.env.DRUPAL_TOKEN,
        openAPIPatch
      }
    }
  }
];
