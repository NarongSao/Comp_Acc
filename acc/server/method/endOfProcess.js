Meteor.methods({
    getEndOfProcess: function (selector,branchId,selectorGetLastBalance,lastDate,dateSelect) {
        var data=[];
        var dataUse=[];
        var result = Acc.Collection.Journal.aggregate([
            {$unwind: "$transaction"},
            {$match: selector},
            {
                $group: {
                    _id: {
                        account: "$transaction.accountDoc._id",
                        code: "$transaction.accountDoc.code",
                        name: "$transaction.accountDoc.name",
                        accountTypeId: "$transaction.accountDoc.accountTypeId",
                        currency: "$currencyId",
                        level: "$transaction.accountDoc.level",
                        parent: "$transaction.accountDoc.parentId",
                    },
                    result: {$sum: "$transaction.drcr"}
                }
            },

            {$sort: {"_id.code": 1}}
        ]);
        var curMonth=moment(dateSelect).format("MM");

        result.forEach(function (obj) {
            data.push({
                closeChartAccountId: obj._id.account,
                code: obj._id.code,
                name: obj._id.name,
                value: obj.result,
                closeDate: dateSelect,
                currencyId: obj._id.currency,
                branchId: branchId,
                accountTypeId: obj._id.accountTypeId,
                level: obj._id.level,
                parentId: obj._id.parent
            })
        });
        if (lastDate !== null) {
            if(curMonth=="12"){
                selectorGetLastBalance.accountTypeId = {
                    $gte: "01",
                    $lte: "39"
                };
                var resultLast = Acc.Collection.CloseChartAccount.find(selectorGetLastBalance);
            }else{
                var resultLast = Acc.Collection.CloseChartAccount.find(selectorGetLastBalance);
            }

            if (resultLast != null) {
                resultLast.forEach(function (lastBal) {
                    data.push({
                        closeChartAccountId: lastBal.closeChartAccountId,
                        code: lastBal.code,
                        name: lastBal.name,
                        value: lastBal.value,
                        closeDate: dateSelect,
                        currencyId: lastBal.currencyId,
                        branchId: lastBal.branchId,
                        accountTypeId: lastBal.accountTypeId,
                        level: lastBal.level,
                        parentId: lastBal.parentId
                    })
                })
            }
        }


        data.reduce(function (key, val) {
            if (!key[val.closeChartAccountId+val.currencyId]) {
                key[val.closeChartAccountId+val.currencyId] = {
                    closeChartAccountId: val.closeChartAccountId,
                    code: val.code,
                    name: val.name,
                    value: val.value,
                    closeDate: val.closeDate,
                    currencyId: val.currencyId,
                    branchId: val.branchId,
                    accountTypeId: val.accountTypeId,
                    level: val.level,
                    parentId: val.parentId
                };
                dataUse.push(key[val.closeChartAccountId+val.currencyId]);
            } else {
                key[val.closeChartAccountId+val.currencyId].value += val.value;
            }
            return key;
        }, {});

        dataUse.forEach(function (ob) {
            Acc.Collection.CloseChartAccount.insert({
                closeChartAccountId: ob.closeChartAccountId,
                code: ob.code,
                name: ob.name,
                value: ob.value,
                closeDate: ob.closeDate,
                currencyId: ob.currencyId,
                branchId: ob.branchId,
                accountTypeId: ob.accountTypeId,
                level: ob.level,
                parentId: ob.parentId
            })
        });

        Acc.Collection.DateEndOfProcess.insert({
            closeDate: dateSelect,
            branchId: branchId
        })

       return "Success";
    },
    removeEndOfProcess: function(id){
        var data= Acc.Collection.DateEndOfProcess.findOne({_id: id});
                    Acc.Collection.CloseChartAccount.remove({closeDate: data.closeDate}, function (error) {
                        if (!error) {
                            Acc.Collection.NetInCome.remove({endId: id});
                            if(moment(data.closeDate).format("MM")==12){
                                Acc.Collection.Journal.remove({endId: id});
                            }
                            Acc.Collection.DateEndOfProcess.remove(id);
                        }
                    });

    }
})
