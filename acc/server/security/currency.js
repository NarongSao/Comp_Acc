/**
 * Currency
 */
Acc.Collection.Currency.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
