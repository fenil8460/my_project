<a name="patient-apis-for-admin"></a>
# Patient apis for admin

---

- [Patient apis for admin](#patient-apis-for-admin)
  - [Register patient](#register-patient)
  - [Block or unblock patient](#block-or-unblock-patient)
  - [Patient bill](#patient-bill)
  - [Get patient name and id](#get-patient-name-and-id)
  - [Update patient](#update-patient)
  - [View patient](#view-patient)
  - [Get patient name and id](#get-patient-name-and-id-1)

1. For registering patient .
2. For blocking or unblocking 
3. For patient's bill
4. Fetching patient's name and id
5. For updating patient
6. For fetching patient


<a name="register-patient"></a>
## Register patient
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to register new patient</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/admin/register/patient/
```
---

> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|name|string|
|phone_number|number|
|dob|date|
|email|string|
|age|number|
|gender|string|M/F/O
|address|string|
|doctor|number|
|dpw|number|
|awaiting_transplantation|number|
|blood_group|string|
|CKD_5D_HTN|string|
|hhh[]|string|HIV/Hepatitis B/Hepatitis c
|stability|number|0/1
|heart_function|string|
|injection|number|
|urea|number|
|creatinine|number|
|bun|number|
|ecg|number|
|bp_stable|number|0=no/1=yes/2=undefined
|habits[]|string| habits[0]=No Habits , Tobacco/Alcohol/Restricted Drugs
|diet|string|
|a|number|0/1
|v|number|0/1
|n|number|0/1
|s|number|0/1
|d|number|0/1
|access|string|
|covid|number|0/1
            
---
> ***Response body : 200 , Success***

```php
    {
    "message": "patient registered"
    }
```




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="block-or-unblock-patient"></a>
## Block or unblock patient
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to block or unblock patient</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/admin/block_unblock/patient/{patient_id}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | integer |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "successfully unblocked"
    }
```
---

> ***Response body : 200 , Success***

```php
    {
        "message": "successfully blocked"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "pateint not found"
    }
```
---








<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="patient-bill"></a>
## Patient bill
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's bill</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/patient/bill/{patient_id}
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
        "message": "success! , bill fatched",
        "bill_data": {
            "patinet_name": "Ramesh kumavat",
            "patient_id": "PIDSDC42",
            "opening_staff": "Nitin ",
            "closing_staff": "Rathod",
            "start_time": "2021-07-22 13:20:27",
            "end_time": "2021-07-22 18:23:12",
            "total_amount": 1100,
            "mode_of_payment": "Cashless Scheme",
            "paid": 1100,
            "amount_due": 1400
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
---






<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="get-patient-name-and-id"></a>
## Get patient name and id
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's name and id </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/get/patient/name_id
```

---

> ***Response body : 200 , Success***

```php
    {
    "message": "patients found",
    "data": [
        {
            "patient_id": 2,
            "name": "Mafatlal panchal"
        },
        {
            "patient_id": 3,
            "name": "Ratna vaigankar"
        },
        {
            "patient_id": 4,
            "name": "Dinesh achari"
        },
    ]
    }
```
---






<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="update-patient"></a>
## Update patient
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to update patient based on patient's id</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    api/admin/update/patient/{patient_id}
```
---

> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|name|string|
|phone_number|number|
|dob|date|
|email|string|
|age|number|
|gender|string|M/F/O
|address|string|
|doctor|number|
|dpw|number|
|awaiting_transplantation|number|
|blood_group|string|
|CKD_5D_HTN|string|
|hhh[]|string|HIV/Hepatitis B/Hepatitis c
|stability|number|0/1
|heart_function|string|
|injection|number|
|urea|number|
|creatinine|number|
|bun|number|
|ecg|number|
|bp_stable|number|0=no/1=yes/2=undefined
|habits[]|string| habits[0]=No Habits , Tobacco/Alcohol/Restricted Drugs
|diet|string|
|a|number|0/1
|v|number|0/1
|n|number|0/1
|s|number|0/1
|d|number|0/1
|access|string|
|covid|number|0/1
            
---

---

> ***Response body : 200 , Success***

```php
    {
        "message": "patient updated"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "pateint not found"
    }
```
---





<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="view-patient"></a>
## View patient
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch all patients as well as single patient. </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/view/patient/{pateint_id}
```


> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | integer |

---

> ***Response body : 200 , Success***

```php
{
    "message": "patient found",
    "data": {
        "patient_id": 45,
        "name": "Suvarna Khule ",
        "email": null,
        "dob": "0000-00-00",
        "age": 53,
        "gender": "F",
        "phone_number": 9867900501,
        "address": "Shivaji Nagar, Boriwali (west)",
        "branch_name": "SDC",
        "dpw": 3,
        "awaiting_transplantation": 0,
        "blood_group": "O+",
        "CKD_5D,HTN": "CKD",
        "stability": 1,
        "heart_function": "Normal",
        "injection": 0,
        "urea": 65,
        "creatinine": 6.5,
        "bun": 78,
        "ecg": 0,
        "hhh": "",
        "bp_stable": 1,
        "habits": "No Habits,",
        "diet": "Veg",
        "a": 0,
        "v": 0,
        "n": 0,
        "s": 0,
        "d": 0,
        "access": "Cannula",
        "covid": 0,
        "doctor": 2,
        "coin": 0,
        "knowing_source": "",
        "profile_link": "images/patient.png",
        "blocked": 0
    }
}
```
---
> ***Response body : 200 , Success***

```php
{
    "message": "fetched all patient",
    "data": [
        {
            "patient_id": 2,
            "name": "Mafatlal panchal",
            "email": null,
            "dob": "0000-00-00",
            "age": 65,
            "gender": "M",
            "phone_number": 8451904561,
            "address": "Siddharth nagar,borivli east",
            "branch_name": "SDC",
            "dpw": 2,
            "awaiting_transplantation": 1,
            "blood_group": "O+",
            "CKD_5D,HTN": "Htn",
            "stability": 1,
            "heart_function": "Normal",
            "injection": 1,
            "urea": 96,
            "creatinine": 4.6,
            "bun": 44.8,
            "ecg": 1,
            "hhh": "",
            "bp_stable": 1,
            "habits": "No Habits,",
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
            "knowing_source": "",
            "profile_link": "images/patient.png",
            "blocked": 0
        },
        {
            "patient_id": 3,
            "name": "Ratna vaigankar",
            "email": null,
            "dob": "0000-00-00",
            "age": 55,
            "gender": "M",
            "phone_number": 8070006135,
            "address": "Radhakrishna nagar,dahisar east",
            "branch_name": "SDC",
            "dpw": 2,
            "awaiting_transplantation": 1,
            "blood_group": "O+",
            "CKD_5D,HTN": "CKD 5",
            "stability": 1,
            "heart_function": "Normal",
            "injection": 1,
            "urea": 67.5,
            "creatinine": 7.9,
            "bun": 40.4,
            "ecg": 1,
            "hhh": "",
            "bp_stable": 1,
            "habits": "No Habits,",
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
            "knowing_source": "",
            "profile_link": "images/patient.png",
            "blocked": 0
        },
    ]
}
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "pateint not found"
    }
```




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="get-patient-name-and-id"></a>
## Get patient name and id
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's name and id </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/get/patient/name_and_id
```

---

> ***Response body : 200 , Success***

```php
    {
    "message": "patients found",
    "data": [
        {
            "patient_id": 2,
            "name": "Mafatlal panchal"
        },
        {
            "patient_id": 3,
            "name": "Ratna vaigankar"
        },
        {
            "patient_id": 4,
            "name": "Dinesh achari"
        },
    ]
    }
```
---









 