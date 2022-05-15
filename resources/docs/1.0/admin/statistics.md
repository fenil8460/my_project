<a name="statistics-apis-for-admin"></a>
# Statistics apis for admin




---

- [Statistics apis for admin](#statistics-apis-for-admin)
- [1. Patient Info](#1-patient-info)
  - [Patient info - data for table](#patient-info---data-for-table)
  - [Patient report](#patient-report)
  - [Dialysis sheet](#dialysis-sheet)
  - [Current dialysing patient](#current-dialysing-patient)
  - [Register patient](#register-patient)
  - [Block or unblock patient](#block-or-unblock-patient)
  - [Get patient name and id](#get-patient-name-and-id)
  - [Update patient](#update-patient)
  - [View patient](#view-patient)
  - [Get patient name and id](#get-patient-name-and-id-1)
- [2. staff Info](#2-staff-info)
  - [Appointment info in admin (under Statistics)](#appointment-info-in-admin-under-statistics)
  - [Appointment info in Admin](#appointment-info-in-admin)
  - [| date | datetime | "2020-12-10 15:10:49" |](#-date--datetime--2020-12-10-151049-)
  - [Appointment information in admin](#appointment-information-in-admin)
  - [Appointment info of one week](#appointment-info-of-one-week)
  - [Appointment Info based on month](#appointment-info-based-on-month)
  - [Consumable Usage graph](#consumable-usage-graph)
  - [Pharmaceuticals Usage Graph](#pharmaceuticals-usage-graph)
  - [## Staff info list](#-staff-info-list)
  - [## Fetch data based on date passed](#-fetch-data-based-on-date-passed)
  - [| date | date |](#-date--date-)


1. [Patient Info](#1-patient-info) <br>
        1.1. [Patient info - data for table](#1-patient-info)<br>
        1.2. [Patient report](#patient-report)<br>
        1.3. [Dialysis sheet](#dialysis-sheet)<br>
        1.4. [Current dialysing patient](#current-dialysing-patient)<br>
        1.5. [For registering patient](#register-patient)<br>
        1.6. [For blocking or unblocking](#block-or-unblock-patient)<br>
        1.7. [Fetching patient's name and id](#get-patient-name-and-id)<br>
        1.8. [For updating patient](#update-patient)<br>
        1.9. [For fetching patient](#view-patient)<br>

2. [Staff Info](#2-staff-info) <br>
        2.1. [Appointment info in admin (under Statistics)](#appointment-info-in-admin-under-statistics)<br> 
        2.2. [Appointment info in Admin](#appointment-info-in-admin)                   <br>
        2.3. [Appointment information in admin](#appointment-information-in-admin)      <br>
        2.4. [Appointment info of one week](#appointment-info-of-one-week)      <br>
        2.5. [Appointment Info based on month](#appointment-info-based-on-month) <br>

3. staff (Statistics) Info<br/>
       3.1. Consumable Usage graph<br/>
       3.2. Pharmaceuticals Usage Graph<br/>
       3.3. Staff info list<br/>
       3.4. Fetch data based on date passed<br/>
 



---

<!-- -------------------------------------------------  -->
<a name="1-patient-info"></a>
# 1. Patient Info 
<!-- -------------------------------------------------  -->


<a name="patient-info---data-for-table"></a>
## Patient info - data for table

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient details for presenting data in table .</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/view/stats/patient/info
```
---

> ***Response body : 200 , Success***

```php
    {
    "message": "success , data fetched",
    "data": [
        {
            "name": "Nisha sharma",
            "branch_name": "Shivam Dialysis Center",
            "dialysis_count": 34,
            "p_id": 6,
            "patinet_id": "PIDSDC6",
            "avrage_dialysis_per_month": 2.83
        },
        {
            "name": "Deepkumar janardan",
            "branch_name": "Shivam Dialysis Center",
            "dialysis_count": 31,
            "p_id": 19,
            "patinet_id": "PIDSDC19",
            "avrage_dialysis_per_month": 2.58
        },
    ]
    }
```
---


<!-- -------------- -->



<a name="patient-report"></a>
## Patient report 

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch particular patient's all appointment id with start date and patient's basic details based on their id </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/patient/report/{patient_id}
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
    "data": {
        "patient_details": {
            "name": "Suvarna  ",
            "email": null,
            "phone_number": 0000006703,
            "age": 53,
            "address": "Shivaji Nagar, Boriwali (west)",
            "paid": 1100,
            "due": 300
        },
        "appointments": [
            {
                "appointment_id": 342,
                "start_time": "2021-03-19 15:54:34"
            },
            {
                "appointment_id": 298,
                "start_time": "2021-03-12 17:16:28"
            },   
        ]
    }
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "Patient not found"
    }
```
---



<!-- -------------- -->



<a name="dialysis-sheet"></a>
## Dialysis sheet

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's particular appointment id and shows dialysis sheet like - pre dialysis , post , dialysis , patient parameter </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/patient/dialysis/report/{appointment_id}
```
---
> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|appoointment_id | integer |

---

> ***Response body : 200 , Success***

```php
    {
    "data": {
        "patient_detail": {
            "name": "Anthony"
        },
        "pre_dialysis": {
            "appointment_id": 56,
            "bp_systolic": 160,
            "bp_diasystolic": 80,
            "heart_rate": 87,
            "weight": 80,
            "spo2": 98,
            "reused_dialyzer": 0,
            "dialyzer": "Fresenius F6",
            "reused_tubing": 0,
            "bp_high": 0,
            "bp_low": 0,
            "nausea": 0,
            "vomiting": 0,
            "short_breath": 0,
            "bleeding": 0,
            "edema": 0,
            "stomach_distend": 0,
            "diarrhea": 0,
            "other": "",
            "technician": "SIDSDC1",
            "machine_id": 1,
            "scheduled_emergency": "scheduled",
            "access_av": "avf",
            "remarks": "",
            "site_condition": "yes",
            "explain": "",
            "private": "no"
        },
        "post_dialysis": {
            "appointment_id": 56,
            "bp_systolic": 180,
            "bp_diasystolic": 110,
            "heart_rate": 85,
            "weight": 76,
            "eh": 0,
            "mode_of_transport": "Walk",
            "bp_high": 1,
            "bp_low": 0,
            "nausea": 0,
            "vomiting": 0,
            "short_breath": 0,
            "bleeding": 0,
            "edema": 0,
            "hypoglycemia": 0,
            "diarrhea": 0,
            "orthostatic_hypotension": 0,
            "dizziness": 0,
            "other": "",
            "amount": 1100,
            "additional_amount": 0,
            "paid": 1100,
            "mop": "Cashless Scheme",
            "technician": "SIDSDC1",
            "remarks": "",
            "early_discharge": 0
        },
        "patient_parameter": [
            {
                "sr": 386,
                "id": 1,
                "appointment_id": 56,
                "time": "09:15:00",
                "bps": 180,
                "bpd": 110,
                "pulse": 67,
                "uf_rate": 1144,
                "uf_volume": 856,
                "bf_rate": 300,
                "ap": 0,
                "vp": 160,
                "tmp": 100,
                "kv/t": 0,
                "actions": ""
            },
            .
            .
            .
            {
                "sr": 392,
                "id": 7,
                "appointment_id": 56,
                "time": "00:00:00",
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
            }
        ]
    }
}
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "appointment id not found"
    }
```
---





<!-- -------------- -->



<a name="current-dialysing-patient"></a>
## Current dialysing patient

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch current dialysing patient </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/patient/dialysis/report/{appointment_id}
```
---


> ***Response body : 200 , Success***

```php
    {
    "message": "dialysing patient fetched ",
    "data": [
        {
            "staff": "Nishita Hindalekar",
            "pid": "PIDMMH26",
            "branch_name": "MMH",
            "start_time": "2021-09-17 08:25:36",
            "patient_name": "Durga singh"
        },
        {
            "staff": "Nitin Rathod",
            "pid": "PIDOH1",
            "branch_name": "OH",
            "start_time": "2021-09-17 07:32:49",
            "patient_name": "Suresh  rathod"
        },
    ]
    }
```
---

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






<!-- ------------------------------ STAFF INFO 👇 ---------------------------------  -->


<a name="2-staff-info"></a>
# 2. staff Info 






























<!-- -->


<a name="appointment-info-in-admin"></a>
## Appointment info in admin (under Statistics)
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>
```php
     /v3/api/admin/getAppointment
```
---


<h4>This endpoint allows you to return the data related to the appointment</h4>

---


---


> ***Response body : 200 , success***

```php
   {
    "data": [
        {
            "patient_id": 9,
            "name": "Santosh Singh",
            "slot": 8,
            "date": "2020-12-10 15:10:49",
            "beds_count": 11,
            "bed_id": 6,
            "cancelled": 0,
            "emergency": 0
        },
        {
            "patient_id": 6,
            "name": "Nisha Singh",
            "slot": 5,
            "date": "2021-09-15 15:11:53",
            "beds_count": 11,
            "bed_id": 6,
            "cancelled": 1,
            "emergency": 1
        }
    ]
   }

```


<!-- -----------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="appointment-info-statistics-admin"></a>
## Appointment info in Admin 
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return the details based on the date and the branch code passed.</h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/graphAppointmentInfo
```
---

---

> ***Url Parameter : Required*** 
 
| Field | Type | Values |
|------ | ---- | ---- |
| branch_code | varchar(5) | "SDC" |
| date | datetime | "2020-12-10 15:10:49" |
---


> ***Required : Json data*** 
 
```php
  {
    "branch_code":"MMH",
    "date":"2020-12-10 15:10:49"
  }
    
```



> ***Response body : 200 , success***

```php
    {
    "data": [
        {
            "branch_code": "MMH",
            "Date": "2020-12-10",
            "Total": 1
        }
    ]
}
```




<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="appointment-info-in-admin-portal"></a>
## Appointment information in admin
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return appointment information between the dates passed and the branch code</h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/graphAppointmentBetweenDates
```

---

> ***Url Parameter : Required*** 
 
| Field | Type | value |
|------ | ---- | ---- |
| branch_code | varchar(5) | "MMH" |
| start_date | datetime | "2021-10-15 16:22:22" |
| end_date | datetime | "2021-11-13 15:03:16" |

---


> ***Required : Json data*** 
 
```php
{
    "branch_code":"MMH",
    "start_date":"2021-10-15 16:22:22",
    "end_date":"2021-11-13 15:03:16"
}
    
```




> ***Response body : 200 , success***

```php
     {
    "data": [
        {
            "branch_code": "MMH",
            "Date": "2021-11-13",
            "Total": 2
        }
    ]
}
```




<!-- ----------------------------------------------------------  -->






<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="appointment-info-data-of-one-week"></a>
## Appointment info of one week

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return the data of one week.</h4>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
    /v3/api/admin/graphAppointmentTimeGap
```


> ***Response body : 200 , Success***

```php
  {
    "data": [
        {
            "id": 1,
            "patient_id": 8,
            "branch_name": "MMH",
            "branch_code": "SDC",
            "bed_id": 4,
            "slot": 1,
            "date": "2021-11-13 15:03:16",
            "cancelled": 0,
            "emergency": 0,
            "paid": 0
        }
    ]
}
```




<!-- ------------------------------------------------------------  -->


---
---
<hr style="border:2px solid gray"> </hr>

<a name="appointment-info-Monthly"></a>
## Appointment Info based on month

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return data of one month, sixth month  or of one year. </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
     /v3/api/admin/appointmentInfoLastMonths
```
---

> ***Url parameter : Required*** 
 
| Field | Type | values |
|------ | ---- |---- |
| month | integer | 1,6,12  |

---

> ***Required body : Json data*** 
 
```php
   {
    "month":6
   }
```
---

> ***Response body : 200 , Success***

```php
   {
    "data": [
        {
            "id": 1,
            "patient_id": 8,
            "branch_name": "MMH",
            "branch_code": "SDC",
            "bed_id": 4,
            "slot": 1,
            "date": "2021-11-13 15:03:16",
            "cancelled": 0,
            "emergency": 0,
            "paid": 0
        },
        {
            "id": 3,
            "patient_id": 6,
            "branch_name": "SDC",
            "branch_code": "SDC",
            "bed_id": 6,
            "slot": 5,
            "date": "2021-09-15 15:11:53",
            "cancelled": 1,
            "emergency": 1,
            "paid": 1
        }
    ]
   }
```







<a name="consumable-usage-graph"></a>
## Consumable Usage graph
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>
```php
   /v3/api/admin/staff_consumable_graph
```
---


<h4>This endpoint allows you to return the data related to consumable</h4>


> ***Response body : 200 , success***

```php
    {
    "data": [
        {
            "id": 1,
            "branch": "SDC",
            "category": "consumable",
            "brand": "Browndove",
            "billable": 0,
            "available_count": 0,
            "arrived": 168,
            "total": 5456.64,
            "cost": 32.48,
            "gst": 0,
            "calculated_cost_price": 32.48,
            "private_selling_price": 0,
            "mjpjay_selling_price": 0
        },
        {
            "id": 25,
            "branch": "SDC",
            "category": "consumable",
            "brand": "Browndove",
            "billable": 0,
            "available_count": 0,
            "arrived": 168,
            "total": 5456.64,
            "cost": 32.48,
            "gst": 0,
            "calculated_cost_price": 32.48,
            "private_selling_price": 0,
            "mjpjay_selling_price": 0
        }
    ]
    }

```


<!-- -----------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="Pharmaceuticals-Usage-Graph-in-statistics-in-admin"></a>
## Pharmaceuticals Usage Graph
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return the data related to pharmaceuticals Usage Graph</h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/staff_pharma_graph
```
---

> ***Response body : 200 , success***

```php
    {
    "data": [
        {
            "id": 1,
            "branch": "SDC",
            "category": "pharmaceutical",
            "brand": "Biotech",
            "billable": 1,
            "available_count": 83,
            "arrived": 90,
            "total": 1395,
            "cost": 15.5,
            "gst": 0,
            "calculated_cost_price": 15.5,
            "private_selling_price": 0,
            "mjpjay_selling_price": 0
        },
        {
            "id": 25,
            "branch": "SDC",
            "category": "pharmaceutical",
            "brand": "Biotech",
            "billable": 1,
            "available_count": 83,
            "arrived": 90,
            "total": 1395,
            "cost": 15.5,
            "gst": 0,
            "calculated_cost_price": 15.5,
            "private_selling_price": 0,
            "mjpjay_selling_price": 0
        }
    ]
    }
```




<!-- ------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="Staff-info-list"></a>
## Staff info list
---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>


```php
    /v3/api/admin/getStaffInfo

```
---

 
 > ***Response body : 200, Success***
```php
     {
    "data": [
        {
            "appointment_id": 397,
            "bp_systolic": 100,
            "bp_diasystolic": 80,
            "heart_rate": 78,
            "weight": 65,
            "eh": 0,
            "mode_of_transport": "Walk",
            "bp_high": 0,
            "bp_low": 0,
            "nausea": 0,
            "vomiting": 0,
            "short_breath": 0,
            "bleeding": 0,
            "edema": 0,
            "hypoglycemia": 0,
            "diarrhea": 0,
            "orthostatic_hypotension": 0,
            "dizziness": 0,
            "other": "",
            "amount": 1200,
            "additional_amount": 0,
            "paid": 1200,
            "mop": "Cash",
            "technician": "SIDMMH2",
            "remarks": "",
            "early_discharge": 0,
            "id": 1,
            "name": "16g Needle",
            "brand": "",
            "count": 1,
            "selling_price": 0,
            "cost_price": 32,
            "ap_id": 397,
            "rating": 0,
            "liked_most": "",
            "comment": "",
            "encrypted_code": "ILcilVNq8ZfetTavF2b0"
        },
        {
            "appointment_id": 397,
            "bp_systolic": 100,
            "bp_diasystolic": 80,
            "heart_rate": 78,
            "weight": 65,
            "eh": 0,
            "mode_of_transport": "Walk",
            "bp_high": 0,
            "bp_low": 0,
            "nausea": 0,
            "vomiting": 0,
            "short_breath": 0,
            "bleeding": 0,
            "edema": 0,
            "hypoglycemia": 0,
            "diarrhea": 0,
            "orthostatic_hypotension": 0,
            "dizziness": 0,
            "other": "",
            "amount": 1200,
            "additional_amount": 0,
            "paid": 1200,
            "mop": "Cash",
            "technician": "SIDMMH2",
            "remarks": "",
            "early_discharge": 0,
            "id": 1,
            "name": "Heparin",
            "brand": "",
            "count": 5000,
            "selling_price": 0,
            "cost_price": 0,
            "ap_id": 397,
            "rating": 0,
            "liked_most": "",
            "comment": "",
            "encrypted_code": "ILcilVNq8ZfetTavF2b0"
        }
    ]
     }
```



<!-- ------------------------------------------------------------  -->

<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="Fetch-data-based-on-date"></a>
## Fetch data based on date passed
---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>


```php
   /v3/api/admin/getStaffInfoByDate

```
---

> ***Required : url param*** 
 
| Field | Type | 
|------ | ---- |
| date | date |
---

> ***Required : Form data*** 
```php
      {
    "date":"2010-07-08 06:29:34"
    }
```
 
 > ***Response body : 404 , Not Found***
```php
    {
    "message": "No record found"
   }
```



> ***Required : Form data*** 
```php
      {
    "date":"2020-12-08"
}
```
 
 > ***Response body : 200, Success***
```php
    {
    "data": [
        {
            "id": 26,
            "date": "2021-10-06",
            "username": "Akshay Rangnath Arote",
            "designation": "Senior Technician",
            "category": "consumable",
            "branch": "PH",
            "phone": 9769728177,
            "emphone": 8108449363,
            "salary": 18000,
            "dmy": "month",
            "email": "aroteakshay35@gmail.com",
            "profile_pic": "Empty.jpg",
            "active": 1,
            "remove": 0,
            "ban": 0,
            "password": "0bc41afdf5066edd0cb1294dcfe3cfa3",
            "hd_patient": "yes",
            "product_id": 483,
            "branch_name": "PH",
            "product_name": "Bed Sheet",
            "brand": "Star Enterprises",
            "billable": 0,
            "cost": 7.5,
            "gst": 0,
            "calculated_cost_price": 7.5,
            "arrived": 10,
            "available_count": 10,
            "total": 75,
            "private_selling_price": 0,
            "mjpjay_selling_price": 0
        }
    ]
}
```




