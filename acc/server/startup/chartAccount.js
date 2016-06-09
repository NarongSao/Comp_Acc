Meteor.startup(function () {
    if (Acc.Collection.ChartAccount.find().count() == 0) {


     //  NWDA

        /*Acc.Collection.ChartAccount.insert(
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
      /!*  Acc.Collection.ChartAccount.insert(
            {
                _id: "013",
                code: '',
                name: 'Undeposited Funds',
                accountTypeId: "10"
            }
        );*!/
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
     /!*   Acc.Collection.ChartAccount.insert(
            {
                _id: "030",
                code: '',
                name: 'Sales Tax Payable',
                accountTypeId: "20"
            }
        );*!/
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
        /!*Acc.Collection.ChartAccount.insert(
            {
                _id: "034",
                code: '3900',
                name: 'Retained Earnings',
                accountTypeId: "30"
            }
        );*!/
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
        );*/


        //CFO

        //Riel
        Acc.Collection.ChartAccount.insert({_id:	"001"	,code:	"100002"	,name:	"Total Assets Control Account",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"002"	,code:	"111102"	,name:	"Cash in Vault and on Hand ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"003"	,code:	"111202"	,name:	"Cash in Transit ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"004"	,code:	"111302"	,name:	"Cheques in Transit",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"005"	,code:	"114102"	,name:	"Due from NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"006"	,code:	"114202"	,name:	"Capital Guarantee Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"007"	,code:	"114302"	,name:	"Reserve Requirement with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"008"	,code:	"114402"	,name:	"Other Demand Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"009"	,code:	"114602"	,name:	"Other Term Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"010"	,code:	"115102"	,name:	"Current Accounts (Nostro) with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"011"	,code:	"115202"	,name:	"Current Accounts (Nostro) with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"012"	,code:	"115302"	,name:	"Current Accounts (Nostro) with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"013"	,code:	"116102"	,name:	"Demand and Savings Deposits with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"014"	,code:	"116202"	,name:	"Demand and Savings Deposits with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"015"	,code:	"116302"	,name:	"Demand and Savings Deposits with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"016"	,code:	"121102"	,name:	"Time Deposits and Placements with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"017"	,code:	"121202"	,name:	"Time Deposits and Placements with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"018"	,code:	"121302"	,name:	"Time Deposits and Placements with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"019"	,code:	"122102"	,name:	"Claims on Sovereigns rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"020"	,code:	"122202"	,name:	"Claims on Sovereigns rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"021"	,code:	"122302"	,name:	"Claims on Sovereigns rated BBB+ to BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"022"	,code:	"122402"	,name:	"Claims on Sovereigns rated below BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"023"	,code:	"131102"	,name:	"Standard Loans – Groups <=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"024"	,code:	"131202"	,name:	"Standard Loans – Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"025"	,code:	"131302"	,name:	"Standard Loans – Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"026"	,code:	"131402"	,name:	"Standard Loans – Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"027"	,code:	"131512"	,name:	"Standard Loans – Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"028"	,code:	"131522"	,name:	"Standard Loans – Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"029"	,code:	"131532"	,name:	"Standard Loans – Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"030"	,code:	"131542"	,name:	"Standard Loans – Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"031"	,code:	"132102"	,name:	"Standard Loans – Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"032"	,code:	"132202"	,name:	"Standard Loans – Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"033"	,code:	"132302"	,name:	"Standard Loans – Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"034"	,code:	"132402"	,name:	"Standard Loans – Others> 1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"035"	,code:	"132512"	,name:	"Standard Loans – Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"036"	,code:	"132522"	,name:	"Standard Loans – Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"037"	,code:	"132532"	,name:	"Standard Loans – Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"038"	,code:	"132542"	,name:	"Standard Loans – Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"039"	,code:	"141102"	,name:	"Substandard Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"040"	,code:	"141202"	,name:	"Substandard Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"041"	,code:	"141302"	,name:	"Substandard Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"042"	,code:	"141402"	,name:	"Substandard Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"043"	,code:	"141512"	,name:	"Substandard Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"044"	,code:	"141522"	,name:	"Substandard Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"045"	,code:	"141532"	,name:	"Substandard Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"046"	,code:	"141542"	,name:	"Substandard Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"047"	,code:	"142102"	,name:	"Substandard Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"048"	,code:	"142202"	,name:	"Substandard Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"049"	,code:	"142302"	,name:	"Substandard Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"050"	,code:	"142402"	,name:	"Substandard Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"051"	,code:	"142512"	,name:	"Substandard Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"052"	,code:	"142522"	,name:	"Substandard Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"053"	,code:	"142532"	,name:	"Substandard Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"054"	,code:	"142542"	,name:	"Substandard Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"055"	,code:	"151102"	,name:	"Doubtful Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"056"	,code:	"151202"	,name:	"Doubtful Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"057"	,code:	"151302"	,name:	"Doubtful Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"058"	,code:	"151402"	,name:	"Doubtful Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"059"	,code:	"151512"	,name:	"Doubtful Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"060"	,code:	"151522"	,name:	"Doubtful Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"061"	,code:	"151532"	,name:	"Doubtful Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"062"	,code:	"151542"	,name:	"Doubtful Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"063"	,code:	"152102"	,name:	"Doubtful Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"064"	,code:	"152202"	,name:	"Doubtful Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"065"	,code:	"152302"	,name:	"Doubtful Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"066"	,code:	"152402"	,name:	"Doubtful Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"067"	,code:	"152512"	,name:	"Doubtful Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"068"	,code:	"152522"	,name:	"Doubtful Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"069"	,code:	"152532"	,name:	"Doubtful Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"070"	,code:	"152542"	,name:	"Doubtful Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"071"	,code:	"161102"	,name:	"Loss Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"072"	,code:	"161202"	,name:	"Loss Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"073"	,code:	"161302"	,name:	"Loss Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"074"	,code:	"161402"	,name:	"Loss Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"075"	,code:	"161512"	,name:	"Loss Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"076"	,code:	"161522"	,name:	"Loss Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"077"	,code:	"161532"	,name:	"Loss Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"078"	,code:	"161542"	,name:	"Loss Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"079"	,code:	"162102"	,name:	"Loss Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"080"	,code:	"162202"	,name:	"Loss Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"081"	,code:	"162302"	,name:	"Loss Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"082"	,code:	"162402"	,name:	"Loss Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"083"	,code:	"162512"	,name:	"Loss Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"084"	,code:	"162522"	,name:	"Loss Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"085"	,code:	"162532"	,name:	"Loss Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"086"	,code:	"162542"	,name:	"Loss Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"087"	,code:	"171102"	,name:	"( Less) Reserve for Specific Loan Losses",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"088"	,code:	"171202"	,name:	"( Less) Reserve for General Loan Losses",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"089"	,code:	"211002"	,name:	"Investment Debt Securities - Hold to Maturity",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"090"	,code:	"211602"	,name:	"Accumulated Premium (Discount) – HTM",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"091"	,code:	"212002"	,name:	"Investment Debt Securities - Available for Sale",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"092"	,code:	"212602"	,name:	"Accumulated Premium (Discount) – AFS",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"093"	,code:	"213802"	,name:	"Other Investment Securities",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"094"	,code:	"214902"	,name:	"Investment in Equity Capital",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"095"	,code:	"215602"	,name:	"Net Unrealized Holding Gains (Loss) – AFS ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"096"	,code:	"221102"	,name:	"Prepaid Insurance",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"097"	,code:	"221202"	,name:	"Prepaid Deposit Insurance Assessment",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"098"	,code:	"221302"	,name:	"Prepaid Service / Maintenance Contracts",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"099"	,code:	"221402"	,name:	"Prepaid Professional Fees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"100"	,code:	"221502"	,name:	"Prepaid Rent",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"101"	,code:	"221602"	,name:	"Prepaid Profit Tax",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"102"	,code:	"221652"	,name:	"Prepaid - Other",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"103"	,code:	"222302"	,name:	"Advance Payment or Deposits",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"104"	,code:	"222402"	,name:	"Purchased Interest Receivable",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"105"	,code:	"222502"	,name:	"Stationary Supply and Inventory",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"106"	,code:	"231102"	,name:	"AIR – Due from NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"107"	,code:	"231202"	,name:	"AIR – Capital Guarantee Deposit  with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"108"	,code:	"231302"	,name:	"AIR – Other Demand Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"109"	,code:	"231602"	,name:	"AIR – Other Term Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"110"	,code:	"232102"	,name:	"AIR - Demand and Savings Deposits with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"111"	,code:	"232202"	,name:	"AIR - Demand and Savings Deposits with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"112"	,code:	"232302"	,name:	"AIR - Demand and Savings Deposits with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"113"	,code:	"233102"	,name:	"AIR - Time Deposits and Placements with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"114"	,code:	"233202"	,name:	"AIR - Time Deposits and Placements with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"115"	,code:	"233302"	,name:	"AIR - Time Deposits and Placements with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"116"	,code:	"234102"	,name:	"AIR - Claims on Sovereigns rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"117"	,code:	"234202"	,name:	"AIR - Claims on Sovereigns rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"118"	,code:	"234302"	,name:	"AIR - Claims on Sovereigns rated BBB+ to BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"119"	,code:	"234402"	,name:	"AIR - Claims on Sovereigns rated below BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"120"	,code:	"241002"	,name:	"AIR – Investment Debt Securities – Hold to Maturity ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"121"	,code:	"242002"	,name:	"AIR – Investment Debt Securities – Available For Sale",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"122"	,code:	"243002"	,name:	"AIR – Other Investment ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"123"	,code:	"251102"	,name:	"AIR - Standard Loans – Groups <=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"124"	,code:	"251202"	,name:	"AIR - Standard Loans – Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"125"	,code:	"251302"	,name:	"AIR - Standard Loans – Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"126"	,code:	"251402"	,name:	"AIR - Standard Loans – Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"127"	,code:	"251512"	,name:	"AIR - Standard Loans – Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"128"	,code:	"251522"	,name:	"AIR - Standard Loans – Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"129"	,code:	"251532"	,name:	"AIR - Standard Loans – Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"130"	,code:	"251542"	,name:	"AIR - Standard Loans – Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"131"	,code:	"252102"	,name:	"AIR - Standard Loans – Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"132"	,code:	"252202"	,name:	"AIR - Standard Loans – Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"133"	,code:	"252302"	,name:	"AIR - Standard Loans – Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"134"	,code:	"252402"	,name:	"AIR - Standard Loans – Others> 1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"135"	,code:	"252512"	,name:	"AIR - Standard Loans – Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"136"	,code:	"252522"	,name:	"AIR - Standard Loans – Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"137"	,code:	"252532"	,name:	"AIR - Standard Loans – Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"138"	,code:	"252542"	,name:	"AIR - Standard Loans – Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"139"	,code:	"261102"	,name:	"AIR - Substandard Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"140"	,code:	"261202"	,name:	"AIR - Substandard Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"141"	,code:	"261302"	,name:	"AIR - Substandard Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"142"	,code:	"261402"	,name:	"AIR - Substandard Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"143"	,code:	"261512"	,name:	"AIR - Substandard Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"144"	,code:	"261522"	,name:	"AIR - Substandard Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"145"	,code:	"261532"	,name:	"AIR - Substandard Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"146"	,code:	"261542"	,name:	"AIR - Substandard Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"147"	,code:	"262102"	,name:	"AIR - Substandard Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"148"	,code:	"262202"	,name:	"AIR - Substandard Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"149"	,code:	"262302"	,name:	"AIR - Substandard Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"150"	,code:	"262402"	,name:	"AIR - Substandard Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"151"	,code:	"262512"	,name:	"AIR - Substandard Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"152"	,code:	"262522"	,name:	"AIR - Substandard Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"153"	,code:	"262532"	,name:	"AIR - Substandard Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"154"	,code:	"262542"	,name:	"AIR - Substandard Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"155"	,code:	"271102"	,name:	"AIR - Doubtful Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"156"	,code:	"271202"	,name:	"AIR - Doubtful Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"157"	,code:	"271302"	,name:	"AIR - Doubtful Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"158"	,code:	"271402"	,name:	"AIR - Doubtful Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"159"	,code:	"271512"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"160"	,code:	"271522"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"161"	,code:	"271532"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"162"	,code:	"271542"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"163"	,code:	"272102"	,name:	"AIR - Doubtful Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"164"	,code:	"272202"	,name:	"AIR - Doubtful Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"165"	,code:	"272302"	,name:	"AIR - Doubtful Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"166"	,code:	"272402"	,name:	"AIR - Doubtful Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"167"	,code:	"272512"	,name:	"AIR - Doubtful Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"168"	,code:	"272522"	,name:	"AIR - Doubtful Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"169"	,code:	"272532"	,name:	"AIR - Doubtful Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"170"	,code:	"272542"	,name:	"AIR - Doubtful Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"171"	,code:	"281102"	,name:	"AIR - Loss Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"172"	,code:	"281202"	,name:	"AIR - Loss Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"173"	,code:	"281302"	,name:	"AIR - Loss Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"174"	,code:	"281402"	,name:	"AIR - Loss Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"175"	,code:	"281512"	,name:	"AIR - Loss Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"176"	,code:	"281522"	,name:	"AIR - Loss Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"177"	,code:	"281532"	,name:	"AIR - Loss Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"178"	,code:	"281542"	,name:	"AIR - Loss Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"179"	,code:	"282102"	,name:	"AIR - Loss Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"180"	,code:	"282202"	,name:	"AIR - Loss Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"181"	,code:	"282302"	,name:	"AIR - Loss Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"182"	,code:	"282402"	,name:	"AIR - Loss Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"183"	,code:	"282512"	,name:	"AIR - Loss Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"184"	,code:	"282522"	,name:	"AIR - Loss Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"185"	,code:	"282532"	,name:	"AIR - Loss Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"186"	,code:	"282542"	,name:	"AIR - Loss Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"187"	,code:	"289702"	,name:	"Accounts Receivable ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"188"	,code:	"289802"	,name:	"Income Tax Receivable/Recoverable",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"189"	,code:	"289902"	,name:	"Dividends Receivable",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"190"	,code:	"291102"	,name:	"Land ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"191"	,code:	"291202"	,name:	"Land Improvement",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"192"	,code:	"292102"	,name:	"Building ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"193"	,code:	"292202"	,name:	"Leasehold Improvement",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"194"	,code:	"292302"	,name:	"Fixed Assets Under Construction/Development",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"195"	,code:	"293102"	,name:	"Furniture and Fixtures",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"196"	,code:	"293202"	,name:	"Equipment",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"197"	,code:	"293302"	,name:	"Computer Equipment",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"198"	,code:	"293402"	,name:	"Motor Vehicles",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"199"	,code:	"293502"	,name:	"Other Fixed Assets",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"200"	,code:	"294102"	,name:	"Accumulated Depreciation – Land Improvements",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"201"	,code:	"294202"	,name:	"Accumulated Depreciation – Buildings ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"202"	,code:	"294302"	,name:	"Accumulated Depreciation – Leasehold Improvements ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"203"	,code:	"294402"	,name:	"Accumulated Depreciation – Furniture and Fixtures ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"204"	,code:	"294502"	,name:	"Accumulated Depreciation – Equipment ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"205"	,code:	"294602"	,name:	"Accumulated Depreciation – Computer Equipment ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"206"	,code:	"294702"	,name:	"Accumulated Depreciation – Motor Vehicles ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"207"	,code:	"294802"	,name:	"Accumulated Depreciation – Other Fixed Assets ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"208"	,code:	"294912"	,name:	"Amortization – Intangible Assets ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"209"	,code:	"294922"	,name:	"Amortization – Formation Expenses",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"210"	,code:	"295102"	,name:	"Formation Expenses",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"211"	,code:	"295202"	,name:	"Intangible Assets",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"212"	,code:	"296502"	,name:	"Inter-Branch Accounts",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"213"	,code:	"296602"	,name:	"Equivalence Foreign Exchange Position Account ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"214"	,code:	"296702"	,name:	"Suspense Asset Account ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"215"	,code:	"296802"	,name:	"Other Sundry Assets ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"216"	,code:	"300002"	,name:	"Total Liabilities Control Account",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"217"	,code:	"321102"	,name:	"Amounts owed to NBC",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"218"	,code:	"322102"	,name:	"Voluntary Deposits - Demand",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"219"	,code:	"322202"	,name:	"Voluntary Deposits - Savings",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"220"	,code:	"322302"	,name:	"Voluntary Deposits - Term",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"221"	,code:	"322402"	,name:	"Voluntary Deposits - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"222"	,code:	"322902"	,name:	"Compulsory Deposits",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"223"	,code:	"332202"	,name:	"Subordinated Debt",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"224"	,code:	"333102"	,name:	"Short-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"225"	,code:	"333202"	,name:	"Short-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"226"	,code:	"333302"	,name:	"Short-term Borrowed Funds -  Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"227"	,code:	"333402"	,name:	"Short-term Borrowed Funds - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"228"	,code:	"334102"	,name:	"Long-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"229"	,code:	"334202"	,name:	"Long-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"230"	,code:	"334302"	,name:	"Long-term Borrowed Funds -  Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"231"	,code:	"334402"	,name:	"Long-term Borrowed Funds - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"232"	,code:	"341102"	,name:	"AIP - Amounts owed to NBC",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"233"	,code:	"342102"	,name:	"AIP - Voluntary Deposits - Demand",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"234"	,code:	"342202"	,name:	"AIP - Voluntary Deposits - Savings",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"235"	,code:	"342302"	,name:	"AIP - Voluntary Deposits - Term",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"236"	,code:	"342402"	,name:	"AIP - Voluntary Deposits - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"237"	,code:	"342902"	,name:	"AIP - Compulsory Deposits",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"238"	,code:	"343302"	,name:	"AIP – Subordinated Debt",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"239"	,code:	"344102"	,name:	"AIP – Short-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"240"	,code:	"344202"	,name:	"AIP – Short-term Borrowed Funds – Corporations, Associations, Organizations  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"241"	,code:	"344302"	,name:	"AIP – Short-term Borrowed Funds – Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"242"	,code:	"344402"	,name:	"AIP – Short-term Borrowed Funds – Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"243"	,code:	"345102"	,name:	"AIP – Long-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"244"	,code:	"345202"	,name:	"AIP – Long-term Borrowed Funds – Corporations, Associations, Organizations  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"245"	,code:	"345302"	,name:	"AIP – Long-term Borrowed Funds – Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"246"	,code:	"345402"	,name:	"AIP – Long-term Borrowed Funds – Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"247"	,code:	"361102"	,name:	"Accrued Salary Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"248"	,code:	"361202"	,name:	"Accrued Bonus/Incentive Compensation Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"249"	,code:	"361302"	,name:	"Accrued and Withheld Payroll Taxes Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"250"	,code:	"361402"	,name:	"Other Payroll Deductions Withheld Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"251"	,code:	"361502"	,name:	"Accrued Employee Benefits Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"252"	,code:	"361602"	,name:	"Accrued Vacation Pay Payable  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"253"	,code:	"362102"	,name:	"Accrued Expenses and Provisions",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"254"	,code:	"363102"	,name:	"Accrued Taxes Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"255"	,code:	"372102"	,name:	"Unearned Income",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"256"	,code:	"373102"	,name:	"Deferred Income – Government and Public Grants",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"257"	,code:	"381102"	,name:	"Accounts Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"258"	,code:	"382102"	,name:	"Dividend Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"259"	,code:	"383102"	,name:	"Dividend Withholding Taxes",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"260"	,code:	"384102"	,name:	"Other Withholding Taxes",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"261"	,code:	"385102"	,name:	"Interest in Suspense",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"262"	,code:	"386102"	,name:	"Foreign Exchange Position Account  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"263"	,code:	"389102"	,name:	"Provision for Losses on Off Balance Sheet Accounts",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"264"	,code:	"389202"	,name:	"Global and General Provision for Losses ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"265"	,code:	"389302"	,name:	"Deferred Taxation",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"266"	,code:	"389802"	,name:	"Suspense and Sundry Liability Account",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"267"	,code:	"400002"	,name:	"Total Equity Control Account",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"268"	,code:	"401102"	,name:	"Paid Up Capital",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"269"	,code:	"401202"	,name:	"Premiums Related to Capital (Paid in Surplus)",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"270"	,code:	"401302"	,name:	"( Less) Unpaid Portion of Capital",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"271"	,code:	"401402"	,name:	"( Less) Treasury Stock",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"272"	,code:	"402102"	,name:	"Donated capital - Current year",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"273"	,code:	"402202"	,name:	"Donated capital - Previous years",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"274"	,code:	"404102"	,name:	"Hybrid Capital - Non-refundable public grants and subsidies",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"275"	,code:	"404202"	,name:	"Hybrid Capital - Public guarantee funds for credit risks",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"276"	,code:	"404302"	,name:	"Hybrid Capital - Perpetual subordinated debts",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"277"	,code:	"404402"	,name:	"Hybrid Capital - Others",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"278"	,code:	"405102"	,name:	"Revenue Reserves  ",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"279"	,code:	"405202"	,name:	"Capital Reserves  ",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"280"	,code:	"405302"	,name:	"Subordinated debt approved by NBC",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"281"	,code:	"405402"	,name:	"Revaluation reserves approved by NBC  ",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"282"	,code:	"405502"	,name:	"Other Reserves",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"283"	,code:	"407102"	,name:	"Retained Earnings",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"284"	,code:	"408102"	,name:	"Profit Current Year",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"285"	,code:	"500002"	,name:	"Total Income Control Account",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"286"	,code:	"514102"	,name:	"Interest Income – Due from NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"287"	,code:	"514202"	,name:	"Interest Income – Capital Guarantee Deposit  with NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"288"	,code:	"514302"	,name:	"Interest Income – Other Demand Deposit with NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"289"	,code:	"514602"	,name:	"Interest Income – Other Term Deposit with NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"290"	,code:	"515102"	,name:	"Interest Income - Demand and Savings Deposits with Banks rated AAA to AA-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"291"	,code:	"515202"	,name:	"Interest Income - Demand and Savings Deposits with Banks rated A+ to A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"292"	,code:	"515302"	,name:	"Interest Income - Demand and Savings Deposits with Banks rated below A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"293"	,code:	"516102"	,name:	"Interest Income - Time Deposits and Placements with Banks rated AAA to AA-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"294"	,code:	"516202"	,name:	"Interest Income - Time Deposits and Placements with Banks rated A+ to A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"295"	,code:	"516302"	,name:	"Interest Income - Time Deposits and Placements with Banks rated below A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"296"	,code:	"517102"	,name:	"Interest income - Claims on Sovereigns rated AAA to AA-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"297"	,code:	"517202"	,name:	"Interest Income - Claims on Sovereigns rated A+ to A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"298"	,code:	"517302"	,name:	"Interest Income - Claims on Sovereigns rated BBB+ to BBB-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"299"	,code:	"517402"	,name:	"Interest Income - Claims on Sovereigns rated below BBB-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"300"	,code:	"521102"	,name:	"Interest Income - Standard Loans – Groups <=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"301"	,code:	"521202"	,name:	"Interest Income - Standard Loans – Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"302"	,code:	"521302"	,name:	"Interest Income - Standard Loans – Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"303"	,code:	"521402"	,name:	"Interest Income - Standard Loans – Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"304"	,code:	"521512"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"305"	,code:	"521522"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"306"	,code:	"521532"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"307"	,code:	"521542"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"308"	,code:	"522102"	,name:	"Interest Income - Standard Loans – Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"309"	,code:	"522202"	,name:	"Interest Income - Standard Loans – Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"310"	,code:	"522302"	,name:	"Interest Income - Standard Loans – Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"311"	,code:	"522402"	,name:	"Interest Income - Standard Loans – Others> 1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"312"	,code:	"522512"	,name:	"Interest Income - Standard Loans – Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"313"	,code:	"522522"	,name:	"Interest Income - Standard Loans – Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"314"	,code:	"522532"	,name:	"Interest Income - Standard Loans – Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"315"	,code:	"522542"	,name:	"Interest Income - Standard Loans – Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"316"	,code:	"523102"	,name:	"Interest Income - Substandard Loans - Groups<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"317"	,code:	"523202"	,name:	"Interest Income - Substandard Loans - Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"318"	,code:	"523302"	,name:	"Interest Income - Substandard Loans - Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"319"	,code:	"523402"	,name:	"Interest Income - Substandard Loans - Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"320"	,code:	"523512"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"321"	,code:	"523522"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"322"	,code:	"523532"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"323"	,code:	"523542"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"324"	,code:	"524102"	,name:	"Interest Income - Substandard Loans - Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"325"	,code:	"524202"	,name:	"Interest Income - Substandard Loans - Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"326"	,code:	"524302"	,name:	"Interest Income - Substandard Loans - Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"327"	,code:	"524402"	,name:	"Interest Income - Substandard Loans - Others>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"328"	,code:	"524512"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"329"	,code:	"524522"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"330"	,code:	"524532"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"331"	,code:	"524542"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"332"	,code:	"525102"	,name:	"Interest Income - Doubtful Loans - Groups<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"333"	,code:	"525202"	,name:	"Interest Income - Doubtful Loans - Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"334"	,code:	"525302"	,name:	"Interest Income - Doubtful Loans - Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"335"	,code:	"525402"	,name:	"Interest Income - Doubtful Loans - Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"336"	,code:	"525512"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"337"	,code:	"525522"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"338"	,code:	"525532"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"339"	,code:	"525542"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"340"	,code:	"526102"	,name:	"Interest Income - Doubtful Loans - Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"341"	,code:	"526202"	,name:	"Interest Income - Doubtful Loans - Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"342"	,code:	"526302"	,name:	"Interest Income - Doubtful Loans - Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"343"	,code:	"526402"	,name:	"Interest Income - Doubtful Loans - Others>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"344"	,code:	"526512"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"345"	,code:	"526522"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"346"	,code:	"526532"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"347"	,code:	"526542"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"348"	,code:	"527102"	,name:	"Interest Income - Loss Loans - Groups<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"349"	,code:	"527202"	,name:	"Interest Income - Loss Loans - Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"350"	,code:	"527302"	,name:	"Interest Income - Loss Loans - Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"351"	,code:	"527402"	,name:	"Interest Income - Loss Loans - Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"352"	,code:	"527512"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"353"	,code:	"527522"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"354"	,code:	"527532"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"355"	,code:	"527542"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"356"	,code:	"528102"	,name:	"Interest Income - Loss Loans - Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"357"	,code:	"528202"	,name:	"Interest Income - Loss Loans - Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"358"	,code:	"528302"	,name:	"Interest Income - Loss Loans - Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"359"	,code:	"528402"	,name:	"Interest Income - Loss Loans - Others>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"360"	,code:	"528512"	,name:	"Interest Income - Loss Loans - Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"361"	,code:	"528522"	,name:	"Interest Income - Loss Loans - Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"362"	,code:	"528532"	,name:	"Interest Income - Loss Loans - Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"363"	,code:	"528542"	,name:	"Interest Income - Loss Loans - Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"364"	,code:	"531102"	,name:	"Interest Income - Investment Securities - Hold to Maturity",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"365"	,code:	"532102"	,name:	"Interest Income - Investment Securities - Available for Sale",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"366"	,code:	"533102"	,name:	"Interest Income - Other Investment ",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"367"	,code:	"564102"	,name:	"Other Interest Income",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"368"	,code:	"571102"	,name:	"Fees and Commissions on loans",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"369"	,code:	"571202"	,name:	"Other Fees and Commissions ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"370"	,code:	"572102"	,name:	"Fee Income for Wire Transfer/Remittance",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"371"	,code:	"573102"	,name:	"Other Non-Interest Income",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"372"	,code:	"574102"	,name:	"Foreign Exchange Gains",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"373"	,code:	"574202"	,name:	"Gains (Loss) on Revaluation of Trading/Marketable Securities",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"374"	,code:	"574302"	,name:	"Security Gains on Investment ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"375"	,code:	"574402"	,name:	"Recovery on Loans Previously Charged – Off",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"376"	,code:	"574502"	,name:	"Gains on Sale/Disposal of Fixed Assets",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"377"	,code:	"585102"	,name:	"Insurance premiums on micro-insurance business",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"378"	,code:	"585202"	,name:	"Dividends Income ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"379"	,code:	"585302"	,name:	"Grants Income ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"380"	,code:	"600002"	,name:	"Total Expense Control Account",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"381"	,code:	"611102"	,name:	"Interest Expense - Amounts owed to NBC",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"382"	,code:	"612102"	,name:	"Interest Expense - Voluntary Deposits - Demand",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"383"	,code:	"612202"	,name:	"Interest Expense - Voluntary Deposits - Savings",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"384"	,code:	"612302"	,name:	"Interest Expense - Voluntary Deposits - Term",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"385"	,code:	"612402"	,name:	"Interest Expense - Voluntary Deposits - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"386"	,code:	"612902"	,name:	"Interest Expense - Compulsory Deposits",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"387"	,code:	"622302"	,name:	"Interest Expense - Subordinated Debt",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"388"	,code:	"623102"	,name:	"Interest Expense - Short-term Borrowed Funds – Shareholders ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"389"	,code:	"623202"	,name:	"Interest Expense - Short-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"390"	,code:	"623302"	,name:	"Interest Expense - Short-term Borrowed Funds - Banks",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"391"	,code:	"623402"	,name:	"Interest Expense - Short-term Borrowed Funds - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"392"	,code:	"624102"	,name:	"Interest Expense - Long-term Borrowed Funds – Shareholders ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"393"	,code:	"624202"	,name:	"Interest Expense - Long-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"394"	,code:	"624302"	,name:	"Interest Expense - Long-term Borrowed Funds - Banks",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"395"	,code:	"624402"	,name:	"Interest Expense - Long-term Borrowed Funds - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"396"	,code:	"629902"	,name:	"Interest Expense - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"397"	,code:	"631102"	,name:	"Salaries and Bonuses Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"398"	,code:	"631202"	,name:	"Employee Overtime Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"399"	,code:	"631302"	,name:	"Employee Training – Work Related Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"400"	,code:	"631402"	,name:	"Employee Medical Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"401"	,code:	"631802"	,name:	"Employee Pension Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"402"	,code:	"631902"	,name:	"Other Employee Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"403"	,code:	"642102"	,name:	"Depreciation Expense – Land Improvements",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"404"	,code:	"642202"	,name:	"Depreciation Expense – Building",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"405"	,code:	"642302"	,name:	"Depreciation Expense – Leasehold Improvement ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"406"	,code:	"642352"	,name:	"Depreciation Expenses - Furniture and Fixtures ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"407"	,code:	"642402"	,name:	"Depreciation Expenses - Equipment ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"408"	,code:	"642502"	,name:	"Depreciation Expenses – Computer Equipment ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"409"	,code:	"642602"	,name:	"Depreciation Expenses – Motor Vehicles ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"410"	,code:	"642702"	,name:	"Depreciation Expenses – Other Fixed Assets ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"411"	,code:	"643102"	,name:	"Amortization Expenses – Intangible Assets",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"412"	,code:	"643202"	,name:	"Amortization Expenses – Formation Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"413"	,code:	"653102"	,name:	"Repair and Maintenance Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"414"	,code:	"653202"	,name:	"Rental Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"415"	,code:	"653302"	,name:	"Utility Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"416"	,code:	"653402"	,name:	"Small items of furniture, fixtures and equipment not capitalized",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"417"	,code:	"654102"	,name:	"Marketing and Advertising Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"418"	,code:	"654202"	,name:	"Professional Services Expense ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"419"	,code:	"654302"	,name:	"Audit and Tax Fees Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"420"	,code:	"654402"	,name:	"License Fees Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"421"	,code:	"654502"	,name:	"Legal Fees Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"422"	,code:	"655102"	,name:	"Travel Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"423"	,code:	"655202"	,name:	"Business Meal and Entertainment Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"424"	,code:	"655302"	,name:	"Communication Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"425"	,code:	"657102"	,name:	"Stationery and Supplies Expenses ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"426"	,code:	"657202"	,name:	"Printing and Forms Expenses ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"427"	,code:	"658102"	,name:	"Fire and Hazard Insurance Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"428"	,code:	"658902"	,name:	"Other Insurance Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"429"	,code:	"661102"	,name:	"Security Expense ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"430"	,code:	"662102"	,name:	"Board of Directors' Fees",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"431"	,code:	"662202"	,name:	"Shareholders' Meeting Expense ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"432"	,code:	"663102"	,name:	"Charitable Donation Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"433"	,code:	"664102"	,name:	"Dues and Memberships Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"434"	,code:	"666102"	,name:	"Penalties and Fines Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"435"	,code:	"668102"	,name:	"Motor Vehicle Operating Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"436"	,code:	"669102"	,name:	"Income Tax Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"437"	,code:	"669902"	,name:	"Miscellaneous Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"438"	,code:	"671102"	,name:	"Bad and Doubtful Debts",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"439"	,code:	"671302"	,name:	"Off Balance Sheet Loss Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"440"	,code:	"671402"	,name:	"Doubtful and Loss of Securities",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"441"	,code:	"671502"	,name:	"Write off on uncollectable loans non covered by provisions",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"442"	,code:	"671602"	,name:	"Global and General Provision other than Loans",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"443"	,code:	"681102"	,name:	"Loss on Foreign Exchange ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"444"	,code:	"681402"	,name:	"Loss on Sale/Disposal of Security Investment Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"445"	,code:	"681602"	,name:	"Loss on Sale/Disposal of Assets ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"446"	,code:	"691102"	,name:	"Rebates/Commissions to Borrowing Groups",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"447"	,code:	"691202"	,name:	"Village Bank/Association costs",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"448"	,code:	"692102"	,name:	"Correspondent Bank Charges",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"449"	,code:	"692202"	,name:	"Fee and Commission on Borrowing",accountTypeId:	"50"	})



        //Dollar
        Acc.Collection.ChartAccount.insert({_id:	"450"	,code:	"100001"	,name:	"Total Assets Control Account",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"451"	,code:	"111101"	,name:	"Cash in Vault and on Hand ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"452"	,code:	"111201"	,name:	"Cash in Transit ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"453"	,code:	"111301"	,name:	"Cheques in Transit",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"454"	,code:	"114101"	,name:	"Due from NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"455"	,code:	"114201"	,name:	"Capital Guarantee Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"456"	,code:	"114301"	,name:	"Reserve Requirement with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"457"	,code:	"114401"	,name:	"Other Demand Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"458"	,code:	"114601"	,name:	"Other Term Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"459"	,code:	"115101"	,name:	"Current Accounts (Nostro) with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"460"	,code:	"115201"	,name:	"Current Accounts (Nostro) with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"461"	,code:	"115301"	,name:	"Current Accounts (Nostro) with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"462"	,code:	"116101"	,name:	"Demand and Savings Deposits with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"463"	,code:	"116201"	,name:	"Demand and Savings Deposits with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"464"	,code:	"116301"	,name:	"Demand and Savings Deposits with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"465"	,code:	"121101"	,name:	"Time Deposits and Placements with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"466"	,code:	"121201"	,name:	"Time Deposits and Placements with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"467"	,code:	"121301"	,name:	"Time Deposits and Placements with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"468"	,code:	"122101"	,name:	"Claims on Sovereigns rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"469"	,code:	"122201"	,name:	"Claims on Sovereigns rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"470"	,code:	"122301"	,name:	"Claims on Sovereigns rated BBB+ to BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"471"	,code:	"122401"	,name:	"Claims on Sovereigns rated below BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"472"	,code:	"131101"	,name:	"Standard Loans – Groups <=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"473"	,code:	"131201"	,name:	"Standard Loans – Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"474"	,code:	"131301"	,name:	"Standard Loans – Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"475"	,code:	"131401"	,name:	"Standard Loans – Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"476"	,code:	"131511"	,name:	"Standard Loans – Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"477"	,code:	"131521"	,name:	"Standard Loans – Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"478"	,code:	"131531"	,name:	"Standard Loans – Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"479"	,code:	"131541"	,name:	"Standard Loans – Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"480"	,code:	"132101"	,name:	"Standard Loans – Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"481"	,code:	"132201"	,name:	"Standard Loans – Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"482"	,code:	"132301"	,name:	"Standard Loans – Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"483"	,code:	"132401"	,name:	"Standard Loans – Others> 1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"484"	,code:	"132511"	,name:	"Standard Loans – Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"485"	,code:	"132521"	,name:	"Standard Loans – Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"486"	,code:	"132531"	,name:	"Standard Loans – Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"487"	,code:	"132541"	,name:	"Standard Loans – Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"488"	,code:	"141101"	,name:	"Substandard Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"489"	,code:	"141201"	,name:	"Substandard Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"490"	,code:	"141301"	,name:	"Substandard Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"491"	,code:	"141401"	,name:	"Substandard Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"492"	,code:	"141511"	,name:	"Substandard Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"493"	,code:	"141521"	,name:	"Substandard Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"494"	,code:	"141531"	,name:	"Substandard Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"495"	,code:	"141541"	,name:	"Substandard Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"496"	,code:	"142101"	,name:	"Substandard Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"497"	,code:	"142201"	,name:	"Substandard Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"498"	,code:	"142301"	,name:	"Substandard Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"499"	,code:	"142401"	,name:	"Substandard Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"500"	,code:	"142511"	,name:	"Substandard Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"501"	,code:	"142521"	,name:	"Substandard Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"502"	,code:	"142531"	,name:	"Substandard Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"503"	,code:	"142541"	,name:	"Substandard Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"504"	,code:	"151101"	,name:	"Doubtful Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"505"	,code:	"151201"	,name:	"Doubtful Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"506"	,code:	"151301"	,name:	"Doubtful Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"507"	,code:	"151401"	,name:	"Doubtful Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"508"	,code:	"151511"	,name:	"Doubtful Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"509"	,code:	"151521"	,name:	"Doubtful Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"510"	,code:	"151531"	,name:	"Doubtful Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"511"	,code:	"151541"	,name:	"Doubtful Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"512"	,code:	"152101"	,name:	"Doubtful Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"513"	,code:	"152201"	,name:	"Doubtful Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"514"	,code:	"152301"	,name:	"Doubtful Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"515"	,code:	"152401"	,name:	"Doubtful Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"516"	,code:	"152511"	,name:	"Doubtful Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"517"	,code:	"152521"	,name:	"Doubtful Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"518"	,code:	"152531"	,name:	"Doubtful Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"519"	,code:	"152541"	,name:	"Doubtful Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"520"	,code:	"161101"	,name:	"Loss Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"521"	,code:	"161201"	,name:	"Loss Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"522"	,code:	"161301"	,name:	"Loss Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"523"	,code:	"161401"	,name:	"Loss Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"524"	,code:	"161511"	,name:	"Loss Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"525"	,code:	"161521"	,name:	"Loss Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"526"	,code:	"161531"	,name:	"Loss Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"527"	,code:	"161541"	,name:	"Loss Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"528"	,code:	"162101"	,name:	"Loss Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"529"	,code:	"162201"	,name:	"Loss Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"530"	,code:	"162301"	,name:	"Loss Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"531"	,code:	"162401"	,name:	"Loss Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"532"	,code:	"162511"	,name:	"Loss Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"533"	,code:	"162521"	,name:	"Loss Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"534"	,code:	"162531"	,name:	"Loss Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"535"	,code:	"162541"	,name:	"Loss Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"536"	,code:	"171101"	,name:	"( Less) Reserve for Specific Loan Losses",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"537"	,code:	"171201"	,name:	"( Less) Reserve for General Loan Losses",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"538"	,code:	"211001"	,name:	"Investment Debt Securities - Hold to Maturity",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"539"	,code:	"211601"	,name:	"Accumulated Premium (Discount) – HTM",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"540"	,code:	"212001"	,name:	"Investment Debt Securities - Available for Sale",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"541"	,code:	"212601"	,name:	"Accumulated Premium (Discount) – AFS",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"542"	,code:	"213801"	,name:	"Other Investment Securities",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"543"	,code:	"214901"	,name:	"Investment in Equity Capital",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"544"	,code:	"215601"	,name:	"Net Unrealized Holding Gains (Loss) – AFS ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"545"	,code:	"221101"	,name:	"Prepaid Insurance",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"546"	,code:	"221201"	,name:	"Prepaid Deposit Insurance Assessment",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"547"	,code:	"221301"	,name:	"Prepaid Service / Maintenance Contracts",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"548"	,code:	"221401"	,name:	"Prepaid Professional Fees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"549"	,code:	"221501"	,name:	"Prepaid Rent",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"550"	,code:	"221601"	,name:	"Prepaid Profit Tax",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"551"	,code:	"221651"	,name:	"Prepaid - Other",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"552"	,code:	"222301"	,name:	"Advance Payment or Deposits",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"553"	,code:	"222401"	,name:	"Purchased Interest Receivable",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"554"	,code:	"222501"	,name:	"Stationary Supply and Inventory",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"555"	,code:	"231101"	,name:	"AIR – Due from NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"556"	,code:	"231201"	,name:	"AIR – Capital Guarantee Deposit  with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"557"	,code:	"231301"	,name:	"AIR – Other Demand Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"558"	,code:	"231601"	,name:	"AIR – Other Term Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"559"	,code:	"232101"	,name:	"AIR - Demand and Savings Deposits with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"560"	,code:	"232201"	,name:	"AIR - Demand and Savings Deposits with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"561"	,code:	"232301"	,name:	"AIR - Demand and Savings Deposits with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"562"	,code:	"233101"	,name:	"AIR - Time Deposits and Placements with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"563"	,code:	"233201"	,name:	"AIR - Time Deposits and Placements with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"564"	,code:	"233301"	,name:	"AIR - Time Deposits and Placements with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"565"	,code:	"234101"	,name:	"AIR - Claims on Sovereigns rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"566"	,code:	"234201"	,name:	"AIR - Claims on Sovereigns rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"567"	,code:	"234301"	,name:	"AIR - Claims on Sovereigns rated BBB+ to BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"568"	,code:	"234401"	,name:	"AIR - Claims on Sovereigns rated below BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"569"	,code:	"241001"	,name:	"AIR – Investment Debt Securities – Hold to Maturity ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"570"	,code:	"242001"	,name:	"AIR – Investment Debt Securities – Available For Sale",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"571"	,code:	"243001"	,name:	"AIR – Other Investment ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"572"	,code:	"251101"	,name:	"AIR - Standard Loans – Groups <=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"573"	,code:	"251201"	,name:	"AIR - Standard Loans – Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"574"	,code:	"251301"	,name:	"AIR - Standard Loans – Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"575"	,code:	"251401"	,name:	"AIR - Standard Loans – Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"576"	,code:	"251511"	,name:	"AIR - Standard Loans – Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"577"	,code:	"251521"	,name:	"AIR - Standard Loans – Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"578"	,code:	"251531"	,name:	"AIR - Standard Loans – Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"579"	,code:	"251541"	,name:	"AIR - Standard Loans – Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"580"	,code:	"252101"	,name:	"AIR - Standard Loans – Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"581"	,code:	"252201"	,name:	"AIR - Standard Loans – Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"582"	,code:	"252301"	,name:	"AIR - Standard Loans – Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"583"	,code:	"252401"	,name:	"AIR - Standard Loans – Others> 1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"584"	,code:	"252511"	,name:	"AIR - Standard Loans – Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"585"	,code:	"252521"	,name:	"AIR - Standard Loans – Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"586"	,code:	"252531"	,name:	"AIR - Standard Loans – Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"587"	,code:	"252541"	,name:	"AIR - Standard Loans – Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"588"	,code:	"261101"	,name:	"AIR - Substandard Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"589"	,code:	"261201"	,name:	"AIR - Substandard Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"590"	,code:	"261301"	,name:	"AIR - Substandard Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"591"	,code:	"261401"	,name:	"AIR - Substandard Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"592"	,code:	"261511"	,name:	"AIR - Substandard Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"593"	,code:	"261521"	,name:	"AIR - Substandard Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"594"	,code:	"261531"	,name:	"AIR - Substandard Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"595"	,code:	"261541"	,name:	"AIR - Substandard Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"596"	,code:	"262101"	,name:	"AIR - Substandard Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"597"	,code:	"262201"	,name:	"AIR - Substandard Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"598"	,code:	"262301"	,name:	"AIR - Substandard Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"599"	,code:	"262401"	,name:	"AIR - Substandard Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"600"	,code:	"262511"	,name:	"AIR - Substandard Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"601"	,code:	"262521"	,name:	"AIR - Substandard Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"602"	,code:	"262531"	,name:	"AIR - Substandard Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"603"	,code:	"262541"	,name:	"AIR - Substandard Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"604"	,code:	"271101"	,name:	"AIR - Doubtful Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"605"	,code:	"271201"	,name:	"AIR - Doubtful Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"606"	,code:	"271301"	,name:	"AIR - Doubtful Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"607"	,code:	"271401"	,name:	"AIR - Doubtful Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"608"	,code:	"271511"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"609"	,code:	"271521"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"610"	,code:	"271531"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"611"	,code:	"271541"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"612"	,code:	"272101"	,name:	"AIR - Doubtful Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"613"	,code:	"272201"	,name:	"AIR - Doubtful Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"614"	,code:	"272301"	,name:	"AIR - Doubtful Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"615"	,code:	"272401"	,name:	"AIR - Doubtful Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"616"	,code:	"272511"	,name:	"AIR - Doubtful Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"617"	,code:	"272521"	,name:	"AIR - Doubtful Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"618"	,code:	"272531"	,name:	"AIR - Doubtful Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"619"	,code:	"272541"	,name:	"AIR - Doubtful Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"620"	,code:	"281101"	,name:	"AIR - Loss Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"621"	,code:	"281201"	,name:	"AIR - Loss Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"622"	,code:	"281301"	,name:	"AIR - Loss Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"623"	,code:	"281401"	,name:	"AIR - Loss Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"624"	,code:	"281511"	,name:	"AIR - Loss Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"625"	,code:	"281521"	,name:	"AIR - Loss Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"626"	,code:	"281531"	,name:	"AIR - Loss Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"627"	,code:	"281541"	,name:	"AIR - Loss Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"628"	,code:	"282101"	,name:	"AIR - Loss Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"629"	,code:	"282201"	,name:	"AIR - Loss Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"630"	,code:	"282301"	,name:	"AIR - Loss Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"631"	,code:	"282401"	,name:	"AIR - Loss Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"632"	,code:	"282511"	,name:	"AIR - Loss Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"633"	,code:	"282521"	,name:	"AIR - Loss Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"634"	,code:	"282531"	,name:	"AIR - Loss Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"635"	,code:	"282541"	,name:	"AIR - Loss Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"636"	,code:	"289701"	,name:	"Accounts Receivable ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"637"	,code:	"289801"	,name:	"Income Tax Receivable/Recoverable",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"638"	,code:	"289901"	,name:	"Dividends Receivable",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"639"	,code:	"291101"	,name:	"Land ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"640"	,code:	"291201"	,name:	"Land Improvement",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"641"	,code:	"292101"	,name:	"Building ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"642"	,code:	"292201"	,name:	"Leasehold Improvement",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"643"	,code:	"292301"	,name:	"Fixed Assets Under Construction/Development",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"644"	,code:	"293101"	,name:	"Furniture and Fixtures",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"645"	,code:	"293201"	,name:	"Equipment",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"646"	,code:	"293301"	,name:	"Computer Equipment",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"647"	,code:	"293401"	,name:	"Motor Vehicles",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"648"	,code:	"293501"	,name:	"Other Fixed Assets",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"649"	,code:	"294101"	,name:	"Accumulated Depreciation – Land Improvements",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"650"	,code:	"294201"	,name:	"Accumulated Depreciation – Buildings ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"651"	,code:	"294301"	,name:	"Accumulated Depreciation – Leasehold Improvements ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"652"	,code:	"294401"	,name:	"Accumulated Depreciation – Furniture and Fixtures ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"653"	,code:	"294501"	,name:	"Accumulated Depreciation – Equipment ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"654"	,code:	"294601"	,name:	"Accumulated Depreciation – Computer Equipment ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"655"	,code:	"294701"	,name:	"Accumulated Depreciation – Motor Vehicles ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"656"	,code:	"294801"	,name:	"Accumulated Depreciation – Other Fixed Assets ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"657"	,code:	"294911"	,name:	"Amortization – Intangible Assets ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"658"	,code:	"294921"	,name:	"Amortization – Formation Expenses",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"659"	,code:	"295101"	,name:	"Formation Expenses",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"660"	,code:	"295201"	,name:	"Intangible Assets",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"661"	,code:	"296501"	,name:	"Inter-Branch Accounts",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"662"	,code:	"296601"	,name:	"Equivalence Foreign Exchange Position Account ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"663"	,code:	"296701"	,name:	"Suspense Asset Account ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"664"	,code:	"296801"	,name:	"Other Sundry Assets ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"665"	,code:	"300001"	,name:	"Total Liabilities Control Account",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"666"	,code:	"321101"	,name:	"Amounts owed to NBC",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"667"	,code:	"322101"	,name:	"Voluntary Deposits - Demand",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"668"	,code:	"322201"	,name:	"Voluntary Deposits - Savings",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"669"	,code:	"322301"	,name:	"Voluntary Deposits - Term",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"670"	,code:	"322401"	,name:	"Voluntary Deposits - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"671"	,code:	"322901"	,name:	"Compulsory Deposits",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"672"	,code:	"332201"	,name:	"Subordinated Debt",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"673"	,code:	"333101"	,name:	"Short-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"674"	,code:	"333201"	,name:	"Short-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"675"	,code:	"333301"	,name:	"Short-term Borrowed Funds -  Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"676"	,code:	"333401"	,name:	"Short-term Borrowed Funds - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"677"	,code:	"334101"	,name:	"Long-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"678"	,code:	"334201"	,name:	"Long-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"679"	,code:	"334301"	,name:	"Long-term Borrowed Funds -  Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"680"	,code:	"334401"	,name:	"Long-term Borrowed Funds - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"681"	,code:	"341101"	,name:	"AIP - Amounts owed to NBC",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"682"	,code:	"342101"	,name:	"AIP - Voluntary Deposits - Demand",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"683"	,code:	"342201"	,name:	"AIP - Voluntary Deposits - Savings",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"684"	,code:	"342301"	,name:	"AIP - Voluntary Deposits - Term",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"685"	,code:	"342401"	,name:	"AIP - Voluntary Deposits - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"686"	,code:	"342901"	,name:	"AIP - Compulsory Deposits",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"687"	,code:	"343301"	,name:	"AIP – Subordinated Debt",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"688"	,code:	"344101"	,name:	"AIP – Short-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"689"	,code:	"344201"	,name:	"AIP – Short-term Borrowed Funds – Corporations, Associations, Organizations  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"690"	,code:	"344301"	,name:	"AIP – Short-term Borrowed Funds – Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"691"	,code:	"344401"	,name:	"AIP – Short-term Borrowed Funds – Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"692"	,code:	"345101"	,name:	"AIP – Long-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"693"	,code:	"345201"	,name:	"AIP – Long-term Borrowed Funds – Corporations, Associations, Organizations  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"694"	,code:	"345301"	,name:	"AIP – Long-term Borrowed Funds – Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"695"	,code:	"345401"	,name:	"AIP – Long-term Borrowed Funds – Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"696"	,code:	"361101"	,name:	"Accrued Salary Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"697"	,code:	"361201"	,name:	"Accrued Bonus/Incentive Compensation Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"698"	,code:	"361301"	,name:	"Accrued and Withheld Payroll Taxes Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"699"	,code:	"361401"	,name:	"Other Payroll Deductions Withheld Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"700"	,code:	"361501"	,name:	"Accrued Employee Benefits Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"701"	,code:	"361601"	,name:	"Accrued Vacation Pay Payable  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"702"	,code:	"362101"	,name:	"Accrued Expenses and Provisions",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"703"	,code:	"363101"	,name:	"Accrued Taxes Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"704"	,code:	"372101"	,name:	"Unearned Income",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"705"	,code:	"373101"	,name:	"Deferred Income – Government and Public Grants",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"706"	,code:	"381101"	,name:	"Accounts Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"707"	,code:	"382101"	,name:	"Dividend Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"708"	,code:	"383101"	,name:	"Dividend Withholding Taxes",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"709"	,code:	"384101"	,name:	"Other Withholding Taxes",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"710"	,code:	"385101"	,name:	"Interest in Suspense",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"711"	,code:	"386101"	,name:	"Foreign Exchange Position Account  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"712"	,code:	"389101"	,name:	"Provision for Losses on Off Balance Sheet Accounts",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"713"	,code:	"389201"	,name:	"Global and General Provision for Losses ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"714"	,code:	"389301"	,name:	"Deferred Taxation",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"715"	,code:	"389801"	,name:	"Suspense and Sundry Liability Account",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"716"	,code:	"400001"	,name:	"Total Equity Control Account",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"717"	,code:	"401101"	,name:	"Paid Up Capital",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"718"	,code:	"401201"	,name:	"Premiums Related to Capital (Paid in Surplus)",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"719"	,code:	"401301"	,name:	"( Less) Unpaid Portion of Capital",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"720"	,code:	"401401"	,name:	"( Less) Treasury Stock",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"721"	,code:	"402101"	,name:	"Donated capital - Current year",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"722"	,code:	"402201"	,name:	"Donated capital - Previous years",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"723"	,code:	"404101"	,name:	"Hybrid Capital - Non-refundable public grants and subsidies",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"724"	,code:	"404201"	,name:	"Hybrid Capital - Public guarantee funds for credit risks",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"725"	,code:	"404301"	,name:	"Hybrid Capital - Perpetual subordinated debts",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"726"	,code:	"404401"	,name:	"Hybrid Capital - Others",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"727"	,code:	"405101"	,name:	"Revenue Reserves  ",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"728"	,code:	"405201"	,name:	"Capital Reserves  ",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"729"	,code:	"405301"	,name:	"Subordinated debt approved by NBC",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"730"	,code:	"405401"	,name:	"Revaluation reserves approved by NBC  ",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"731"	,code:	"405501"	,name:	"Other Reserves",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"732"	,code:	"407101"	,name:	"Retained Earnings",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"733"	,code:	"408101"	,name:	"Profit Current Year",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"734"	,code:	"500001"	,name:	"Total Income Control Account",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"735"	,code:	"514101"	,name:	"Interest Income – Due from NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"736"	,code:	"514201"	,name:	"Interest Income – Capital Guarantee Deposit  with NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"737"	,code:	"514301"	,name:	"Interest Income – Other Demand Deposit with NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"738"	,code:	"514601"	,name:	"Interest Income – Other Term Deposit with NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"739"	,code:	"515101"	,name:	"Interest Income - Demand and Savings Deposits with Banks rated AAA to AA-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"740"	,code:	"515201"	,name:	"Interest Income - Demand and Savings Deposits with Banks rated A+ to A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"741"	,code:	"515301"	,name:	"Interest Income - Demand and Savings Deposits with Banks rated below A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"742"	,code:	"516101"	,name:	"Interest Income - Time Deposits and Placements with Banks rated AAA to AA-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"743"	,code:	"516201"	,name:	"Interest Income - Time Deposits and Placements with Banks rated A+ to A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"744"	,code:	"516301"	,name:	"Interest Income - Time Deposits and Placements with Banks rated below A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"745"	,code:	"517101"	,name:	"Interest income - Claims on Sovereigns rated AAA to AA-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"746"	,code:	"517201"	,name:	"Interest Income - Claims on Sovereigns rated A+ to A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"747"	,code:	"517301"	,name:	"Interest Income - Claims on Sovereigns rated BBB+ to BBB-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"748"	,code:	"517401"	,name:	"Interest Income - Claims on Sovereigns rated below BBB-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"749"	,code:	"521101"	,name:	"Interest Income - Standard Loans – Groups <=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"750"	,code:	"521201"	,name:	"Interest Income - Standard Loans – Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"751"	,code:	"521301"	,name:	"Interest Income - Standard Loans – Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"752"	,code:	"521401"	,name:	"Interest Income - Standard Loans – Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"753"	,code:	"521511"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"754"	,code:	"521521"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"755"	,code:	"521531"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"756"	,code:	"521541"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"757"	,code:	"522101"	,name:	"Interest Income - Standard Loans – Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"758"	,code:	"522201"	,name:	"Interest Income - Standard Loans – Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"759"	,code:	"522301"	,name:	"Interest Income - Standard Loans – Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"760"	,code:	"522401"	,name:	"Interest Income - Standard Loans – Others> 1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"761"	,code:	"522511"	,name:	"Interest Income - Standard Loans – Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"762"	,code:	"522521"	,name:	"Interest Income - Standard Loans – Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"763"	,code:	"522531"	,name:	"Interest Income - Standard Loans – Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"764"	,code:	"522541"	,name:	"Interest Income - Standard Loans – Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"765"	,code:	"523101"	,name:	"Interest Income - Substandard Loans - Groups<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"766"	,code:	"523201"	,name:	"Interest Income - Substandard Loans - Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"767"	,code:	"523301"	,name:	"Interest Income - Substandard Loans - Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"768"	,code:	"523401"	,name:	"Interest Income - Substandard Loans - Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"769"	,code:	"523511"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"770"	,code:	"523521"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"771"	,code:	"523531"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"772"	,code:	"523541"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"773"	,code:	"524101"	,name:	"Interest Income - Substandard Loans - Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"774"	,code:	"524201"	,name:	"Interest Income - Substandard Loans - Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"775"	,code:	"524301"	,name:	"Interest Income - Substandard Loans - Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"776"	,code:	"524401"	,name:	"Interest Income - Substandard Loans - Others>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"777"	,code:	"524511"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"778"	,code:	"524521"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"779"	,code:	"524531"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"780"	,code:	"524541"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"781"	,code:	"525101"	,name:	"Interest Income - Doubtful Loans - Groups<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"782"	,code:	"525201"	,name:	"Interest Income - Doubtful Loans - Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"783"	,code:	"525301"	,name:	"Interest Income - Doubtful Loans - Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"784"	,code:	"525401"	,name:	"Interest Income - Doubtful Loans - Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"785"	,code:	"525511"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"786"	,code:	"525521"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"787"	,code:	"525531"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"788"	,code:	"525541"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"789"	,code:	"526101"	,name:	"Interest Income - Doubtful Loans - Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"790"	,code:	"526201"	,name:	"Interest Income - Doubtful Loans - Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"791"	,code:	"526301"	,name:	"Interest Income - Doubtful Loans - Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"792"	,code:	"526401"	,name:	"Interest Income - Doubtful Loans - Others>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"793"	,code:	"526511"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"794"	,code:	"526521"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"795"	,code:	"526531"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"796"	,code:	"526541"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"797"	,code:	"527101"	,name:	"Interest Income - Loss Loans - Groups<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"798"	,code:	"527201"	,name:	"Interest Income - Loss Loans - Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"799"	,code:	"527301"	,name:	"Interest Income - Loss Loans - Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"800"	,code:	"527401"	,name:	"Interest Income - Loss Loans - Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"801"	,code:	"527511"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"802"	,code:	"527521"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"803"	,code:	"527531"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"804"	,code:	"527541"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"805"	,code:	"528101"	,name:	"Interest Income - Loss Loans - Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"806"	,code:	"528201"	,name:	"Interest Income - Loss Loans - Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"807"	,code:	"528301"	,name:	"Interest Income - Loss Loans - Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"808"	,code:	"528401"	,name:	"Interest Income - Loss Loans - Others>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"809"	,code:	"528511"	,name:	"Interest Income - Loss Loans - Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"810"	,code:	"528521"	,name:	"Interest Income - Loss Loans - Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"811"	,code:	"528531"	,name:	"Interest Income - Loss Loans - Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"812"	,code:	"528541"	,name:	"Interest Income - Loss Loans - Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"813"	,code:	"531101"	,name:	"Interest Income - Investment Securities - Hold to Maturity",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"814"	,code:	"532101"	,name:	"Interest Income - Investment Securities - Available for Sale",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"815"	,code:	"533101"	,name:	"Interest Income - Other Investment ",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"816"	,code:	"564101"	,name:	"Other Interest Income",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"817"	,code:	"571101"	,name:	"Fees and Commissions on loans",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"818"	,code:	"571201"	,name:	"Other Fees and Commissions ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"819"	,code:	"572101"	,name:	"Fee Income for Wire Transfer/Remittance",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"820"	,code:	"573101"	,name:	"Other Non-Interest Income",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"821"	,code:	"574101"	,name:	"Foreign Exchange Gains",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"822"	,code:	"574201"	,name:	"Gains (Loss) on Revaluation of Trading/Marketable Securities",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"823"	,code:	"574301"	,name:	"Security Gains on Investment ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"824"	,code:	"574401"	,name:	"Recovery on Loans Previously Charged – Off",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"825"	,code:	"574501"	,name:	"Gains on Sale/Disposal of Fixed Assets",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"826"	,code:	"585101"	,name:	"Insurance premiums on micro-insurance business",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"827"	,code:	"585201"	,name:	"Dividends Income ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"828"	,code:	"585301"	,name:	"Grants Income ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"829"	,code:	"600001"	,name:	"Total Expense Control Account",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"830"	,code:	"611101"	,name:	"Interest Expense - Amounts owed to NBC",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"831"	,code:	"612101"	,name:	"Interest Expense - Voluntary Deposits - Demand",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"832"	,code:	"612201"	,name:	"Interest Expense - Voluntary Deposits - Savings",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"833"	,code:	"612301"	,name:	"Interest Expense - Voluntary Deposits - Term",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"834"	,code:	"612401"	,name:	"Interest Expense - Voluntary Deposits - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"835"	,code:	"612901"	,name:	"Interest Expense - Compulsory Deposits",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"836"	,code:	"622301"	,name:	"Interest Expense - Subordinated Debt",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"837"	,code:	"623101"	,name:	"Interest Expense - Short-term Borrowed Funds – Shareholders ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"838"	,code:	"623201"	,name:	"Interest Expense - Short-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"839"	,code:	"623301"	,name:	"Interest Expense - Short-term Borrowed Funds - Banks",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"840"	,code:	"623401"	,name:	"Interest Expense - Short-term Borrowed Funds - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"841"	,code:	"624101"	,name:	"Interest Expense - Long-term Borrowed Funds – Shareholders ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"842"	,code:	"624201"	,name:	"Interest Expense - Long-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"843"	,code:	"624301"	,name:	"Interest Expense - Long-term Borrowed Funds - Banks",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"844"	,code:	"624401"	,name:	"Interest Expense - Long-term Borrowed Funds - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"845"	,code:	"629901"	,name:	"Interest Expense - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"846"	,code:	"631101"	,name:	"Salaries and Bonuses Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"847"	,code:	"631201"	,name:	"Employee Overtime Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"848"	,code:	"631301"	,name:	"Employee Training – Work Related Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"849"	,code:	"631401"	,name:	"Employee Medical Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"850"	,code:	"631801"	,name:	"Employee Pension Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"851"	,code:	"631901"	,name:	"Other Employee Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"852"	,code:	"642101"	,name:	"Depreciation Expense – Land Improvements",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"853"	,code:	"642201"	,name:	"Depreciation Expense – Building",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"854"	,code:	"642301"	,name:	"Depreciation Expense – Leasehold Improvement ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"855"	,code:	"642351"	,name:	"Depreciation Expenses - Furniture and Fixtures ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"856"	,code:	"642401"	,name:	"Depreciation Expenses - Equipment ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"857"	,code:	"642501"	,name:	"Depreciation Expenses – Computer Equipment ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"858"	,code:	"642601"	,name:	"Depreciation Expenses – Motor Vehicles ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"859"	,code:	"642701"	,name:	"Depreciation Expenses – Other Fixed Assets ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"860"	,code:	"643101"	,name:	"Amortization Expenses – Intangible Assets",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"861"	,code:	"643201"	,name:	"Amortization Expenses – Formation Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"862"	,code:	"653101"	,name:	"Repair and Maintenance Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"863"	,code:	"653201"	,name:	"Rental Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"864"	,code:	"653301"	,name:	"Utility Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"865"	,code:	"653401"	,name:	"Small items of furniture, fixtures and equipment not capitalized",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"866"	,code:	"654101"	,name:	"Marketing and Advertising Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"867"	,code:	"654201"	,name:	"Professional Services Expense ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"868"	,code:	"654301"	,name:	"Audit and Tax Fees Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"869"	,code:	"654401"	,name:	"License Fees Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"870"	,code:	"654501"	,name:	"Legal Fees Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"871"	,code:	"655101"	,name:	"Travel Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"872"	,code:	"655201"	,name:	"Business Meal and Entertainment Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"873"	,code:	"655301"	,name:	"Communication Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"874"	,code:	"657101"	,name:	"Stationery and Supplies Expenses ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"875"	,code:	"657201"	,name:	"Printing and Forms Expenses ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"876"	,code:	"658101"	,name:	"Fire and Hazard Insurance Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"877"	,code:	"658901"	,name:	"Other Insurance Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"878"	,code:	"661101"	,name:	"Security Expense ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"879"	,code:	"662101"	,name:	"Board of Directors' Fees",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"880"	,code:	"662201"	,name:	"Shareholders' Meeting Expense ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"881"	,code:	"663101"	,name:	"Charitable Donation Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"882"	,code:	"664101"	,name:	"Dues and Memberships Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"883"	,code:	"666101"	,name:	"Penalties and Fines Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"884"	,code:	"668101"	,name:	"Motor Vehicle Operating Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"885"	,code:	"669101"	,name:	"Income Tax Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"886"	,code:	"669901"	,name:	"Miscellaneous Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"887"	,code:	"671101"	,name:	"Bad and Doubtful Debts",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"888"	,code:	"671301"	,name:	"Off Balance Sheet Loss Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"889"	,code:	"671401"	,name:	"Doubtful and Loss of Securities",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"890"	,code:	"671501"	,name:	"Write off on uncollectable loans non covered by provisions",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"891"	,code:	"671601"	,name:	"Global and General Provision other than Loans",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"892"	,code:	"681101"	,name:	"Loss on Foreign Exchange ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"893"	,code:	"681401"	,name:	"Loss on Sale/Disposal of Security Investment Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"894"	,code:	"681601"	,name:	"Loss on Sale/Disposal of Assets ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"895"	,code:	"691101"	,name:	"Rebates/Commissions to Borrowing Groups",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"896"	,code:	"691201"	,name:	"Village Bank/Association costs",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"897"	,code:	"692101"	,name:	"Correspondent Bank Charges",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"898"	,code:	"692201"	,name:	"Fee and Commission on Borrowing",accountTypeId:	"50"	})



            //    Bath
        Acc.Collection.ChartAccount.insert({_id:	"899"	,code:	"100005"	,name:	"Total Assets Control Account",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"900"	,code:	"111105"	,name:	"Cash in Vault and on Hand ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"901"	,code:	"111205"	,name:	"Cash in Transit ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"902"	,code:	"111305"	,name:	"Cheques in Transit",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"903"	,code:	"114105"	,name:	"Due from NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"904"	,code:	"114205"	,name:	"Capital Guarantee Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"905"	,code:	"114305"	,name:	"Reserve Requirement with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"906"	,code:	"114405"	,name:	"Other Demand Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"907"	,code:	"114605"	,name:	"Other Term Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"908"	,code:	"115105"	,name:	"Current Accounts (Nostro) with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"909"	,code:	"115205"	,name:	"Current Accounts (Nostro) with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"910"	,code:	"115305"	,name:	"Current Accounts (Nostro) with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"911"	,code:	"116105"	,name:	"Demand and Savings Deposits with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"912"	,code:	"116205"	,name:	"Demand and Savings Deposits with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"913"	,code:	"116305"	,name:	"Demand and Savings Deposits with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"914"	,code:	"121105"	,name:	"Time Deposits and Placements with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"915"	,code:	"121205"	,name:	"Time Deposits and Placements with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"916"	,code:	"121305"	,name:	"Time Deposits and Placements with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"917"	,code:	"122105"	,name:	"Claims on Sovereigns rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"918"	,code:	"122205"	,name:	"Claims on Sovereigns rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"919"	,code:	"122305"	,name:	"Claims on Sovereigns rated BBB+ to BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"920"	,code:	"122405"	,name:	"Claims on Sovereigns rated below BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"921"	,code:	"131105"	,name:	"Standard Loans – Groups <=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"922"	,code:	"131205"	,name:	"Standard Loans – Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"923"	,code:	"131305"	,name:	"Standard Loans – Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"924"	,code:	"131405"	,name:	"Standard Loans – Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"925"	,code:	"131515"	,name:	"Standard Loans – Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"926"	,code:	"131525"	,name:	"Standard Loans – Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"927"	,code:	"131535"	,name:	"Standard Loans – Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"928"	,code:	"131545"	,name:	"Standard Loans – Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"929"	,code:	"132105"	,name:	"Standard Loans – Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"930"	,code:	"132205"	,name:	"Standard Loans – Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"931"	,code:	"132305"	,name:	"Standard Loans – Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"932"	,code:	"132405"	,name:	"Standard Loans – Others> 1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"933"	,code:	"132515"	,name:	"Standard Loans – Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"934"	,code:	"132525"	,name:	"Standard Loans – Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"935"	,code:	"132535"	,name:	"Standard Loans – Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"936"	,code:	"132545"	,name:	"Standard Loans – Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"937"	,code:	"141105"	,name:	"Substandard Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"938"	,code:	"141205"	,name:	"Substandard Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"939"	,code:	"141305"	,name:	"Substandard Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"940"	,code:	"141405"	,name:	"Substandard Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"941"	,code:	"141515"	,name:	"Substandard Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"942"	,code:	"141525"	,name:	"Substandard Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"943"	,code:	"141535"	,name:	"Substandard Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"944"	,code:	"141545"	,name:	"Substandard Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"945"	,code:	"142105"	,name:	"Substandard Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"946"	,code:	"142205"	,name:	"Substandard Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"947"	,code:	"142305"	,name:	"Substandard Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"948"	,code:	"142405"	,name:	"Substandard Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"949"	,code:	"142515"	,name:	"Substandard Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"950"	,code:	"142525"	,name:	"Substandard Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"951"	,code:	"142535"	,name:	"Substandard Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"952"	,code:	"142545"	,name:	"Substandard Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"953"	,code:	"151105"	,name:	"Doubtful Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"954"	,code:	"151205"	,name:	"Doubtful Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"955"	,code:	"151305"	,name:	"Doubtful Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"956"	,code:	"151405"	,name:	"Doubtful Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"957"	,code:	"151515"	,name:	"Doubtful Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"958"	,code:	"151525"	,name:	"Doubtful Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"959"	,code:	"151535"	,name:	"Doubtful Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"960"	,code:	"151545"	,name:	"Doubtful Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"961"	,code:	"152105"	,name:	"Doubtful Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"962"	,code:	"152205"	,name:	"Doubtful Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"963"	,code:	"152305"	,name:	"Doubtful Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"964"	,code:	"152405"	,name:	"Doubtful Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"965"	,code:	"152515"	,name:	"Doubtful Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"966"	,code:	"152525"	,name:	"Doubtful Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"967"	,code:	"152535"	,name:	"Doubtful Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"968"	,code:	"152545"	,name:	"Doubtful Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"969"	,code:	"161105"	,name:	"Loss Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"970"	,code:	"161205"	,name:	"Loss Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"971"	,code:	"161305"	,name:	"Loss Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"972"	,code:	"161405"	,name:	"Loss Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"973"	,code:	"161515"	,name:	"Loss Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"974"	,code:	"161525"	,name:	"Loss Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"975"	,code:	"161535"	,name:	"Loss Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"976"	,code:	"161545"	,name:	"Loss Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"977"	,code:	"162105"	,name:	"Loss Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"978"	,code:	"162205"	,name:	"Loss Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"979"	,code:	"162305"	,name:	"Loss Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"980"	,code:	"162405"	,name:	"Loss Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"981"	,code:	"162515"	,name:	"Loss Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"982"	,code:	"162525"	,name:	"Loss Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"983"	,code:	"162535"	,name:	"Loss Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"984"	,code:	"162545"	,name:	"Loss Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"985"	,code:	"171105"	,name:	"( Less) Reserve for Specific Loan Losses",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"986"	,code:	"171205"	,name:	"( Less) Reserve for General Loan Losses",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"987"	,code:	"211005"	,name:	"Investment Debt Securities - Hold to Maturity",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"988"	,code:	"211605"	,name:	"Accumulated Premium (Discount) – HTM",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"989"	,code:	"212005"	,name:	"Investment Debt Securities - Available for Sale",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"990"	,code:	"212605"	,name:	"Accumulated Premium (Discount) – AFS",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"991"	,code:	"213805"	,name:	"Other Investment Securities",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"992"	,code:	"214905"	,name:	"Investment in Equity Capital",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"993"	,code:	"215605"	,name:	"Net Unrealized Holding Gains (Loss) – AFS ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"994"	,code:	"221105"	,name:	"Prepaid Insurance",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"995"	,code:	"221205"	,name:	"Prepaid Deposit Insurance Assessment",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"996"	,code:	"221305"	,name:	"Prepaid Service / Maintenance Contracts",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"997"	,code:	"221405"	,name:	"Prepaid Professional Fees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"998"	,code:	"221505"	,name:	"Prepaid Rent",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"999"	,code:	"221605"	,name:	"Prepaid Profit Tax",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1000"	,code:	"221655"	,name:	"Prepaid - Other",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1001"	,code:	"222305"	,name:	"Advance Payment or Deposits",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1002"	,code:	"222405"	,name:	"Purchased Interest Receivable",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1003"	,code:	"222505"	,name:	"Stationary Supply and Inventory",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1004"	,code:	"231105"	,name:	"AIR – Due from NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1005"	,code:	"231205"	,name:	"AIR – Capital Guarantee Deposit  with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1006"	,code:	"231305"	,name:	"AIR – Other Demand Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1007"	,code:	"231605"	,name:	"AIR – Other Term Deposit with NBC",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1008"	,code:	"232105"	,name:	"AIR - Demand and Savings Deposits with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1009"	,code:	"232205"	,name:	"AIR - Demand and Savings Deposits with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1010"	,code:	"232305"	,name:	"AIR - Demand and Savings Deposits with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1011"	,code:	"233105"	,name:	"AIR - Time Deposits and Placements with Banks rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1012"	,code:	"233205"	,name:	"AIR - Time Deposits and Placements with Banks rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1013"	,code:	"233305"	,name:	"AIR - Time Deposits and Placements with Banks rated below A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1014"	,code:	"234105"	,name:	"AIR - Claims on Sovereigns rated AAA to AA-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1015"	,code:	"234205"	,name:	"AIR - Claims on Sovereigns rated A+ to A-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1016"	,code:	"234305"	,name:	"AIR - Claims on Sovereigns rated BBB+ to BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1017"	,code:	"234405"	,name:	"AIR - Claims on Sovereigns rated below BBB-",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1018"	,code:	"241005"	,name:	"AIR – Investment Debt Securities – Hold to Maturity ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1019"	,code:	"242005"	,name:	"AIR – Investment Debt Securities – Available For Sale",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1020"	,code:	"243005"	,name:	"AIR – Other Investment ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1021"	,code:	"251105"	,name:	"AIR - Standard Loans – Groups <=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1022"	,code:	"251205"	,name:	"AIR - Standard Loans – Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1023"	,code:	"251305"	,name:	"AIR - Standard Loans – Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1024"	,code:	"251405"	,name:	"AIR - Standard Loans – Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1025"	,code:	"251515"	,name:	"AIR - Standard Loans – Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1026"	,code:	"251525"	,name:	"AIR - Standard Loans – Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1027"	,code:	"251535"	,name:	"AIR - Standard Loans – Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1028"	,code:	"251545"	,name:	"AIR - Standard Loans – Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1029"	,code:	"252105"	,name:	"AIR - Standard Loans – Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1030"	,code:	"252205"	,name:	"AIR - Standard Loans – Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1031"	,code:	"252305"	,name:	"AIR - Standard Loans – Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1032"	,code:	"252405"	,name:	"AIR - Standard Loans – Others> 1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1033"	,code:	"252515"	,name:	"AIR - Standard Loans – Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1034"	,code:	"252525"	,name:	"AIR - Standard Loans – Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1035"	,code:	"252535"	,name:	"AIR - Standard Loans – Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1036"	,code:	"252545"	,name:	"AIR - Standard Loans – Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1037"	,code:	"261105"	,name:	"AIR - Substandard Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1038"	,code:	"261205"	,name:	"AIR - Substandard Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1039"	,code:	"261305"	,name:	"AIR - Substandard Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1040"	,code:	"261405"	,name:	"AIR - Substandard Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1041"	,code:	"261515"	,name:	"AIR - Substandard Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1042"	,code:	"261525"	,name:	"AIR - Substandard Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1043"	,code:	"261535"	,name:	"AIR - Substandard Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1044"	,code:	"261545"	,name:	"AIR - Substandard Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1045"	,code:	"262105"	,name:	"AIR - Substandard Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1046"	,code:	"262205"	,name:	"AIR - Substandard Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1047"	,code:	"262305"	,name:	"AIR - Substandard Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1048"	,code:	"262405"	,name:	"AIR - Substandard Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1049"	,code:	"262515"	,name:	"AIR - Substandard Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1050"	,code:	"262525"	,name:	"AIR - Substandard Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1051"	,code:	"262535"	,name:	"AIR - Substandard Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1052"	,code:	"262545"	,name:	"AIR - Substandard Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1053"	,code:	"271105"	,name:	"AIR - Doubtful Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1054"	,code:	"271205"	,name:	"AIR - Doubtful Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1055"	,code:	"271305"	,name:	"AIR - Doubtful Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1056"	,code:	"271405"	,name:	"AIR - Doubtful Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1057"	,code:	"271515"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1058"	,code:	"271525"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1059"	,code:	"271535"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1060"	,code:	"271545"	,name:	"AIR - Doubtful Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1061"	,code:	"272105"	,name:	"AIR - Doubtful Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1062"	,code:	"272205"	,name:	"AIR - Doubtful Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1063"	,code:	"272305"	,name:	"AIR - Doubtful Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1064"	,code:	"272405"	,name:	"AIR - Doubtful Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1065"	,code:	"272515"	,name:	"AIR - Doubtful Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1066"	,code:	"272525"	,name:	"AIR - Doubtful Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1067"	,code:	"272535"	,name:	"AIR - Doubtful Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1068"	,code:	"272545"	,name:	"AIR - Doubtful Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1069"	,code:	"281105"	,name:	"AIR - Loss Loans - Groups<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1070"	,code:	"281205"	,name:	"AIR - Loss Loans - Individuals<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1071"	,code:	"281305"	,name:	"AIR - Loss Loans - Enterprises<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1072"	,code:	"281405"	,name:	"AIR - Loss Loans - Others<=1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1073"	,code:	"281515"	,name:	"AIR - Loss Loans - Related Party<=1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1074"	,code:	"281525"	,name:	"AIR - Loss Loans - Related Party<=1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1075"	,code:	"281535"	,name:	"AIR - Loss Loans - Related Party<=1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1076"	,code:	"281545"	,name:	"AIR - Loss Loans - Related Party<=1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1077"	,code:	"282105"	,name:	"AIR - Loss Loans - Groups>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1078"	,code:	"282205"	,name:	"AIR - Loss Loans - Individuals>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1079"	,code:	"282305"	,name:	"AIR - Loss Loans - Enterprises>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1080"	,code:	"282405"	,name:	"AIR - Loss Loans - Others>1 year",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1081"	,code:	"282515"	,name:	"AIR - Loss Loans - Related Party>1 year - Shareholders",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1082"	,code:	"282525"	,name:	"AIR - Loss Loans - Related Party>1 year - Managers",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1083"	,code:	"282535"	,name:	"AIR - Loss Loans - Related Party>1 year - Employees",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1084"	,code:	"282545"	,name:	"AIR - Loss Loans - Related Party>1 year - External Auditors",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1085"	,code:	"289705"	,name:	"Accounts Receivable ",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1086"	,code:	"289805"	,name:	"Income Tax Receivable/Recoverable",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1087"	,code:	"289905"	,name:	"Dividends Receivable",accountTypeId:	"10"	})
        Acc.Collection.ChartAccount.insert({_id:	"1088"	,code:	"291105"	,name:	"Land ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1089"	,code:	"291205"	,name:	"Land Improvement",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1090"	,code:	"292105"	,name:	"Building ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1091"	,code:	"292205"	,name:	"Leasehold Improvement",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1092"	,code:	"292305"	,name:	"Fixed Assets Under Construction/Development",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1093"	,code:	"293105"	,name:	"Furniture and Fixtures",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1094"	,code:	"293205"	,name:	"Equipment",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1095"	,code:	"293305"	,name:	"Computer Equipment",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1096"	,code:	"293405"	,name:	"Motor Vehicles",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1097"	,code:	"293505"	,name:	"Other Fixed Assets",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1098"	,code:	"294105"	,name:	"Accumulated Depreciation – Land Improvements",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1099"	,code:	"294205"	,name:	"Accumulated Depreciation – Buildings ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1100"	,code:	"294305"	,name:	"Accumulated Depreciation – Leasehold Improvements ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1101"	,code:	"294405"	,name:	"Accumulated Depreciation – Furniture and Fixtures ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1102"	,code:	"294505"	,name:	"Accumulated Depreciation – Equipment ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1103"	,code:	"294605"	,name:	"Accumulated Depreciation – Computer Equipment ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1104"	,code:	"294705"	,name:	"Accumulated Depreciation – Motor Vehicles ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1105"	,code:	"294805"	,name:	"Accumulated Depreciation – Other Fixed Assets ",accountTypeId:	"11"	})
        Acc.Collection.ChartAccount.insert({_id:	"1106"	,code:	"294915"	,name:	"Amortization – Intangible Assets ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"1107"	,code:	"294925"	,name:	"Amortization – Formation Expenses",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"1108"	,code:	"295105"	,name:	"Formation Expenses",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"1109"	,code:	"295205"	,name:	"Intangible Assets",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"1110"	,code:	"296505"	,name:	"Inter-Branch Accounts",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"1111"	,code:	"296605"	,name:	"Equivalence Foreign Exchange Position Account ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"1112"	,code:	"296705"	,name:	"Suspense Asset Account ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"1113"	,code:	"296805"	,name:	"Other Sundry Assets ",accountTypeId:	"12"	})
        Acc.Collection.ChartAccount.insert({_id:	"1114"	,code:	"300005"	,name:	"Total Liabilities Control Account",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1115"	,code:	"321105"	,name:	"Amounts owed to NBC",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1116"	,code:	"322105"	,name:	"Voluntary Deposits - Demand",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1117"	,code:	"322205"	,name:	"Voluntary Deposits - Savings",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1118"	,code:	"322305"	,name:	"Voluntary Deposits - Term",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1119"	,code:	"322405"	,name:	"Voluntary Deposits - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1120"	,code:	"322905"	,name:	"Compulsory Deposits",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1121"	,code:	"332205"	,name:	"Subordinated Debt",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1122"	,code:	"333105"	,name:	"Short-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1123"	,code:	"333205"	,name:	"Short-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1124"	,code:	"333305"	,name:	"Short-term Borrowed Funds -  Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1125"	,code:	"333405"	,name:	"Short-term Borrowed Funds - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1126"	,code:	"334105"	,name:	"Long-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1127"	,code:	"334205"	,name:	"Long-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1128"	,code:	"334305"	,name:	"Long-term Borrowed Funds -  Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1129"	,code:	"334405"	,name:	"Long-term Borrowed Funds - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1130"	,code:	"341105"	,name:	"AIP - Amounts owed to NBC",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1131"	,code:	"342105"	,name:	"AIP - Voluntary Deposits - Demand",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1132"	,code:	"342205"	,name:	"AIP - Voluntary Deposits - Savings",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1133"	,code:	"342305"	,name:	"AIP - Voluntary Deposits - Term",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1134"	,code:	"342405"	,name:	"AIP - Voluntary Deposits - Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1135"	,code:	"342905"	,name:	"AIP - Compulsory Deposits",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1136"	,code:	"343305"	,name:	"AIP – Subordinated Debt",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1137"	,code:	"344105"	,name:	"AIP – Short-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1138"	,code:	"344205"	,name:	"AIP – Short-term Borrowed Funds – Corporations, Associations, Organizations  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1139"	,code:	"344305"	,name:	"AIP – Short-term Borrowed Funds – Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1140"	,code:	"344405"	,name:	"AIP – Short-term Borrowed Funds – Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1141"	,code:	"345105"	,name:	"AIP – Long-term Borrowed Funds – Shareholders ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1142"	,code:	"345205"	,name:	"AIP – Long-term Borrowed Funds – Corporations, Associations, Organizations  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1143"	,code:	"345305"	,name:	"AIP – Long-term Borrowed Funds – Banks",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1144"	,code:	"345405"	,name:	"AIP – Long-term Borrowed Funds – Other",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1145"	,code:	"361105"	,name:	"Accrued Salary Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1146"	,code:	"361205"	,name:	"Accrued Bonus/Incentive Compensation Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1147"	,code:	"361305"	,name:	"Accrued and Withheld Payroll Taxes Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1148"	,code:	"361405"	,name:	"Other Payroll Deductions Withheld Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1149"	,code:	"361505"	,name:	"Accrued Employee Benefits Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1150"	,code:	"361605"	,name:	"Accrued Vacation Pay Payable  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1151"	,code:	"362105"	,name:	"Accrued Expenses and Provisions",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1152"	,code:	"363105"	,name:	"Accrued Taxes Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1153"	,code:	"372105"	,name:	"Unearned Income",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1154"	,code:	"373105"	,name:	"Deferred Income – Government and Public Grants",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1155"	,code:	"381105"	,name:	"Accounts Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1156"	,code:	"382105"	,name:	"Dividend Payable",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1157"	,code:	"383105"	,name:	"Dividend Withholding Taxes",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1158"	,code:	"384105"	,name:	"Other Withholding Taxes",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1159"	,code:	"385105"	,name:	"Interest in Suspense",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1160"	,code:	"386105"	,name:	"Foreign Exchange Position Account  ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1161"	,code:	"389105"	,name:	"Provision for Losses on Off Balance Sheet Accounts",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1162"	,code:	"389205"	,name:	"Global and General Provision for Losses ",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1163"	,code:	"389305"	,name:	"Deferred Taxation",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1164"	,code:	"389805"	,name:	"Suspense and Sundry Liability Account",accountTypeId:	"20"	})
        Acc.Collection.ChartAccount.insert({_id:	"1165"	,code:	"400005"	,name:	"Total Equity Control Account",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1166"	,code:	"401105"	,name:	"Paid Up Capital",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1167"	,code:	"401205"	,name:	"Premiums Related to Capital (Paid in Surplus)",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1168"	,code:	"401305"	,name:	"( Less) Unpaid Portion of Capital",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1169"	,code:	"401405"	,name:	"( Less) Treasury Stock",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1170"	,code:	"402105"	,name:	"Donated capital - Current year",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1171"	,code:	"402205"	,name:	"Donated capital - Previous years",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1172"	,code:	"404105"	,name:	"Hybrid Capital - Non-refundable public grants and subsidies",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1173"	,code:	"404205"	,name:	"Hybrid Capital - Public guarantee funds for credit risks",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1174"	,code:	"404305"	,name:	"Hybrid Capital - Perpetual subordinated debts",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1175"	,code:	"404405"	,name:	"Hybrid Capital - Others",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1176"	,code:	"405105"	,name:	"Revenue Reserves  ",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1177"	,code:	"405205"	,name:	"Capital Reserves  ",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1178"	,code:	"405305"	,name:	"Subordinated debt approved by NBC",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1179"	,code:	"405405"	,name:	"Revaluation reserves approved by NBC  ",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1180"	,code:	"405505"	,name:	"Other Reserves",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1181"	,code:	"407105"	,name:	"Retained Earnings",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1182"	,code:	"408105"	,name:	"Profit Current Year",accountTypeId:	"30"	})
        Acc.Collection.ChartAccount.insert({_id:	"1183"	,code:	"500005"	,name:	"Total Income Control Account",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1184"	,code:	"514105"	,name:	"Interest Income – Due from NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1185"	,code:	"514205"	,name:	"Interest Income – Capital Guarantee Deposit  with NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1186"	,code:	"514305"	,name:	"Interest Income – Other Demand Deposit with NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1187"	,code:	"514605"	,name:	"Interest Income – Other Term Deposit with NBC",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1188"	,code:	"515105"	,name:	"Interest Income - Demand and Savings Deposits with Banks rated AAA to AA-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1189"	,code:	"515205"	,name:	"Interest Income - Demand and Savings Deposits with Banks rated A+ to A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1190"	,code:	"515305"	,name:	"Interest Income - Demand and Savings Deposits with Banks rated below A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1191"	,code:	"516105"	,name:	"Interest Income - Time Deposits and Placements with Banks rated AAA to AA-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1192"	,code:	"516205"	,name:	"Interest Income - Time Deposits and Placements with Banks rated A+ to A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1193"	,code:	"516305"	,name:	"Interest Income - Time Deposits and Placements with Banks rated below A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1194"	,code:	"517105"	,name:	"Interest income - Claims on Sovereigns rated AAA to AA-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1195"	,code:	"517205"	,name:	"Interest Income - Claims on Sovereigns rated A+ to A-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1196"	,code:	"517305"	,name:	"Interest Income - Claims on Sovereigns rated BBB+ to BBB-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1197"	,code:	"517405"	,name:	"Interest Income - Claims on Sovereigns rated below BBB-",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1198"	,code:	"521105"	,name:	"Interest Income - Standard Loans – Groups <=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1199"	,code:	"521205"	,name:	"Interest Income - Standard Loans – Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1200"	,code:	"521305"	,name:	"Interest Income - Standard Loans – Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1201"	,code:	"521405"	,name:	"Interest Income - Standard Loans – Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1202"	,code:	"521515"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1203"	,code:	"521525"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1204"	,code:	"521535"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1205"	,code:	"521545"	,name:	"Interest Income - Standard Loans – Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1206"	,code:	"522105"	,name:	"Interest Income - Standard Loans – Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1207"	,code:	"522205"	,name:	"Interest Income - Standard Loans – Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1208"	,code:	"522305"	,name:	"Interest Income - Standard Loans – Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1209"	,code:	"522405"	,name:	"Interest Income - Standard Loans – Others> 1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1210"	,code:	"522515"	,name:	"Interest Income - Standard Loans – Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1211"	,code:	"522525"	,name:	"Interest Income - Standard Loans – Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1212"	,code:	"522535"	,name:	"Interest Income - Standard Loans – Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1213"	,code:	"522545"	,name:	"Interest Income - Standard Loans – Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1214"	,code:	"523105"	,name:	"Interest Income - Substandard Loans - Groups<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1215"	,code:	"523205"	,name:	"Interest Income - Substandard Loans - Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1216"	,code:	"523305"	,name:	"Interest Income - Substandard Loans - Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1217"	,code:	"523405"	,name:	"Interest Income - Substandard Loans - Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1218"	,code:	"523515"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1219"	,code:	"523525"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1220"	,code:	"523535"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1221"	,code:	"523545"	,name:	"Interest Income - Substandard Loans - Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1222"	,code:	"524105"	,name:	"Interest Income - Substandard Loans - Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1223"	,code:	"524205"	,name:	"Interest Income - Substandard Loans - Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1224"	,code:	"524305"	,name:	"Interest Income - Substandard Loans - Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1225"	,code:	"524405"	,name:	"Interest Income - Substandard Loans - Others>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1226"	,code:	"524515"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1227"	,code:	"524525"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1228"	,code:	"524535"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1229"	,code:	"524545"	,name:	"Interest Income - Substandard Loans - Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1230"	,code:	"525105"	,name:	"Interest Income - Doubtful Loans - Groups<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1231"	,code:	"525205"	,name:	"Interest Income - Doubtful Loans - Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1232"	,code:	"525305"	,name:	"Interest Income - Doubtful Loans - Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1233"	,code:	"525405"	,name:	"Interest Income - Doubtful Loans - Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1234"	,code:	"525515"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1235"	,code:	"525525"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1236"	,code:	"525535"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1237"	,code:	"525545"	,name:	"Interest Income - Doubtful Loans - Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1238"	,code:	"526105"	,name:	"Interest Income - Doubtful Loans - Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1239"	,code:	"526205"	,name:	"Interest Income - Doubtful Loans - Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1240"	,code:	"526305"	,name:	"Interest Income - Doubtful Loans - Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1241"	,code:	"526405"	,name:	"Interest Income - Doubtful Loans - Others>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1242"	,code:	"526515"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1243"	,code:	"526525"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1244"	,code:	"526535"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1245"	,code:	"526545"	,name:	"Interest Income - Doubtful Loans - Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1246"	,code:	"527105"	,name:	"Interest Income - Loss Loans - Groups<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1247"	,code:	"527205"	,name:	"Interest Income - Loss Loans - Individuals<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1248"	,code:	"527305"	,name:	"Interest Income - Loss Loans - Enterprises<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1249"	,code:	"527405"	,name:	"Interest Income - Loss Loans - Others<=1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1250"	,code:	"527515"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1251"	,code:	"527525"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1252"	,code:	"527535"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1253"	,code:	"527545"	,name:	"Interest Income - Loss Loans - Related Party<=1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1254"	,code:	"528105"	,name:	"Interest Income - Loss Loans - Groups>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1255"	,code:	"528205"	,name:	"Interest Income - Loss Loans - Individuals>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1256"	,code:	"528305"	,name:	"Interest Income - Loss Loans - Enterprises>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1257"	,code:	"528405"	,name:	"Interest Income - Loss Loans - Others>1 year",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1258"	,code:	"528515"	,name:	"Interest Income - Loss Loans - Related Party>1 year - Shareholders",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1259"	,code:	"528525"	,name:	"Interest Income - Loss Loans - Related Party>1 year - Managers",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1260"	,code:	"528535"	,name:	"Interest Income - Loss Loans - Related Party>1 year - Employees",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1261"	,code:	"528545"	,name:	"Interest Income - Loss Loans - Related Party>1 year - External Auditors",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1262"	,code:	"531105"	,name:	"Interest Income - Investment Securities - Hold to Maturity",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1263"	,code:	"532105"	,name:	"Interest Income - Investment Securities - Available for Sale",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1264"	,code:	"533105"	,name:	"Interest Income - Other Investment ",accountTypeId:	"40"	})
        Acc.Collection.ChartAccount.insert({_id:	"1265"	,code:	"564105"	,name:	"Other Interest Income",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1266"	,code:	"571105"	,name:	"Fees and Commissions on loans",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1267"	,code:	"571205"	,name:	"Other Fees and Commissions ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1268"	,code:	"572105"	,name:	"Fee Income for Wire Transfer/Remittance",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1269"	,code:	"573105"	,name:	"Other Non-Interest Income",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1270"	,code:	"574105"	,name:	"Foreign Exchange Gains",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1271"	,code:	"574205"	,name:	"Gains (Loss) on Revaluation of Trading/Marketable Securities",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1272"	,code:	"574305"	,name:	"Security Gains on Investment ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1273"	,code:	"574405"	,name:	"Recovery on Loans Previously Charged – Off",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1274"	,code:	"574505"	,name:	"Gains on Sale/Disposal of Fixed Assets",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1275"	,code:	"585105"	,name:	"Insurance premiums on micro-insurance business",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1276"	,code:	"585205"	,name:	"Dividends Income ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1277"	,code:	"585305"	,name:	"Grants Income ",accountTypeId:	"41"	})
        Acc.Collection.ChartAccount.insert({_id:	"1278"	,code:	"600005"	,name:	"Total Expense Control Account",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1279"	,code:	"611105"	,name:	"Interest Expense - Amounts owed to NBC",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1280"	,code:	"612105"	,name:	"Interest Expense - Voluntary Deposits - Demand",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1281"	,code:	"612205"	,name:	"Interest Expense - Voluntary Deposits - Savings",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1282"	,code:	"612305"	,name:	"Interest Expense - Voluntary Deposits - Term",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1283"	,code:	"612405"	,name:	"Interest Expense - Voluntary Deposits - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1284"	,code:	"612905"	,name:	"Interest Expense - Compulsory Deposits",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1285"	,code:	"622305"	,name:	"Interest Expense - Subordinated Debt",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1286"	,code:	"623105"	,name:	"Interest Expense - Short-term Borrowed Funds – Shareholders ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1287"	,code:	"623205"	,name:	"Interest Expense - Short-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1288"	,code:	"623305"	,name:	"Interest Expense - Short-term Borrowed Funds - Banks",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1289"	,code:	"623405"	,name:	"Interest Expense - Short-term Borrowed Funds - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1290"	,code:	"624105"	,name:	"Interest Expense - Long-term Borrowed Funds – Shareholders ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1291"	,code:	"624205"	,name:	"Interest Expense - Long-term Borrowed Funds – Corporations, Associations, Organizations",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1292"	,code:	"624305"	,name:	"Interest Expense - Long-term Borrowed Funds - Banks",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1293"	,code:	"624405"	,name:	"Interest Expense - Long-term Borrowed Funds - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1294"	,code:	"629905"	,name:	"Interest Expense - Other",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1295"	,code:	"631105"	,name:	"Salaries and Bonuses Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1296"	,code:	"631205"	,name:	"Employee Overtime Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1297"	,code:	"631305"	,name:	"Employee Training – Work Related Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1298"	,code:	"631405"	,name:	"Employee Medical Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1299"	,code:	"631805"	,name:	"Employee Pension Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1300"	,code:	"631905"	,name:	"Other Employee Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1301"	,code:	"642105"	,name:	"Depreciation Expense – Land Improvements",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1302"	,code:	"642205"	,name:	"Depreciation Expense – Building",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1303"	,code:	"642305"	,name:	"Depreciation Expense – Leasehold Improvement ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1304"	,code:	"642355"	,name:	"Depreciation Expenses - Furniture and Fixtures ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1305"	,code:	"642405"	,name:	"Depreciation Expenses - Equipment ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1306"	,code:	"642505"	,name:	"Depreciation Expenses – Computer Equipment ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1307"	,code:	"642605"	,name:	"Depreciation Expenses – Motor Vehicles ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1308"	,code:	"642705"	,name:	"Depreciation Expenses – Other Fixed Assets ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1309"	,code:	"643105"	,name:	"Amortization Expenses – Intangible Assets",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1310"	,code:	"643205"	,name:	"Amortization Expenses – Formation Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1311"	,code:	"653105"	,name:	"Repair and Maintenance Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1312"	,code:	"653205"	,name:	"Rental Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1313"	,code:	"653305"	,name:	"Utility Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1314"	,code:	"653405"	,name:	"Small items of furniture, fixtures and equipment not capitalized",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1315"	,code:	"654105"	,name:	"Marketing and Advertising Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1316"	,code:	"654205"	,name:	"Professional Services Expense ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1317"	,code:	"654305"	,name:	"Audit and Tax Fees Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1318"	,code:	"654405"	,name:	"License Fees Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1319"	,code:	"654505"	,name:	"Legal Fees Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1320"	,code:	"655105"	,name:	"Travel Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1321"	,code:	"655205"	,name:	"Business Meal and Entertainment Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1322"	,code:	"655305"	,name:	"Communication Expenses",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1323"	,code:	"657105"	,name:	"Stationery and Supplies Expenses ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1324"	,code:	"657205"	,name:	"Printing and Forms Expenses ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1325"	,code:	"658105"	,name:	"Fire and Hazard Insurance Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1326"	,code:	"658905"	,name:	"Other Insurance Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1327"	,code:	"661105"	,name:	"Security Expense ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1328"	,code:	"662105"	,name:	"Board of Directors' Fees",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1329"	,code:	"662205"	,name:	"Shareholders' Meeting Expense ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1330"	,code:	"663105"	,name:	"Charitable Donation Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1331"	,code:	"664105"	,name:	"Dues and Memberships Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1332"	,code:	"666105"	,name:	"Penalties and Fines Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1333"	,code:	"668105"	,name:	"Motor Vehicle Operating Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1334"	,code:	"669105"	,name:	"Income Tax Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1335"	,code:	"669905"	,name:	"Miscellaneous Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1336"	,code:	"671105"	,name:	"Bad and Doubtful Debts",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1337"	,code:	"671305"	,name:	"Off Balance Sheet Loss Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1338"	,code:	"671405"	,name:	"Doubtful and Loss of Securities",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1339"	,code:	"671505"	,name:	"Write off on uncollectable loans non covered by provisions",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1340"	,code:	"671605"	,name:	"Global and General Provision other than Loans",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1341"	,code:	"681105"	,name:	"Loss on Foreign Exchange ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1342"	,code:	"681405"	,name:	"Loss on Sale/Disposal of Security Investment Expense",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1343"	,code:	"681605"	,name:	"Loss on Sale/Disposal of Assets ",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1344"	,code:	"691105"	,name:	"Rebates/Commissions to Borrowing Groups",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1345"	,code:	"691205"	,name:	"Village Bank/Association costs",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1346"	,code:	"692105"	,name:	"Correspondent Bank Charges",accountTypeId:	"50"	})
        Acc.Collection.ChartAccount.insert({_id:	"1347"	,code:	"692205"	,name:	"Fee and Commission on Borrowing",accountTypeId:	"50"	})


    }
});