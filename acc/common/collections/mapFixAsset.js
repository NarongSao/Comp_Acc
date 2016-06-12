/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.MapFixAsset = new Mongo.Collection("accMapFixAsset");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.MapFixAsset = new SimpleSchema({
    fixAsset: {
        type: String,
        optional: true,
        label: "Chart Account Asset",
        autoform: {
            type: "select2",
            options: function () {
                return Acc.List.fixAssetList();
            }
        }
    },
    fixAssetCon: {
        type: String,
        optional: true
    },
    accuFixAsset: {
        type: String,
        label: "Accumulated",
        autoform: {
            type: "select2",
            options: function () {
                return Acc.List.fixAssetList();
            }
        }
    },
    fixAssetExpense: {
        type: String,
        optional: true,
        label: "Asset Expense",
        autoform: {
            type: "select2",
            options: function () {
                return Acc.List.fixAssetExpenseList();
            }
        }
    },
});
/**
 * Attach schema
 */
Acc.Collection.MapFixAsset.attachSchema(Acc.Schema.MapFixAsset);
