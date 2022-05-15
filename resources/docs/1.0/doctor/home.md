<a name="dashboard-apis-for-doctor-portal"></a>
# Dashboard apis for doctor portal

---

- [Dashboard apis for doctor portal](#dashboard-apis-for-doctor-portal)
  - [For fetching branch](#for-fetching-branch)
  - [For fetching patient name and id](#for-fetching-patient-name-and-id)
  - [For fetching patient details](#for-fetching-patient-details)
  - [Fetch Total patient](#fetch-total-patient)
  - [Fetch total hospital](#fetch-total-hospital)
  - [Fetch dialysis count](#fetch-dialysis-count)
  - [Fetch all dialysis](#fetch-all-dialysis)
  - [Fetch doctor amount](#fetch-doctor-amount)

 

1. For fetching branch .
2. For fetching patient name and id
3. For fetching patient details
4. Fetching total patient
5. Fetch total hospitals count
6. fetch dialysis count
7. View all dialysis
8. Fetch doctor amount

---

<!-- --------------------------------------------  -->

<a name="for-fetching-branch"></a>
## For fetching branch

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch branch related to doctors</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/doctor/view/branch/
```
---


> ***Response body : 200 , Success***

```php
    {
        "message": "hospital fetched",
        "data": [
            {
                "code": "MMH",
                "centre_name": "Mangalmurti Hospital"
            },
            {
                "code": "SDC",
                "centre_name": "Shivam Dialysis Center"
            },
        ]
    }
```
---




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>



<a name="for-fetching-patient-name-and-id"></a>
## For fetching patient name and id
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's name and id , if branch code is provided in the url then patients which are related to that branch will be fetched otherwise all .</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/view/patient/name_and_id/{branch_code?}
```
---
> ***Url parameter : Optional*** 

| Field | Type |
|------ | ---- |
|branch_code | string |

---
> ***Response body : 200 , Success***

```php
    {
        "message": "fatched , patient name and id ",
        "data": [
            {
                "patient_id": 20,
                "name": "Jyoti mahadik"
            }
        ]
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid branch code"
    }
```
---






<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-fetching-patient-details"></a>
## For fetching patient details
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient details based on patient id . </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/doctor/view/patient/details/{patient_id}
```
---
> ***Url parameter :Required *** 

| Field | Type |
|------ | ---- |
|patient_id | integer |

---


> ***Response body : 200 , Success***

```php
    {
    "message": "successfully updated"
    }
```
---
> ***Response body : 404 , Not found***

```php
    {
        "message": "fatched , patient name and id ",
        "data": {
            "patient_id": 25,
            "name": "Ashwin kadam",
            "email": "kin@gmil.com",
            "dob": "0000-00-00",
            "age": 40,
            "gender": "M",
            "phone_number": 0000006703,
            "address": "Plot no 74 c 13 hindmata society Ganesh Mandir road Gorai1  Borivali West ",
            "branch_name": "MMH",
            "dpw": 2,
            "awaiting_transplantation": 0,
            "blood_group": "A+",
            "CKD_5D_HTN": "Ckd",
            "stability": 1,
            "heart_function": "Normal",
            "injection": 0,
            "urea": 20.6,
            "creatinine": 12.3,
            "bun": 6.3,
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
            "doctor": 1,
            "coin": 0,
            "knowing_source": "",
            "profile_link": "images/patient.png",
            "blocked": 0
        }
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




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="fetch-total-patient"></a>
## Fetch Total patient
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch total patient , if branch name is provided in url then count of patient will be of that hospital otherwise all patient will be counted .</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/view/total/patient/{branch_code?}
```
---
> ***Url parameter : Optional*** 

| Field | Type |
|------ | ---- |
|branch_code | string |

---
> ***Response body : 200 , Success***

```php
    {
        "message": "fatched , patient count ",
        "data": 6
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid branch code"
    }
```
---






<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="fetch-total-hospital"></a>
## Fetch total hospital
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch total hospital count related to that doctor .</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/view/total/hospital/
```
---

> ***Response body : 200 , Success***

```php
    {
        "message": "hospital count fetched",
        "data": 3
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "hospital not found"
    }
```
---





<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="fetch-dialysis-count"></a>
## Fetch dialysis count
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch total no of patient's dialysis , realted to doctor that is under progress or completed .</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/doctor/view/dialysis/count
```
---

> ***Response body : 200 , Success***

```php
    {
        "message": "total dialysis count fetched",
        "data": 1045
    }
```
---




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="fetch-all-dialysis"></a>
## Fetch all dialysis
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch all the dialysis that is under progress or completed.</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/doctor/view/all/dialysis/
```
---

> ***Response body : 200 , Success***

```php
    {
        "message": "data fetched",
        "data": [
            {
                "appointment_id": 1862,
                "patient": "Ananta kadam",
                "staff": "Abc staff",
                "bp_systolic": 67,
                "bp_diasystolic": 65,
                "weight": 56,
                "spo2": 99,
                "conditions": "nausea,vomiting,short breath,bleeding",
                "status": "Dialysis Ongoing",
                "datetime": "2021-10-03 21:07:59",
                "patient_parameters": "In progress"
            },
            {
                "appointment_id": 59,
                "patient": "Ratna vaigankar",
                "staff": "",
                "bp_systolic": 150,
                "bp_diasystolic": 80,
                "weight": 37,
                "spo2": 97,
                "conditions": "",
                "status": "Dialysis Ongoing",
                "datetime": "2021-09-17 08:50:02",
                "patient_parameters": "In progress"
            },
        ]
    }
```
---



<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="fetch-total-hospital"></a>
## Fetch doctor amount
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch doctor's revenue , in this endpoint if non of the fields are passed then total revanue will be generaterated otherwise data based on filed will be shown .  .</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/view/doctor/amount/
```
---
> ***Optional body : Form data***

| Field | Type |
|------ | ---- |
|id | number |
|code | string |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "doctor amount fetched",
        "data": 250
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid code"
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















