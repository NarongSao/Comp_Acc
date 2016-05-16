/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.ChartAccountNBC = new Mongo.Collection("accChartAccountNBC");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.ChartAccountNBC = new SimpleSchema({
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
Acc.Collection.ChartAccountNBC.attachSchema(Acc.Schema.ChartAccountNBC);
