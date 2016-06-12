/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.FixAssetExpense = new Mongo.Collection("accFixAssetExpense");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.FixAssetExpense = new SimpleSchema({

  date: {
    type: Date,
    label: "Date"
  },
  branchId: {
    type: String,
    label: "Branch",
    optional: true
  },transactionExpense: {
    type: [Object],
    minCount: 1,
    optional: true
  },
  'transactionExpense.$': {
    type: Object
  },
  'transactionExpense.$.depExpListId': {
    type: String,
    label: "DepExpListId"
  },
  'transactionExpense.$.account': {
    type: String,
    max: 200,
    label: "Account"
  },
  'transactionExpense.$.buyDate': {
    type: Date,
    label: "Buy Date"
  },
  'transactionExpense.$.value': {
    type: Number,
    decimal: true,
    blackbox: true
  },
  'transactionExpense.$.currencyId': {
    type: String,
    label: "Currency"
  },
  'transactionExpense.$.journalId':{
    type: String,
    optional: true
  }
});
/**
 * Attach schema
 */
Acc.Collection.FixAssetExpense.attachSchema(Acc.Schema.FixAssetExpense);
