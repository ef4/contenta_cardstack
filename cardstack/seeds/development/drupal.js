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
  {
    op: "add",
    path: "/definitions/media:image/properties/type/enum",
    value: ["images"]
  },
  {
    op: "add",
    path: "/definitions/file:file/properties/type/enum",
    value: ["files"]
  },
  {
    op: "add",
    path: "/definitions/user:user/properties/type/enum",
    value: ["users"]
  },
  {
    op: "add",
    path: "/definitions/taxonomy_term:category/properties/type/enum",
    value: ["categories"]
  },
  {
    op: "add",
    path: "/definitions/taxonomy_term:tags/properties/type/enum",
    value: ["tags"]
  },

  // Workaround for https://www.drupal.org/node/2902112
  {
    op: "replace",
    path: "/basePath",
    value: "/"
  },

  // Workaround for https://www.drupal.org/node/2902710
  {
    op: "replace",
    path: "/definitions/node:recipe/properties/relationships/properties/image/properties/data/properties/type/enum",
    value: ["images"]
  },
  {
    op: "replace",
    path: "/definitions/node:article/properties/relationships/properties/image/properties/data/properties/type/enum",
    value: ["images"]
  },
  {
    op: "replace",
    path: "/definitions/media:image/properties/relationships/properties/imageFile/properties/data/properties/type/enum",
    value: ["files"]
  },
  {
    op: "replace",
    path: "/definitions/media:image/properties/relationships/properties/thumbnail/properties/data/properties/type/enum",
    value: ["files"]
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
    id: 'drupal',
    attributes: {
      'source-type': '@cardstack/drupal',
      params: {
        url: 'http://localhost',
        authToken: process.env.DRUPAL_TOKEN,
        openAPIPatch
      }
    }
  }
];
