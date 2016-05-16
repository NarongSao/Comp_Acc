/**
 * chart of Account
 */
Acc.Collection.MapNBCIncome.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
