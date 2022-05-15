<a name="apis-for-staff-page"></a>
# Apis for staff page

---

- [Apis for staff page](#apis-for-staff-page)
  - [Fetch particular branch patient all details](#fetch-particular-branch-patient-all-details)
  - [Fetch particular branch patient name and id](#fetch-particular-branch-patient-name-and-id)
  - [Fetch current dialysing patient](#fetch-current-dialysing-patient)
  - [Available beds](#available-beds)
  - [Show branch name](#show-branch-name)
  - [Patient bill](#patient-bill)
  - [Fetch patient parameter](#fetch-patient-parameter)
  - [Enter patient parameter](#enter-patient-parameter)
  - [Bill payment](#bill-payment)
  - [Discount coupon](#discount-coupon)

1. Fetch particular branch patient all details
2. Fetch particular branch patient name and id
3. Fetch current dialysing patient
4. Available beds
5. Show branch name
6. Patient bill
7. Fetch patient parameters
8. Enter patient parameter
9. Bill payment

<a name="fetch-particular-branch-patient"></a>
## Fetch particular branch patient all details

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch particular branch's patient with all details</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/view/particular/branch/patient/
```
---


> ***Response body : 200 , Success***

```php
    {
    "message": "success, patients found with this branch (AH)",
    "data": [
        {
            "patient_id": 62,
            "name": "Malti singh",
            "email": null,
            "dob": "0000-00-00",
            "age": 63,
            "gender": "F",
            "phone_number": 0000006703,
            "address": "Satyketu apt kamothe new mumbai",
            "branch_name": "AH",
            "dpw": 3,
            "awaiting_transplantation": 0,
            "blood_group": "AB+",
            "CKD_5D,HTN": "Ckd 5D",
            "stability": 1,
            "heart_function": "Normal",
            "injection": 0,
            "urea": 51.5,
            "creatinine": 5.2,
            "bun": 27.3,
            "ecg": 0,
            "hhh": "",
            "bp_stable": 1,
            "habits": "No Habits,",
            "diet": "Non Veg",
            "a": 0,
            "v": 0,
            "n": 0,
            "s": 0,
            "d": 0,
            "access": "Fistula",
            "covid": 0,
            "doctor": 2,
            "coin": 0,
            "knowing_source": "",
            "profile_link": "images/patient.png",
            "blocked": 0
        },
        {
            "patient_id": 62,
            "name": "Malti singh",
            "email": null,
            "dob": "0000-00-00",
            "age": 63,
            "gender": "F",
            "phone_number": 0000006703,
            "address": "Satyketu apt kamothe new mumbai",
            "branch_name": "AH",
            "dpw": 3,
            "awaiting_transplantation": 0,
            "blood_group": "AB+",
            "CKD_5D,HTN": "Ckd 5D",
            "stability": 1,
            "heart_function": "Normal",
            "injection": 0,
            "urea": 51.5,
            "creatinine": 5.2,
            "bun": 27.3,
            "ecg": 0,
            "hhh": "",
            "bp_stable": 1,
            "habits": "No Habits,",
            "diet": "Non Veg",
            "a": 0,
            "v": 0,
            "n": 0,
            "s": 0,
            "d": 0,
            "access": "Fistula",
            "covid": 0,
            "doctor": 2,
            "coin": 0,
            "knowing_source": "",
            "profile_link": "images/patient.png",
            "blocked": 0
        }
    ]
    }
```
---








<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="fetch-particular-branch-patient-name-and-id"></a>
## Fetch particular branch patient name and id

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch particular branch's patient name and id</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/get/patient/name_and_id
```
---


> ***Response body : 200 , Success***

```php
    {
    "message": "fatched , patient name and id ",
    "data": [
        {
            "patient_id": 62,
            "name": "Malti singh"
        },
        {
            "patient_id": 162,
            "name": "pppppwerwerw"
        }
    ]
    }
```
---










<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="fetch-current-dialysing-patient"></a>
## Fetch current dialysing patient

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch current dialysing patient of particular branch </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/view/dialysing/patient
```
---


> ***Response body : 200 , Success***

```php
    {
    "success": "fetched dialysing patient",
    "data": [
        {
            "appointment_id": 1859,
            "patient_id": 80,
            "patient": {
                "name": "Varsha Raichura",
                "patient_id": 80
            }
        },
        {
            "appointment_id": 1858,
            "patient_id": 127,
            "patient": {
                "name": "Pratima jaiswal",
                "patient_id": 127
            }
        },
    ]
    }
```
---
> ***Response body : 200 , Success***

```php
    {
    "message": "no patient currently dialysing",
    }
```








<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="available-beds"></a>
## Available beds

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch current branch's available beds </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/view/available/beds
```
---


> ***Response body : 200 , Success***

```php
    {
    "message": "data fetched for beds count",
    "data": {
        "total_beds": 3,
        "curresntly_dialysing": 3,
        "availbale_beds": 0
    }
    }
```
---








<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="available-beds"></a>
## Show branch name

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch current centre's name</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/view/branch/name/
```
---


> ***Response body : 200 , Success***

```php
    {
        "message": "success , fetched branch name and code",
        "data": {
            "centre_name": "Pasaydan hospital",
            "code": "PH"
        }
    }
```
---



<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="patient-bill"></a>
## Patient bill

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient bill </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/patient/bill/{appointment_id}
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
        "message": "success! , bill fetched",
        "bill_data": {
            "patinet_name": "Komal vast",
            "patient_id": "PIDSDC28",
            "opening_staff": "Jaymala",
            "closing_staff": "Jaymala",
            "start_time": "2020-12-22 12:47:45",
            "end_time": "2020-12-22 16:26:18",
            "total_amount": 1100,
            "mode_of_payment": "Cashless Scheme",
            "paid": 1100,
            "amount_due": 1100,
            "stocks_used": [
                {
                    "name": "17g Needle",
                    "count": 1,
                    "selling_price": 0
                },
                {
                    "name": "Chemical M/C",
                    "count": 1,
                    "selling_price": 0
                },
                {
                    "name": "Chemical D&T",
                    "count": 1,
                    "selling_price": 0
                }
            ]
        }
    }
```
---
> ***Response body : 404 , Not found***

```php
    {
    "message": "invalid appointment id"
    }   
```



<!-- ------------------------------------------------ -->




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


<!-- ------------------------------------------------------- -->


<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="bill-payment"></a>
## Bill payment

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to pay patient bill </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /patient/bill/payment/{appointment_id}
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
        "coupon":"code",
        "pay":"1"
    }
```


> ***Response body : 200 , Success***

```php
    {
        "message": "payment_successful"
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

<a name="discount-coupon"></a>
## Discount coupon

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch coupon code  </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /patient/discount/coupon/{appointment_id}
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
        "coupon":"code",
    }
```


> ***Response body : 200 , Success***

```php
    {
        "message": "coupon code applicable",
        "code": "xyz",
        "amount": 5
    }
```
---
> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid coupon"
    }
```





