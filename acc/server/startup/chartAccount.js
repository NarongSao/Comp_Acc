Meteor.startup(function () {
    if (Acc.Collection.ChartAccount.find().count() == 0) {
     /*   Acc.Collection.ChartAccount.insert(
            {
                _id: "001",
                code: '',
                name: 'Accounts Receivable',
                accountTypeId: "10"
            }
        );*/
        Acc.Collection.ChartAccount.insert(
            {
                _id: "002",
                code: '111102',
                name: 'Cash on Hand',
                accountTypeId: "10"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "003",
                code: '116302',
                name: 'Demand and Saving bank',
                accountTypeId: "10"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "004",
                code: '116302A',
                name: 'Saving ACLEDA bank',
                accountTypeId: "10",
                parentId: "003",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "005",
                code: '116302B',
                name: 'Saving CANADAI bank',
                accountTypeId: "10",
                parentId: "003",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "006",
                code: '116302C',
                name: 'Saving COMPUC bank',
                accountTypeId: "10",
                parentId: "003",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "007",
                code: '116302D',
                name: 'Saving RDB bank',
                accountTypeId: "10",
                parentId: "003",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "008",
                code: '131202',
                name: 'Standard Loans Individual',
                accountTypeId: "10"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "009",
                code: '171202',
                name: 'Less Reserve for General',
                accountTypeId: "10"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "010",
                code: '221502',
                name: 'Prepaid Rent',
                accountTypeId: "10"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "011",
                code: '221652',
                name: 'Prepaid Other',
                accountTypeId: "10"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "012",
                code: '296502',
                name: 'Advance For staff',
                accountTypeId: "10"
            }
        );
      /*  Acc.Collection.ChartAccount.insert(
            {
                _id: "013",
                code: '',
                name: 'Undeposited Funds',
                accountTypeId: "10"
            }
        );*/
        Acc.Collection.ChartAccount.insert(
            {
                _id: "014",
                code: '291102 ',
                name: 'Land',
                accountTypeId: "11"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "015",
                code: '293102',
                name: 'Furniture and fixture',
                accountTypeId: "11"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "016",
                code: '293302',
                name: 'Computer and Equipment',
                accountTypeId: "11"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "017",
                code: '293402',
                name: 'Motors and Vehicles',
                accountTypeId: "11"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "018",
                code: '293502',
                name: 'Software',
                accountTypeId: "11"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "019",
                code: '294402',
                name: 'Accu-Depre-Funiture',
                accountTypeId: "11"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "020",
                code: '294602 ',
                name: 'Acc-dep-Computer &Equip',
                accountTypeId: "11"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "021",
                code: '294702',
                name: 'Accu-Depr-Motor&Vehicle',
                accountTypeId: "11"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "022",
                code: '294802',
                name: 'Acc-Depr-software',
                accountTypeId: "11"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "023",
                code: '296602',
                name: 'Equivalence Exchange Acc',
                accountTypeId: "12"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "024",
                code: '322902',
                name: 'Compulsory Deposits',
                accountTypeId: "20"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "025",
                code: '332202',
                name: 'Subordinated Debt',
                accountTypeId: "20"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "026",
                code: '361202',
                name: 'Accrued Bonus payable',
                accountTypeId: "20"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "027",
                code: '361203',
                name: 'Accrued tax on Salary',
                accountTypeId: "20"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "028",
                code: '371203',
                name: 'Staff Retire Deposit',
                accountTypeId: "20"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "029",
                code: '381102',
                name: 'Account payable',
                accountTypeId: "20"
            }
        );
     /*   Acc.Collection.ChartAccount.insert(
            {
                _id: "030",
                code: '',
                name: 'Sales Tax Payable',
                accountTypeId: "20"
            }
        );*/
        Acc.Collection.ChartAccount.insert(
            {
                _id: "031",
                code: '334302',
                name: 'long term Borrowing bank',
                accountTypeId: "21"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "032",
                code: '345302',
                name: 'AIP-long-term-bank',
                accountTypeId: "21"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "033",
                code: '3000',
                name: 'Opening Bal Equity',
                accountTypeId: "30"
            }
        );
        /*Acc.Collection.ChartAccount.insert(
            {
                _id: "034",
                code: '3900',
                name: 'Retained Earnings',
                accountTypeId: "30"
            }
        );*/
        Acc.Collection.ChartAccount.insert(
            {
                _id: "035",
                code: '401102',
                name: 'Paid Up Capital',
                accountTypeId: "30"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "036",
                code: '402202',
                name: 'Donated Capital previous',
                accountTypeId: "30"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "037",
                code: '404302',
                name: 'Perpeted subordinated d',
                accountTypeId: "30"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "038",
                code: '405202',
                name: 'Capital',
                accountTypeId: "30"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "039",
                code: '407102',
                name: 'Retained Earning',
                accountTypeId: "30"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "040",
                code: '408102',
                name: 'Profit Current year',
                accountTypeId: "30"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "041",
                code: '515302',
                name: 'Interest income (bank)',
                accountTypeId: "40"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "042",
                code: '521202',
                name: 'Interest income (client)',
                accountTypeId: "40"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "043",
                code: '564102',
                name: 'Other interest Income',
                accountTypeId: "40"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "044",
                code: '571102',
                name: 'Fees &Commission Loan',
                accountTypeId: "40"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "045",
                code: '571202',
                name: 'Other Fees(Penalty)',
                accountTypeId: "40"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "046",
                code: '573102',
                name: 'Other Non-Inter income',
                accountTypeId: "40"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "047",
                code: '574102',
                name: 'Foreign Exchange Gain',
                accountTypeId: "40"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "048",
                code: '575102',
                name: 'Gain on deposal fixasset',
                accountTypeId: "40"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "049",
                code: '612902',
                name: 'Inter-Exp-Com. Deposit',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "050",
                code: '622302',
                name: 'Inter-Exp.Subordinated',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "051",
                code: '624302',
                name: 'Inter-Exp-Long-loan bank',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "052",
                code: '629902',
                name: 'Interest expense Other',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "053",
                code: '631102',
                name: 'Salary & Bonuse Expense',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "054",
                code: '631102A',
                name: 'Salary of BOD',
                accountTypeId: "50",
                parentId: "053",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "055",
                code: '631102B',
                name: 'Salary of Technical',
                accountTypeId: "50",
                parentId: "053",
                level: "1"

            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "056",
                code: '631102C',
                name: 'Salary of Staff',
                accountTypeId: "50",
                parentId: "053",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "057",
                code: '631102D',
                name: 'Bonuse expense',
                accountTypeId: "50",
                parentId: "053",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "058",
                code: '631103',
                name: 'Staff Retire Expense',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "059",
                code: '631202',
                name: 'Employee overtime exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "060",
                code: '631302',
                name: 'Employee Tranining Exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "061",
                code: '631402',
                name: 'Employee Medical Exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "062",
                code: '631802',
                name: 'Employee Pension Exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "063",
                code: '631902',
                name: 'Other Employee Exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "064",
                code: '631902A',
                name: 'Newspaper, Pure drink',
                accountTypeId: "50",
                parentId: "063",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "065",
                code: '631902B',
                name: 'Mission,Guest',
                accountTypeId: "50",
                parentId: "063",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "066",
                code: '631902C',
                name: 'Support Food',
                accountTypeId: "50",
                parentId: "063",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "067",
                code: '642202',
                name: 'Depr Expense Building',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "068",
                code: '642352',
                name: 'Depre-Exp-Furniture&Fix',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "069",
                code: '642502',
                name: 'Depre-Exp-Motor&Vihicle',
                accountTypeId: "50"
            });
        Acc.Collection.ChartAccount.insert(
            {
                _id: "070",
                code: '642532',
                name: 'Depre-Softwear',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "071",
                code: '653102',
                name: 'Repair and Maintain Exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "072",
                code: '653102A',
                name: 'Repair&Maintain car',
                accountTypeId: "50",
                parentId: "071",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "073",
                code: '653102B',
                name: 'Repair&Maintain Motor',
                accountTypeId: "50",
                parentId: "071",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "074",
                code: '653102C',
                name: 'Repair&Maintain Office',
                accountTypeId: "50",
                parentId: "071",
                level: "1"
            }
        ); Acc.Collection.ChartAccount.insert(
            {
                _id: "105",
                code: '653102D',
                name: 'Repair&Maintain Software',
                accountTypeId: "50",
                parentId: "071",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "075",
                code: '653202',
                name: 'Rental Expense',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "076",
                code: '653302',
                name: 'Utility Expense',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "077",
                code: '653402',
                name: 'Sm Items of Fur.Fix&Equ',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "078",
                code: '654102',
                name: 'Marketing and adv Exp.',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "079",
                code: '654202',
                name: 'Professional Service exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "080",
                code: '654302',
                name: 'Tax fees Expense',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "081",
                code: '654302A',
                name: 'Tax on Salary',
                accountTypeId: "50",
                parentId: "080",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "082",
                code: '654302B',
                name: 'Tax on Label',
                accountTypeId: "50",
                parentId: "080",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "083",
                code: '654302C',
                name: 'Tax For Car',
                accountTypeId: "50",
                parentId: "080",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "084",
                code: '654302D',
                name: 'Tax For Motor',
                accountTypeId: "50",
                parentId: "080",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "085",
                code: '654502',
                name: 'Legal fees expense',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "086",
                code: '655102',
                name: 'Tavel expense',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "087",
                code: '655202',
                name: 'Business Meal&Enter Exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "088",
                code: '655302',
                name: 'Communication Expense',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "089",
                code: '655302A',
                name: 'cellcard & Telephone',
                accountTypeId: "50",
                parentId: "088",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "090",
                code: '655302B',
                name: 'Send Document',
                accountTypeId: "50",
                parentId: "088",
                level: "1"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "091",
                code: '657102',
                name: 'Stationery & Supply Exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "092",
                code: '657202',
                name: 'Printing and Forms Exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "093",
                code: '658902',
                name: 'Other Insurance Expense',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "094",
                code: '661102',
                name: 'Security Expense',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "095",
                code: '662102 ',
                name: 'Boad of Directors fee',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "096",
                code: '662202',
                name: 'Shareholders Meeting Exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "097",
                code: '668102',
                name: 'Gasholine operating Exp',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "098",
                code: '669902',
                name: 'Miscellaneous Exp.',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "099",
                code: '671102',
                name: 'Bad & Doubtful Debts',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "100",
                code: '681102',
                name: 'Loss on Foreign Exchang',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "101",
                code: '681602',
                name: 'Loss on Sale/Disposal As',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "102",
                code: '692102',
                name: 'Coresponden Bank Charge',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "103",
                code: '692202',
                name: 'Fees&Commiss on Borrow',
                accountTypeId: "50"
            }
        );
        Acc.Collection.ChartAccount.insert(
            {
                _id: "104",
                code: '654402',
                name: 'License Fees Expense',
                accountTypeId: "51"
            }
        );

    }
});