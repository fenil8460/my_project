<a name="apis-for-dialysis-form-for-staff"></a>
# Apis for dialysis form for staff

---

- [Apis for dialysis form for staff](#apis-for-dialysis-form-for-staff)
  - [Pre dialysis form](#pre-dialysis-form)
  - [Stock alert](#stock-alert)
  - [Get appointment id based on dialysing patient](#get-appointment-id-based-on-dialysing-patient)
  - [Post dialysis form](#post-dialysis-form)
  - [Show stocks related to branch](#show-stocks-related-to-branch)
  - [Show patient details](#show-patient-details)
  - [Show patient bill list](#show-patient-bill-list)

1. pre dislaysis form
2. Stock alert
3. Get appointment id based on dialysing patient
4. Post dialysis form
5. Show stocks of particular branch
6. Show patient details
7. Show patient bill list

<a name="pre-dialysis-form"></a>
## Pre dialysis form

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to store pre dialysis from</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/staff/pre_dialysis/form/{patient_id}
```
---

> ***Required body : Form body*** 

| Field | Type |
|------ | ---- |
| bp_systolic | number |
| bp_diasystolic | number |
| heart_rate | number |
| weight | number |
| spo2 | number |
| reused_dialyzer | number |
| dialyzer | string |
| reused_tubing | number |
| bp_high | number |
| bp_low | number |
| nausea | number |
| vomiting | number |
| short_breath | number |
| bleeding | number |
| edema | number |
| stomach_distend | number |
| diarrhea | number |
| other | string |
| machine_id | number |
| scheduled_emergency | string |
| access_av | string |
| remarks | string |
| site_condition | string |
| explain | string |
| private | string |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "pre dialysis form saved"
    }
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | integer |

---

> ***Response body : 404 , Not found***

```php
    {
    "message": "invalid patient id"
    }
```
---


> ***Response body : 403 , Forbidden***

```php
    {
        "message": "this patinet is already dialysing "
    }
```
---



<!-- --------------------------------------------------------------  -->

<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="stock-alert"></a>
## Stock alert 

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch stocks where are current not available while perform performing the pre dialysis process</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/show/stock/alert
```
---


> ***Response body : 200 , Success***

```php
    {
        "message": "some stocks are not availbale",
        "data": [
            "16g Needle",
            "Blood Tubing",
            .
            .
            .
        ]
    }
```
---


> ***Response body : 200 , Success***

```php
    {
        "message": "stocks are available",
    }
```
---


<!-- --------------------------------------------------------------  -->

<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="get-appointment-id-based-on-dialysing-patient"></a>
## Get appointment id based on dialysing patient

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch appointment id based on patient id who are currently dialysing </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/get/appointment_id/{patient_id?}
```
---

> ***Required body : Form body*** 

| Field | Type |
|------ | ---- |
| patient_id | number |

> ***Response body : 200 , Success***

```php
    {
        "message": "appoointment_fetched",
        "appointment_id": 1882
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid patient id"
    }
```
---


<!-- ----------------------------------------------------------------  -->



<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="post-dialysis-form"></a>
## Post dialysis form

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to store post dialysis from</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/staff/Post_dialysis/form/{appointment_id?}
```
---
> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|appointment_id | integer |

---

> ***Required body : json *** 

```php
    {
    "data":{
       "basic":{
            "bp_systolic":80,
            "bp_diasystolic":90,
            "heart_rate":99,
            "weight":9,
            "eh":3,
            "mode_of_transport":"walk",
            "bp_high":1,
            "bp_low":1,
            "nausea":1,
            "vomiting":0,
            "short_breath":1,
            "bleeding":1,
            "edema":1,
            "hypoglycemia":1,
            "diarrhea":0,
            "orthostatic_hypotension":1,
            "dizziness":1,
            "other":"Normal",
            "amount":34,
            "additional_amount":432,
            "remarks":" ",
            "early_discharge":0
        },
        "consumables":{
            "Heparin":{
                "brand":"Samarth",
                "count":3
            },
            "17g Needle":{
                "brand":"Browndove",
                "count":2
            }
        },
        "pharmaceuticals":{
            "Inj Dextrose 25% 100ml":{
                "brand":"Biotech",
                "count":2
            },
             "Inj Iron":{
                "brand":"Sucrowel",
                "count":1
            }
        },
        "others":{

        }
    }
    }
    
```

---

> ***Response body : 200 , Success***

```php
    {
    "message": "post dialysis form saved"
    }
```
---

> ***Response body : 400 , Bad request***

```php
    {
        "message": "appointment id is not valid"
    }
```
---
> ***Response body : 404 , Not found***

```php
    {
        "message": "No appointment found"
    }
```
---




<!--  ---------------------------------------------------------------------  -->




<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="show-stocks-related-to-branch"></a>
## Show stocks related to branch

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch stocks of paritcular branch while post dialysis process</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/show/stocks/
```
---


> ***Response body : 200 , Success***

```php
    {
        "message": "some stocks are not availbale",
        "data": [
            "16g Needle",
            "Blood Tubing",
            .
            .
            .
        ]
    }
```
---


> ***Response body : 200 , Success***

```php
    {
    "message": "available stock ",
    "consumable_stock_data": [
        {
            "product": "16g Needle",
            "brand": [
                {
                    "brand_name": "Browndove",
                    "total": "0"
                }
            ]
        },
        {
            "product": "17g Needle",
            "brand": [
                {
                    "brand_name": "Browndove",
                    "total": "3"
                }
            ]
        },
        .
        .
        .
    ]
    }
```
---





<!--  ---------------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="show-patient-details"></a>
## Show patient details

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient details</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/patient/details/{patient_id}
```
---

---
> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | integer |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "patient details fetched",
        "data": {
            "name": "Komal kashyap",
            "age": 28,
            "gender": "F",
            "phone_number": 0000006703,
            "address": "Sambhaji nagar ,dahisar east",
            "patient_id": "PIDPH28",
            "amount_due": 1100
        }
    }
```
---




<!--  ---------------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="show-patient-bill-list"></a>
## Show patient bill list

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient total bill with date , after that use patient bill api with this appointment id in to see bill total information</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/patient/bill/list/{patient_id}
```
---

---
> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | integer |

---

> ***Response body : 200 , Success***

```php
{
    "message": "bill list fetched",
    "data": [
        {
            "end_time": "2021-07-15 17:57:52",
            "appointment_id": 440
        },
        {
            "end_time": "2021-07-17 16:35:17",
            "appointment_id": 489
        },
        {
            "end_time": "2021-07-20 16:46:21",
            "appointment_id": 570
        }
    ]
}
```
---





