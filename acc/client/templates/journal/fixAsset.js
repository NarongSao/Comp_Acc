var fixAssetTpl = Template.acc_FixAsset,
    updateTpl = Template.acc_FixAssetUpdate;


var stateAsset = new ReactiveObj({
    account: "",
    value: 0,
    life: 0,
    estSalvage: 0,
    des: "",
    code: "",
    percent: 0,
    cssClassForAddMoreFixedAsset: 'disabled'
});
var fixAssetDepCollection;
fixAssetTpl.onCreated(function () {

    let data=Template.currentData();
    fixAssetDepCollection=data.fixAssetDepCollection;

    createNewAlertify('fixAsset');
    Meteor.setTimeout(function () {
        $('[name="tmpAccount"]').select2();

        $('.tmpAccount').select2('val', '');

    }, 50)

})

fixAssetTpl.helpers({
    cssClassForAddMoreFixedAsset: function () {
        var account = stateAsset.get('account');
        var value = stateAsset.get('value');
        var life = stateAsset.get('life');
        var estSalvage = stateAsset.get('estSalvage');

        if (value != "" && life != "" && account != "" && estSalvage != "") {
            stateAsset.set('cssClassForAddMoreFixedAsset', '');
        } else {
            stateAsset.set('cssClassForAddMoreFixedAsset', 'disabled');
        }
        return stateAsset.get('cssClassForAddMoreFixedAsset');
    },
    chartAccount: function () {
        var listChartAccount = [];
        Acc.Collection.ChartAccount.find({accountTypeId: '11'}, {sort: {code: 1}})
            .forEach(function (obj) {
                listChartAccount.push({
                    _id: obj._id,
                    name: obj.name,
                    code: Spacebars.SafeString(Acc.SpaceChar.space(obj.level * 6) + obj.code)
                });
            });
        return listChartAccount;
    },
    fixAsset: function () {
       /* debugger;
        let data = Template.currentData();
        if (data && data.transactionAsset) {
            data.transactionAsset.forEach((obj)=> {
                fixAssetDepCollection.insert(obj);
            });
        }*/
        let getItems = fixAssetDepCollection.find().fetch();
        return getItems;
    },
    keyArgs(index, name){
        return `transactionAsset.${index}.${name}`;
    }
})


fixAssetTpl.events({
    'click .addItem': function (e, t) {
        let accountOrg = $('[name="tmpAccount"]').val();
        let value = $('[name="tmpValue"]').val();
        let life = $('[name="tmpLife"]').val();
        let estSalvage = $('[name="tmpEstimate"]').val();
        let code = $('[name="tmpCode"]').val();
        let itemDes = $('[name="tmpItemDes"]').val();
        let percent = $('[name="tmpPercent"]').val();

        fixAssetDepCollection.insert({
            account: accountOrg,
            value: value,
            life: life,
            estSalvage: estSalvage,
            code: code,
            percent: percent,
            description: itemDes
        });


        $('.tmpAccount').select2('val', '');
        $('.tmpCode').val('');
        $('.tmpValue').val(0);
        $('.tmpLife').val(0);
        $('.tmpEstimate').val(0);
        $('.tmpItemDes').val('');
        $('.tmpPercent').val(0);

        stateAsset.set('account', "");
        stateAsset.set('value', 0);
        stateAsset.set('life', 0);
        stateAsset.set('estSalvage', 0);
        stateAsset.set('code', "");
        stateAsset.set('percent', 0);
        stateAsset.set('itemDes', "");


    },
    'click .js-destroy-item': function (e, t) {
        debugger;
        var self = this;
        fixAssetDepCollection.remove({_id: self._id});
    },
    'change .tmpAccount': function (e, t) {
        stateAsset.set('account', $('#account').val())
    },
    'change .tmpCode': function (e, t) {
        stateAsset.set('code', $(e.currentTarget).val())
    },
    'keyup .tmpValue': function (e, t) {
        stateAsset.set('value', $(e.currentTarget).val());
    },
    'keyup .tmpLife': function (e, t) {
        stateAsset.set('life', $(e.currentTarget).val());
    },
    'keyup .tmpEstimate': function (e, t) {
        stateAsset.set('estSalvage', $(e.currentTarget).val());
    },
    'keyup .tmpItemDes': function (e, t) {
        stateAsset.set('itemDes', $(e.currentTarget).val());
    },
    'keyup .tmpPercent': function (e, t) {
        stateAsset.set('percent', $(e.currentTarget).val());
    },
    'click .js-update-item': function (e, t) {
        var self = this;
        var doc = fixAssetDepCollection.findOne(self._id);
        alertify.fixAsset(fa("pencil", "Fix Asset"), renderTemplate(updateTpl, doc));
    }
});

updateTpl.helpers({
    schema(){
        return Acc.Schema.fixAssetSchema;
    }
});



AutoForm.hooks({
    acc_FixAssetUpdate: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            event.preventDefault();
            fixAssetDepCollection.update(
                {_id: currentDoc._id},
                updateDoc
            );
            this.done();
        },
        onSuccess: function (formType, result) {
            alertify.fixAsset().close();
            alertify.success("Success");

        },
        onError: function (formTupe, error) {
            alertify.error(error.message);
        }
    }
});


