/**
 * chart of Account
 */
Acc.Collection.MapNBCBalance.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
