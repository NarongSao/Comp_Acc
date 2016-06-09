/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.FixAssetDep = new Mongo.Collection("accFixAssetDep");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.FixAssetDep = new SimpleSchema({

  date: {
    type: Date,
    label: "Date",
    defaultValue: function () {
      var currentDate = moment(new Date()).format('YYYY-MM-DD');
      return currentDate;
    }
  },
  branchId: {
    type: String,
    label: "Branch"
  },
  currencyId: {
    type: String,
    label: "Currency"
  },transactionAsset: {
    type: [Object]
  },
  'transactionAsset.$': {
    type: Object
  },
  'transactionAsset.$.account': {
    type: String,
    label: "Account"
  },
  'transactionAsset.$.value': {
    type: Number,
    decimal: true,
    blackbox: true
  },'transactionAsset.$.life': {
    type: Number
  },
  'transactionAsset.$.estSalvage': {
    type: Number,
    optional: true,
    blackbox: true
  },
  'transactionAsset.$.percent': {
    type: Number,
    decimal: true,
    optional: true
  },
  'transactionAsset.$.qty': {
    type: Number,
    optional: true,
    blackbox: true
  },

  'transactionAsset.$.description': {
    type: String,
    optional: true
  },
  journalId:{
    type: String
  }
});
/**
 * Attach schema
 */
Acc.Collection.FixAssetDep.attachSchema(Acc.Schema.FixAssetDep);
