/*

let SelectOptMethods={};
SelectOptMethods.item = new ValidatedMethod({
    name: 'acc.selectOptMethods.account',
    validate: null,
    run(options) {
        if (!this.isSimulation) {
            this.unblock();

            let list = [], selector = {};
            let searchText = options.searchText;
            let values = options.values;

            if (searchText) {
                selector = {
                    $or: [
                        {code: {$regex: searchText, $options: 'i'}},
                        {name: {$regex: searchText, $options: 'i'}}
                    ]
                };
            } else if (values.length) {
                selector = {code: {$in: values}};
            }

            let data = Acc.Collection.ChartAccount.find(selector, {limit: 10});
            data.forEach(function (value) {
                let label = Spacebars.SafeString(Acc.SpaceChar.space(value.level * 6) + value.code) + ' | ' + value.name;
                list.push({label: label, value: value.code +" | "+ value.name});
            });

            return list;
        }
    }
});
*/
