/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.ChartAccountNBCKH = new Mongo.Collection("accChartAccountNBCKH");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.ChartAccountNBCKH = new SimpleSchema({
    code: {
        type: String,
        label: "Code",
        max: 7
    },
    name: {
        type: String,
        label: "Name"
    },
    accountTypeNBC: {
        type: String,
        label: "Account Type"
    }
});

/**
 * Attach schema
 */
Acc.Collection.ChartAccountNBCKH.attachSchema(Acc.Schema.ChartAccountNBCKH);
