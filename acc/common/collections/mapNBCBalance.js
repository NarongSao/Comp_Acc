/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.MapNBCBalance = new Mongo.Collection("accMapNBCBalance");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.MapNBCBalance = new SimpleSchema({

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
                return Acc.List.chartAccountNBC({accountTypeNBC:"Balance"});
            }
        }
    }
});
/**
 * Attach schema
 */
Acc.Collection.MapNBCBalance.attachSchema(Acc.Schema.MapNBCBalance);
