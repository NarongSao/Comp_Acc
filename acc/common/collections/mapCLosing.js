/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.MapClosing = new Mongo.Collection("accMapClosing");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.MapClosing = new SimpleSchema({
  chartAccount: {
    type: String,
    optional: true,
    label: "Chart Account",
    autoform: {
      type: "select2",
      options: function() {
        return Acc.List.chartAccountId();
      }
    }
  },
  chartAccountCompare: {
    type: String,
    label: "Compare Account"
  }
});
/**
 * Attach schema
 */
Acc.Collection.MapClosing.attachSchema(Acc.Schema.MapClosing);
