Template.registerHelper('formatMoney',function(val){
    if(val!="title"){
        val = Math.abs(val);
        return numeral(val).format('0,0.00');
    }else{
        return "";
    }

});
Template.registerHelper('formatMoneyNormal',function(val){
    if(val!="title"){
        return numeral(val).format('0,0.00');
    }else{
        return "";
    }
});
Template.registerHelper('formatDate',function(val){
    return moment(val).format("DD/MM/YYYY");
});

Template.registerHelper('getChartAccount',function(id){
    return Acc.Collection.ChartAccount.findOne({_id: id}).name;
});
Template.registerHelper('getCurrency',function(id){
    return Cpanel.Collection.Currency.findOne({_id: id}).symbol;
});
Template.registerHelper('isNegative',function(val){
    return val < 0;
});
Template.registerHelper('substrVoucher',function(val){
    return val.substr(8, val.length);
});