/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.Closing = new Mongo.Collection("accClosing");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.Closing = new SimpleSchema({

  dateFrom: {
    type: Date,
    label: "Close Date From"
  },dateTo: {
    type: Date,
    label: "Close Date To"
  }
});
/**
 * Attach schema
 */
Acc.Collection.Closing.attachSchema(Acc.Schema.Closing);
