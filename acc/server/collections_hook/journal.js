// Customer
var module = 'Acc';

Acc.Collection.Journal.before.insert(function (userId, doc) {
    var depType=Acc.Collection.ConfigDep.findOne();
        var transaction = [];
        _.each(doc.transaction, function (obj) {
            if (!_.isNull(obj)) {
                var accountId= obj.account.split('|');
                var account= Acc.Collection.ChartAccount.findOne({code: accountId[0].replace(/\s+/g, '')},{fields:{name: 1,accountTypeId:1,code:1,level:1,parentId: 1}});
                obj.accountDoc = account;
                transaction.push(obj);
            }
        });
        doc.transaction = transaction;
    var lenArray=doc.transaction.length;
    var date = moment(doc.journalDate).format("YYMM");
    var prefix = doc.branchId + "-" + date;
    doc._id = idGenerator.genWithPrefix(Acc.Collection.Journal, prefix, 6);
    doc.splitAccount =lenArray > 2 ? doc._id : 0;

    if(doc.transactionAsset!= undefined){
        doc.transactionAsset.forEach(function (obj) {
            if(depType.depType=="01: Straight Line")
            {
                var selectorFixAssetExpList={};
                selectorFixAssetExpList.date=doc.journalDate;
                selectorFixAssetExpList.branchId=doc.branchId;
                selectorFixAssetExpList.currencyId=doc.currencyId;
                selectorFixAssetExpList.journalId=doc._id;

                selectorFixAssetExpList.account=obj.account;
                selectorFixAssetExpList.amount=obj.value;
                selectorFixAssetExpList.life=obj.life;


                var transactionList=[];
                let depPerYear= numeral(((obj.value -obj.estSalvage)/obj.life )).format('0,0.00');
                for(var i=1;i<=obj.life;i++){
                    transactionList.push({
                        year: i,
                        perMonth: numeral((depPerYear/12)).format('0,0.00'),
                        perYear: depPerYear,
                        month: 0,
                        status: false
                    })
                }

                selectorFixAssetExpList.transactionAsset=transactionList;

                Acc.Collection.DepExpList.insert(selectorFixAssetExpList);
            }
        })


        var selectorFixAssetDep={};
        selectorFixAssetDep.date=doc.journalDate;
        selectorFixAssetDep.branchId=doc.branchId;
        selectorFixAssetDep.currencyId=doc.currencyId;
        selectorFixAssetDep.journalId=doc._id;
        selectorFixAssetDep.isDep=false;
        selectorFixAssetDep.transactionAsset=doc.transactionAsset;

        Acc.Collection.FixAssetDep.insert(selectorFixAssetDep);
    }


});
Acc.Collection.Journal.before.update(function (userId, doc, fieldNames, modifier, options) {
    var depType=Acc.Collection.ConfigDep.findOne();
        modifier.$set = modifier.$set || {};
        var transaction = [];
        _.each(modifier.$set.transaction, function (obj) {
            if (!_.isNull(obj)) {
                var accountId= obj.account.split('|');

                var account= Acc.Collection.ChartAccount.findOne({code: accountId[0].replace(/\s+/g, '')},{fields:{name: 1,accountTypeId:1,code:1,level:1,parentId: 1}});
                obj.accountDoc = account;
                transaction.push(obj);
            }
        });
        modifier.$set.transaction = transaction;


    if(modifier.$set.transactionAsset!= undefined){
        
        Acc.Collection.FixAssetDep.remove({journalId:doc._id });
        Acc.Collection.DepExpList.remove({journalId:doc._id });


        modifier.$set.transactionAsset.forEach(function (obj) {
            if(depType.depType=="01: Straight Line")
            {
                var selectorFixAssetExpList={};
                selectorFixAssetExpList.date=modifier.$set.journalDate;
                selectorFixAssetExpList.branchId=modifier.$set.branchId;
                selectorFixAssetExpList.currencyId=modifier.$set.currencyId;
                selectorFixAssetExpList.journalId=doc._id;
                selectorFixAssetExpList.life=obj.life;

                selectorFixAssetExpList.amount=obj.value;


                selectorFixAssetExpList.account=obj.account;

                var transactionList=[];
                let depPerYear= numeral(((obj.value -obj.estSalvage)/obj.life )).format('0,0.00');
                for(var i=1;i<=obj.life;i++){
                    transactionList.push({
                        year: i,
                        perMonth: numeral((depPerYear/12)).format('0,0.00'),
                        perYear: depPerYear,
                        month: 0,
                        status: false
                    })
                }

                selectorFixAssetExpList.transactionAsset=transactionList;

                Acc.Collection.DepExpList.insert(selectorFixAssetExpList);
            }
        })

        var selectorFixAssetDep={};
        selectorFixAssetDep.date=moment(modifier.$set.journalDate,"YYYY-MM-DD").toDate();
        selectorFixAssetDep.branchId=modifier.$set.branchId;
        selectorFixAssetDep.currencyId=modifier.$set.currencyId;
        selectorFixAssetDep.journalId=doc._id;
        selectorFixAssetDep.transactionAsset=modifier.$set.transactionAsset;
        selectorFixAssetDep.isDep=false;


        Acc.Collection.FixAssetDep.insert(selectorFixAssetDep);
    }


});
