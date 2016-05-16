/**
 * Collection
 */
Acc.Collection.ExchangeNBC = new Mongo.Collection("acc_exchangeNBC");

/**
 * Schema
 */
var Rates = new SimpleSchema({
    KHR: {
        type: String,
        decimal: true,
        label: "KHR"
    },
    USD: {
        type: String,
        decimal: true,
        label: "USD"
    },
    THB: {
        type: String,
        decimal: true,
        label: "THB"
    }
});

Acc.Schema.ExchangeNBC = new SimpleSchema({
    dateTime: {
        type: String,
        label: "Date",
        unique: true,
        defaultValue: function () {
            var currentDate = moment(ReactiveMethod.call("currentDate"), 'YYYY-MM-DD H:mm:ss').format('YYYY-MM-DD H:mm:ss');
            return currentDate;
        }
    },
    base: {
        type: String,
        label: "Base currency"
    },
    rates: {
        type: Rates
    }
});

/**
 * Attach schema
 */
Acc.Collection.ExchangeNBC.attachSchema(Acc.Schema.ExchangeNBC);
