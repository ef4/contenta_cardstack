import Adapter from "@cardstack/models/adapter";

let defaults = {
  recipe: 'image.image-file'
};

export default Adapter.extend({
  query(store, type, query) {
    let defaultInclude = defaults[type.modelName];
    if (!query.include && defaultInclude) {
      query = Object.assign({}, query, { include: defaultInclude });
    }
    return this._super(store, type, query);
  },
  findRecord(store, type, id, snapshot) {
    let defaultInclude = defaults[type.modelName];
    if (!snapshot.include && defaultInclude) {
      snapshot.include = defaultInclude;
    }
    return this._super(store, type, id, snapshot);
  }
});
