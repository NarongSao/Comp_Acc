/**
 * chart of Account
 */
Acc.Collection.MapNBCBalanceKH.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
