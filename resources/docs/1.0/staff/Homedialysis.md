<a name="apis-for-home-dialysis-in-staff"></a>
# Apis for Home dialysis 

---

1. API to search patient based on their name
2. pre dislaysis form
3. Get appointment id based on dialysing patient
4. Post dialysis form
5. Fetch patient parameters
6. Enter patient parameter



<a name="home-dialysis-patient-search"></a>
## Home dialysis Patient

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to search home dialysis`s patient based on their name.</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    api/staff/HDPatient_search
```
---

> ***Required body : Form body*** 

| Field | Type | value |
|------ | ---- | ---- |
| patient_name | varchar(255) | "paras","p" |



---

> ***Request data : JSON ***

```php
  {
   "patient_name":"rat"
 }
```

---

> ***Response body : 200 , Success***

```php
 {
    "data": [
        {
            "patient_id": 154,
            "name": "Rahul rathi",
            "email": "rahulrathi@gmail.com",
            "dob": "2021-09-02",
            "age": 0,
            "gender": "M",
            "phone_number": 0000006703,
            "address": "dryhyyt",
            "branch_name": "HD",
            "dpw": 1,
            "awaiting_transplantation": 1,
            "blood_group": "O+",
            "CKD_5D,HTN": "5",
            "stability": 1,
            "heart_function": "ESC",
            "injection": 1,
            "urea": 7,
            "creatinine": 6,
            "bun": 6,
            "ecg": 1,
            "hhh": "",
            "bp_stable": 1,
            "habits": "No Habits",
            "diet": "Veg",
            "a": 0,
            "v": 0,
            "n": 0,
            "s": 0,
            "d": 0,
            "access": "Fistula",
            "covid": 0,
            "doctor": 1,
            "coin": 0,
            "knowing_source": "OOOOOOoOOOOo",
            "profile_link": "images/patient.png",
            "blocked": 0,
            "id": 3,
            "dialysis_charge": 67,
            "per_hour_fee": 87,
            "monthly_rental": 76,
            "installation": 56,
            "additional_charge": 67,
            "add_charge_pmy": "56",
            "reason_add_charge": "",
            "dialyzer": 0,
            "blood_tubing": 0,
            "location": "Andheri",
            "expected_starting_date": "2021-10-03 17:15:19",
            "staff": 1,
            "machine": 1,
            "ro_serial": "zerergt"
        }
    ]
}

```

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





<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="fetch-patient-parameter"></a>
## Fetch patient parameter

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient parameters  </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /show/patient/parameter/{appointment_id}
```
---
> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|appointment_id | integer |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "patient parameter fetched",
        "data": [
            {
                "sr": 1,
                "id": 1,
                "appointment_id": 1,
                "time": "02:03:02",
                "bps": 0,
                "bpd": 0,
                "pulse": 0,
                "uf_rate": 0,
                "uf_volume": 0,
                "bf_rate": 0,
                "ap": 0,
                "vp": 0,
                "tmp": 0,
                "kv/t": 0,
                "actions": ""
            },
           .
           .
           .
            {
                "sr": 7,
                "id": 7,
                "appointment_id": 1,
                "time": "15:36:22",
                "bps": 23,
                "bpd": 23,
                "pulse": 23,
                "uf_rate": 23,
                "uf_volume": 23,
                "bf_rate": 23,
                "ap": 23,
                "vp": 23,
                "tmp": 23,
                "kv/t": 23,
                "actions": "23"
            }
        ]
    }
```
---
> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid appointment id"
    } 
```





<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="enter-patient-parameter"></a>
## Enter patient parameter

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>


---

<h4>This endpoint allows you to fetch enter patient parameters </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /enter/patient/parameter/{appointment_id}
```
---
> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|appointment_id | integer |

---

> ***Require body : Json data*** 

```php
{
   "data" : [
       {
            "bps":23,
            "bpd":23,
            "pulse":23,
            "uf_rate":23,
            "uf_volume":23,
            "bf_rate":23,
            "ap":23,
            "vp":23,
            "tmp":23,
            "kv/t":23,
            "actions":23
       },
       {
            "bps":23,
            "bpd":23,
            "pulse":23,
            "uf_rate":23,
            "uf_volume":23,
            "bf_rate":23,
            "ap":23,
            "vp":23,
            "tmp":23,
            "kv/t":23,
            "actions":23
       },
       {
            "bps":23,
            "bpd":23,
            "pulse":23,
            "uf_rate":23,
            "uf_volume":23,
            "bf_rate":23,
            "ap":23,
            "vp":23,
            "tmp":23,
            "kv/t":23,
            "actions":23
       },
       {
            "bps":23,
            "bpd":23,
            "pulse":23,
            "uf_rate":23,
            "uf_volume":23,
            "bf_rate":23,
            "ap":23,
            "vp":23,
            "tmp":23,
            "kv/t":23,
            "actions":23
       },
       {
            "bps":23,
            "bpd":23,
            "pulse":23,
            "uf_rate":23,
            "uf_volume":23,
            "bf_rate":23,
            "ap":23,
            "vp":23,
            "tmp":23,
            "kv/t":23,
            "actions":23
       },
       {
            "bps":23,
            "bpd":23,
            "pulse":23,
            "uf_rate":23,
            "uf_volume":23,
            "bf_rate":23,
            "ap":23,
            "vp":23,
            "tmp":23,
            "kv/t":23,
            "actions":23
       },
       {
            "bps":23,
            "bpd":23,
            "pulse":23,
            "uf_rate":23,
            "uf_volume":23,
            "bf_rate":23,
            "ap":23,
            "vp":23,
            "tmp":23,
            "kv/t":23,
            "actions":23
       }
    ]
}
```


> ***Response body : 200 , Success***

```php
    {
        "message": "patient parameter saved"
    }
```
---
> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid appointment id"
    } 
```


