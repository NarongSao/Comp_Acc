/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.ConfigDep = new Mongo.Collection("accConfigDep");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.ConfigDep = new SimpleSchema({


  depPerTime: {
    type: Number,
    label: "Dep PerTime"
  },
  depType: {
    type: String,
    label: "Depreciation Type",
    autoform: {
      type: "select2",
      options: function () {
        return Acc.List.depType();
      }
    }

  }
});
/**
 * Attach schema
 */
Acc.Collection.ConfigDep.attachSchema(Acc.Schema.ConfigDep);
