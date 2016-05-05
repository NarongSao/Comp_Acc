/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.CloseChartAccount = new Mongo.Collection("accCloseChartAccount");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.CloseChartAccount = new SimpleSchema({
    closeChartAccountId: {
      type: String
    },
    code: {
        type: String,
        label: "Code",
        max: 7
    },
    name: {
        type: String,
        label: "Name"
    },
    value:{
        type: Number,
        defaultValue: 0,
        decimal: true
    },
    closeDate: {
        type: String,
        label: "Date"
    },
    currencyId: {
        type: String,
        label: "Currency"
    },
    branchId: {
        type: String,
        label: "Branch"
    },
    accountTypeId: {
        type: String,
        label: "Account Type"
    },
    level: {
        type: Number,
        label: "Level"
    },
    parentId: {
        type : String,
        label: "Parent",
        optional: true
    }
});

/**
 * Attach schema
 */
Acc.Collection.CloseChartAccount.attachSchema(Acc.Schema.CloseChartAccount);
