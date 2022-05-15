<a name="apis-for-manage-patient"></a>
# Apis for manage patient 

---

1. Display the list of patient.
2. Display the details of a specific patient.
3. Update the details of the patient.

<a name="Manage-patient-in-staff"></a>
## Manage Patient

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return the patient`s list </h4>

> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
    /v3/api/staff/getManagePatient
```
---

> ***Required body : Form body*** 

| Field | Type | value |
|------ | ---- | ---- |
| branch | varchar(5) | "SDC" |



---

> ***Request data : JSON ***

```php
   {
   "branch":"SDC"  
   }
```

---

> ***Response body : 200 , Success***

```php
  {
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
        {
            "patient_id": 5,
            "name": "Vasanti satale"
        }
    ]
  }

```
<!-- --------------------------------------------------------------  -->



<a name="Manage-patient-display-details-in-Staff"></a>
## Manage Patient`s specific details

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return the details of a specific patient selected . </h4>

> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
   /v3/api/staff/listPatient
```
---

> ***Required body : Form body*** 

| Field | Type | value |
|------ | ---- | ---- |
| id | integer | 7 |



---

> ***Request data : JSON ***

```php
   {
    "id":8
   }
```

---

> ***Response body : 200 , Success***

```php
  {
    "data": [
        {
            "Patient_id": 8,
            "DocId": 1,
            "DocName": "Dr Akansha ",
            "Patient": "Rohan Sharma",
            "dob": "0000-00-00",
            "age": 61,
            "gender": "M",
            "email": null,
            "phone_number": 0000006703,
            "address": "N.g.park,dahisar east",
            "covid": 0,
            "hhh": "",
            "dpw": 3,
            "awaiting_transplantation": 1,
            "blood_group": "O+",
            "CKD_5D,HTN": "Htn",
            "stability": 1,
            "heart_function": "Normal",
            "injection": 1,
            "urea": 85.2,
            "creatinine": 7.9,
            "bun": 42.2,
            "ecg": 1,
            "bp_stable": 1,
            "habits": "No Habits,",
            "diet": "Non Veg",
            "a": 0,
            "v": 0,
            "n": 0,
            "s": 0,
            "d": 0,
            "access": "Fistula",
            "blocked": 0
        }
    ]
}

```

<!-- ----------------------------------------------------------------  -->



<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="Manage-patient-update-details"></a>
## Manage patient update details

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to update the details of the patient.</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>


```php
  /v3/api/staff/updatePatientDetails
```

---
> ***Required body : Form body*** 

| Field | Type | value |
|------ | ---- | ---- |
| patient_id | integer |  |
| name | varchar(255) | |
| dob | date | |
| age | int | |
| gender | char(1) | 'M','F','O' |
| email | varchar(255) | |
| phone_number | bigint |
| address | text | |
| hhh | varchar(100) | |
| covid | tinyint |  |
| doctor | int |   |
| awaiting_transplantation | tiny_int |  |
| blood_group | varchar(5) |  |
| stability | tinyint |   |
| heart_function | varchar(10) |   |
| injection | tinyint |  |
| CKD_5D_HTN | varchar(255) |
| dpw | tinyint | |
| urea | float | |
|creatinine | float | |
|bun | float |  |
| ecg | tinyint |  |
| bp_stable | tinyint | |
| habits | varchar(255) |  |
| diet | varchar(10) |
| a | tinyint |  |
| v | tinyint |  |
| n | tinyint |  |
| s | tinyint |  |
| d | tinyint |  |
| access | varchar(20) | |
| blocked | int | 0,1 |




---
---



> ***Request data : JSON***

```php
   {
    "patient_id":9,
    "name":"John",
    "dob":"14-03-1987",
    "age":33,
    "gender":"M",
    "email":"john54@gmail.com",
    "phone_number":"9685748596",
    "address":"delhi-6",
    "hhh":"demo",
    "covid":0,
    "doctor":8,
    "dpw":3,
    "awaiting_transplantation":0,
    "CKD_5D_HTN":"Normal",
    "blood_group":"A+",
    "stability":0,
    "heart_function":"Normal",
    "injection":0,
    "urea":0.6,
    "creatinine":6.9,
    "bun":9.6,
    "ecg":0.6,
    "bp_stable":0.6,
    "habits":"veg",
    "diet":"veg",
    "a":1,
    "v":2,
    "n":6,
    "s":3,
    "d":2,
    "access":"Yes",
    "blocked":1
    
}
 
```


> ***Response body : 200 , Success***

```php
     {
    "message": "Update Success"
    }
 
```
---
