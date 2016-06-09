/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.MapNBCBalanceKH = new Mongo.Collection("accMapNBCBalanceKH");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.MapNBCBalanceKH = new SimpleSchema({

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
                return Acc.List.chartAccountNBCKH({accountTypeNBC:"Balance"});
            }
        }
    }
});
/**
 * Attach schema
 */
Acc.Collection.MapNBCBalanceKH.attachSchema(Acc.Schema.MapNBCBalanceKH);
