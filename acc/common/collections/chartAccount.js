/**
 * Collection
 *
 * @type {Mongo.Collection}
 */
Acc.Collection.ChartAccount = new Mongo.Collection("accChartAccount");
/**
 * Schema
 *
 * @type {AccSchema}
 */
Acc.Schema.ChartAccount = new SimpleSchema({
    code: {
        type: String,
        label: "Code",
        unique: true,
        max: 7
    },
    name: {
        type: String,
        label: "Name"
    },
    parentId: {
        type: String,
        label: "Parent",
        optional: true,
        autoform: {
            type: "select2",
            options: function () {
                return Acc.List.parent();
            }
        }
    },
    accountTypeId: {
        type: String,
        label: "Account Type",
        autoform: {
            type: "select2"
        }
    },
    level:{
        type: Number,
        defaultValue: 0
    }
});

/**
 * Attach schema
 */
Acc.Collection.ChartAccount.attachSchema(Acc.Schema.ChartAccount);
