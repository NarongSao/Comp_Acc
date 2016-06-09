/**
 * chart of Account
 */
Acc.Collection.MapNBCIncomeKH.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
