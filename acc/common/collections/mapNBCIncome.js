/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.MapNBCIncome = new Mongo.Collection("accMapNBCIncome");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.MapNBCIncome = new SimpleSchema({

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
                return Acc.List.chartAccountNBC({accountTypeNBC:"Income"});
            }
        }
    }
});
/**
 * Attach schema
 */
Acc.Collection.MapNBCIncome.attachSchema(Acc.Schema.MapNBCIncome);
