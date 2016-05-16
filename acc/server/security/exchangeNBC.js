/**
 * Currency
 */
Acc.Collection.ExchangeNBC.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
