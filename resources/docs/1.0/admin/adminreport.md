<a name="center-based-report-apis-for-super-admin"></a>
# Report apis for admin

---

- [Report apis for admin](#report-apis-for-admin)
- [Center based report](#center-based-report)
  - [For fetching hospital report](#for-fetching-hospital-report)
  - [For fetching stock maintenance report](#for-fetching-stock-maintenance-report)
  - [For fetching machine report.](#for-fetching-machine-report)
  - [For fetching sharing rates report](#for-fetching-sharing-rates-report)
  - [For fetching Closing stocks report](#for-fetching-closing-stocks-report)
- [Doctor reports](#doctor-reports)
  - [For fetching doctor report](#for-fetching-doctor-report)
- [Patient reports](#patient-reports)
  - [For fetching patient report](#for-fetching-patient-report)
  - [For fetching private patient report](#for-fetching-private-patient-report)
  - [For fetching mjpjay patient report](#for-fetching-mjpjay-patient-report)


1. Center based apis <br>
   1.1  For fetching hospital report.<br>
   1.2  For fetching stock maintenance report.<br>
   1.3  For fetching machine report.<br>
   1.4  For fetching sharing rates report.<br>
   1.5  For fetching closing stocks report.<br>

2. Doctor reports <br>
   2.1  For fetching doctor report <br>  

3. Patient reports <br>
   2.1  For patient doctor report <br>  

---
---
---

<a name="center-based-report"></a>
# Center based report

<a name="for-fetching-hospital-report"></a>
## For fetching hospital report
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch hospital report</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/get/hospital/report/
```
---

> ***Required body : Json data*** 

```php
    {
        "date":"2020-12",
        "branch_code":"SDC"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "hospital report fetched",
        "data": {
            "hospital_name": "Shivam Dialysis Center",
            "hospital_code": "SDC",
            "dialysis_count": 74,
            "additonal_expenses": [],
            "amount": 1070.67,
            "total_amount": 1070.67
        }
    }
```



<a name="for-fetching-stock-maintenance-report"></a>
## For fetching stock maintenance report
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch stock maintenance report . This tell that how many stocks have been used by hospitals </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/get/stock_maintenance/report/
```
---

> ***Required body : Json data*** 

```php
    {
        "date":"2021-03"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "stock_maintainence report fetched",
        "data": [
            {
                "patient_name": "Jyoti mahadik",
                "hospital_name": "Mangalmurti Hospital",
                "scheme": "private",
                "date": "2021-03-05 08:25:06",
                "stocks": {
                    "16g Needle": {
                        "count": 1,
                        "cost_price": 32
                    },
                    "17g Needle": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "1sfsfsdf": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "A/B part": {
                        "count": 1,
                        "cost_price": 103
                    },
                    "Bed Sheet": {
                        "count": 1,
                        "cost_price": 7
                    },
                    "Blood Tubing": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "Chemical D&T": {
                        "count": 1,
                        "cost_price": 15
                    },
                    "Chemical M/C": {
                        "count": 1,
                        "cost_price": 8
                    },
                    "Dialyzer": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "EPO 10K": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "EPO 4K": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "Gloves": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "Heparin": {
                        "count": 2,
                        "cost_price": 45
                    },
                    "Inj Amino Acid": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "Inj Antibiotics": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "Inj Dextrose 25% 100ml": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "Inj Iron": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "Inj Multi Vit": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "IV Set": {
                        "count": 1,
                        "cost_price": 7
                    },
                    "NS1000 ML": {
                        "count": 1,
                        "cost_price": 31
                    },
                    "NS500 ML": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "On/Off Kit": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "Syringe 10 ML": {
                        "count": 1,
                        "cost_price": 6
                    },
                    "Syringe 5 ML": {
                        "count": 0,
                        "cost_price": 0
                    },
                    "Transducer protector": {
                        "count": 0,
                        "cost_price": 0
                    }
                },
                "total": 299
            },
            {
            "average": 3750,
            "sub_total": 929902
            }
        ]
    }
```



<a name="for-fetching-machine-report"></a>
## For fetching machine report.
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch machine report</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/get/machine/report/
```
---

> ***Required body : Json data*** 

```php
    {
        "date":"2021-03"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "machine_record_fetched",
        "data": [
            {
                "provider": "",
                "no_of_machines": 9,
                "no_of_dialysis": 0,
                "total_dialysis": 0,
                "total_emi": 22000
            },
            {
                "provider": "abc",
                "no_of_machines": 1,
                "no_of_dialysis": 0,
                "total_dialysis": 0,
                "total_emi": 19520
            }
        ]
    }
```



<a name="for-fetching-sharing-rates-report"></a>
## For fetching sharing rates report
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch report rates of the stocks</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/get/sharing_rates/report/
```
---

> ***Required body : Json data*** 

```php
    {
        "date":"2021-11",
        "branch_code":"ph"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "sharing_rates_report data fetched",
        "data": [
            {
                "date": "2021-11-17",
                "product_name": "16g Needle",
                "brand": "sd asdf",
                "hospital_name": null,
                "price_per_item": 129,
                "no_of_items": 19,
                "gst": 0,
                "calculated_cost": 0,
                "total": 0
            },
            {
                "date": "2021-11-17",
                "product_name": "17g Needle",
                "brand": "Browndove",
                "hospital_name": null,
                "price_per_item": 129,
                "no_of_items": 9,
                "gst": 0,
                "calculated_cost": 0,
                "total": 0
            }
            {
                "sub_total": 0,
                "average": 0
            }
        ]
    }
```




<a name="for-fetching-closing-stocks-report"></a>
## For fetching Closing stocks report
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch closing stocks report</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/get/closing_stocks/report
```
---

<!-- > ***Required body : Json data*** 

```php
    {
        "date":"2021-11",
        "branch_code":"ph"
    }
``` -->
---
> ***Response body : 200 , Success***

```php
    {
        "message": "closing stocks report fetched",
        "data": [
            {
                "data": "2021-07-12 00:47:17",
                "stock_name": "Inj Multi Vit",
                "brand": "Optineuron forte",
                "hospital_name": "Mangalmurti Hospital",
                "existing_stock_cost": 11,
                "new_stock_cost": 11,
                "total_stock_cost": 22,
                "existing_stock_count": 0,
                "new_stock_count": 81,
                "total_stock_count": 81
            },
            {
                "data": "2021-07-15 03:17:16",
                "stock_name": "Bed Sheet",
                "brand": "Star Enterprises",
                "hospital_name": "Radhika Hospital",
                "existing_stock_cost": 7.5,
                "new_stock_cost": 7.5,
                "total_stock_cost": 15,
                "existing_stock_count": 4,
                "new_stock_count": 1,
                "total_stock_count": 5
            },
        ]
    }
```



<a name="doctor-reports"></a>
# Doctor reports

<a name="for-fetching-doctor-report"></a>
## For fetching doctor report
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch doctor report</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/get/doctor/report
```
---

> ***Required body : Json data*** 

```php
    {
        "date":"2022-01"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "doctor report fetched",
        "data": [
        {
            "hospital": "MMH,SDC,RH",
            "doctor_name": "rahul kr",
            "no_of_patient": 85,
            "no_of_dialysis": 2,
            "new_patient": 1,
            "no_of_emergency_patient": 0,
            "no_of_scheduled_patient": 1,
            "new_patient_cost": 150,
            "emergency_patient_cost": 0,
            "scheduled_patient_cost": 100,
            "doctor_pay": 250
        },
        {
            "hospital": "MMH,PH,RH,OH",
            "doctor_name": "Dr Sandip Bhurke",
            "no_of_patient": 29,
            "no_of_dialysis": 0,
            "new_patient": 1,
            "no_of_emergency_patient": 0,
            "no_of_scheduled_patient": 1,
            "new_patient_cost": 0,
            "emergency_patient_cost": 0,
            "scheduled_patient_cost": 0,
            "doctor_pay": 0
        }
    ]
```



 


<a name="patient-reports"></a>
# Patient reports

<a name="for-fetching-patient-report"></a>
## For fetching patient report
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient report</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/get/patient/report
```
---

> ***Required body : Json data*** 

```php
    {
        "date":"2022-01"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "patient_report_fetched",
        "data": [
            {
                "date": "01-01-1970",
                "hospital_name": "Mangalmurti Hospital",
                "scheme": "Private",
                "extra_hour_fee": 0,
                "patient_name": "Jyoti mahadik",
                "patient_id": "PIDMMH20",
                "start_time": "08:18 AM",
                "start_technician": "Nishita Hindalekar",
                "end_time": "11:36 AM",
                "end_technician": "Nishita Hindalekar",
                "registration_fee": 0,
                "record_type": "pre_dialysis",
                "dialyzer_brand": 0,
                "dialyzer_count": 0,
                "blood_tubing_brand": 0,
                "blood_tubing_count": 0,
                "dialyzer_and_blood_tubing_sp": 0,
                "consumables_and_pharmaceuticals_sp": 0,
                "therapy_fee": 1200,
                "mop": "Cash",
                "paid": 1400,
                "total": 1400
            },
            {
                "date": "01-01-1970",
                "hospital_name": "Mangalmurti Hospital",
                "scheme": "Private",
                "extra_hour_fee": 0,
                "patient_name": "Jyoti mahadik",
                "patient_id": "PIDMMH20",
                "start_time": "08:18 AM",
                "start_technician": "Nishita Hindalekar",
                "end_time": "11:36 AM",
                "end_technician": "Nishita Hindalekar",
                "registration_fee": 0,
                "record_type": "pre_dialysis",
                "dialyzer_brand": 0,
                "dialyzer_count": 0,
                "blood_tubing_brand": 0,
                "blood_tubing_count": 0,
                "dialyzer_and_blood_tubing_sp": 0,
                "consumables_and_pharmaceuticals_sp": 0,
                "therapy_fee": 1200,
                "mop": "Cash",
                "paid": 1400,
                "total": 1400
            }
        }
    ]
```



 
<a name="for-fetching-private-patient-report"></a>
## For fetching private patient report
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch private patient report</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/get/private_patient/report
```
---

> ***Required body : Json data*** 

```php
    {
        "date":"2022-01"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "private_patient_report_fetched",
        "date": [
            {
                "aid": 1452,
                "patient_name": "Devendra Gupta ",
                "hospital_name": "Radhika Hospital",
                "no_of_dialysis": 1,
                "cost_of_dialysis": "1200",
                "earning_from_therapy": 1019.78,
                "tubing_earning": -10,
                "dialyzer_earning": 0,
                "earning_from_pharma": 0,
                "total_earning": 1009.78
            },
            {
                "aid": 1859,
                "patient_name": "Varsha Raichura",
                "hospital_name": "Pasaydan hospital",
                "no_of_dialysis": 1,
                "cost_of_dialysis": "4200",
                "earning_from_therapy": 1135.0159999999996,
                "tubing_earning": 0,
                "dialyzer_earning": 0,
                "earning_from_pharma": 80.7,
                "total_earning": 1215.7159999999997
            }
        ]
    }
```



 


 
<a name="for-fetching-private-patient-report"></a>
## For fetching mjpjay patient report
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch mjpjay patient report</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/get/mjpjay_patient/report
```
---

> ***Required body : Json data*** 

```php
    {
        "date":"2022-01"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "mjpjay_pateint_report_fetched",
        "data": [
            {
                "patient_name": "Suresh  rathod",
                "hospital_name": "Orange Hospital",
                "no_of_dialysis": 6,
                "cost_of_dialysis": 6600,
                "no_of_dialyzer_used": 1,
                "cost_of_dialyzer_used": 499,
                "no_of_blood_tubing_used": 1,
                "cost_of_blood_tubing_used": 134,
                "no_of_epo4k_used": 0,
                "cost_of_epo4k_used": 0,
                "no_of_epo10k_used": 0,
                "cost_of_epo10k_used": 0,
                "total": 5967
            },
            {
                "patient_name": "Mafatlal panchal",
                "hospital_name": "Shivam Dialysis Center",
                "no_of_dialysis": 5,
                "cost_of_dialysis": 5500,
                "no_of_dialyzer_used": 1,
                "cost_of_dialyzer_used": 499,
                "no_of_blood_tubing_used": 1,
                "cost_of_blood_tubing_used": 134,
                "no_of_epo4k_used": 0,
                "cost_of_epo4k_used": 0,
                "no_of_epo10k_used": 0,
                "cost_of_epo10k_used": 0,
                "total": 4867
            }
        ]
    }
```



 