/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.MapNBCIncomeKH = new Mongo.Collection("accMapNBCIncomeKH");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.MapNBCIncomeKH = new SimpleSchema({

    transaction: {
        type: Array,
        optional: true
    },
    'transaction.$': {
        type: Object
    },
    'transaction.$.account': {
        type: String,
        max: 200,
        label: "Account"
    },
    chartAccountNBCId: {
        type: String,
        label: "NBC Account",
        autoform: {
            type: "select2",
            options: function () {
                var selector={};
                selector.accountTypeNBC="Balance";
                return Acc.List.chartAccountNBCKH({accountTypeNBC:"Income"});
            }
        }
    }
});
/**
 * Attach schema
 */
Acc.Collection.MapNBCIncomeKH.attachSchema(Acc.Schema.MapNBCIncomeKH);
