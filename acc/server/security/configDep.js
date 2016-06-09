/**
 * Journal
 */
Acc.Collection.ConfigDep.permit(['insert', 'update', 'remove'])
    .accIfGeneral()
    .apply();
