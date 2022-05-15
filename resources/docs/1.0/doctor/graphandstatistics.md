<a name="graph-and-statictics-for-doctor-portal"></a>
# Graph and statictics for doctor portal




---

- [Graph and statictics for doctor portal](#graph-and-statictics-for-doctor-portal)
- [1. Dialysis parameter](#1-dialysis-parameter)
  - [Weight](#weight)
  - [Bp systolic and Bp diasystolic](#bp-systolic-and-bp-diasystolic)
  - [Heart rate](#heart-rate)
- [2. Condtions](#2-condtions)
  - [Pre dialysis conditions](#pre-dialysis-conditions)
  - [Post dialysis conditions](#post-dialysis-conditions)
- [3. Consumables and pharmaceutical](#3-consumables-and-pharmaceutical)
  - [Consumables](#consumables)
  - [Pre dialysis and pharmaceutical](#pre-dialysis-and-pharmaceutical)
  - [Post dialysis and pharmaceutical](#post-dialysis-and-pharmaceutical)
- [4. Blood report](#4-blood-report)
  - [Haemoglobin vs Pharma](#haemoglobin-vs-pharma)
  - [Creatinine](#creatinine)
  


1. Dialysis parameter <br>
        1.1. Weight <br>
        1.2. Bp systolic and Bp diasystolic <br>
        1.3.Heart rate <br>

2. Conditions <br>
        2.1. Pre dialysis conditions   <br>
        2.2. Post dialysis conditions     <br>              
       
3. Consumables and pharmaceutical <br>
        3.1. Consumables   <br>
        3.2. Pre dialysis and pharmaceutical <br>
        3.3. Post dialysis and pharma     <br>             
       
4. Blood report <br>
        4.1. Haemoglobin vs Pharma <br>
        4.2. Creatinine <br>
       


---

<!-- -------------------------------------------------  -->
<a name="1-dialysis-parameter"></a>
# 1. Dialysis parameter
<!-- -------------------------------------------------  -->


<a name="weight"></a>
## Weight

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's weight </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/show/weight/graph/{patient_id}
```
---

> ***Url parameter : Required*** 

| Field | Type | 
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type | Value
|------ | ---- |
|time_range | date | 1w,1m,3m,6m,1y,max |
|weight_plot_date | date | YYYY-MM-DD |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "weight data fetched",
    "data": {
        "pre_dialysis": [
            {
                "weight": 58,
                "start_time": "2021-11-15 17:21:24"
            }
        ],
        "post_dialysis": [
            {
                "weight": 55,
                "start_time": "2021-11-15 17:21:24"
            }
        ]
    }
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```

<!-- ------- -->


<a name="bp-systolic-and-bp-diasystolic"></a>
## Bp systolic and Bp diasystolic

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's Bp systolic and bp diasystolic data </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/show/bp_systolic_diastolic/graph/{patient_id}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type | Value
|------ | ---- |
|time_range | date | 1w,1m,3m,6m,1y,max |
|bpsd_plot_date | date | YYYY-MM-DD |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "data fetched",
    "bp_diasystolic_data": {
        "pre_dialysis": [
            {
                "bp_diasystolic": 90,
                "start_time": "2021-11-15 17:21:24"
            }
        ],
        "post_dialysis": [
            {
                "bp_diasystolic": 90,
                "start_time": "2021-11-15 17:21:24"
            }
        ]
    },
    "bp_systolic_data": {
        "pre_dialysis": [
            {
                "bp_systolic": 140,
                "start_time": "2021-11-15 17:21:24"
            }
        ],
        "post_dialysis": [
            {
                "bp_systolic": 170,
                "start_time": "2021-11-15 17:21:24"
            }
        ]
    }
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "not found"
    }
```
---

<!-- ------- -->


<a name="heart-rate"></a>
## Heart rate

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's heart rate </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/show/heart_rate/graph/{patient_id}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type | Value
|------ | ---- |
|time_range | date | 1w,1m,3m,6m,1y,max |
|hr_plot_date | date | YYYY-MM-DD |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "heart_rate data fetched",
    "data": {
        "pre_dialysis": [
            {
                "heart_rate": 82,
                "start_time": "2021-11-15 17:21:24"
            }
        ],
        "post_dialysis": [
            {
                "heart_rate": 82,
                "start_time": "2021-11-15 17:21:24"
            }
        ]
    }
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "not found"
    }
```
---

<!-- ------- -->





<!-- -------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="2-condtions"></a>
# 2. Condtions
<!-- -------------------------------------------------  -->


<a name="pre-dialysis-conditions"></a>
## Pre dialysis conditions 

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's pre dialysis conditons </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/show/pre_dialysis_conditions/graph/{patient_id}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type | Value
|------ | ---- |
|time_range | date | 1w,1m,3m,6m,1y,max |
|pre_dialysis_condition_plot_date | date | YYYY-MM-DD |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "pre_dialysis_conditions data fetched",
    "data": {
        "pre_dialysis": [
            {
                "start_time": "2021-11-15 17:21:24",
                "bp_high": 0,
                "bp_low": 0,
                "nausea": 0,
                "vomiting": 0,
                "short_breath": 0,
                "bleeding": 0,
                "edema": 0,
                "stomach_distend": 0,
                "diarrhea": 0
            }
        ]
    }
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "not found"
    }
```
---

<!-- ------- -->


<a name="post-dialysis-conditions"></a>
## Post dialysis conditions

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's post dialysis conditions </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/show/post_dialysis_conditions/graph/{patient_id}
```
---

> ***Url parameter : Required*** 

| Field | Type | Value
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|time_range | date | 1w,1m,3m,6m,1y,max |
|post_dialysis_condition_plot_date | date | YYYY-MM-DD |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "post_dialysis_conditions data fetched",
    "data": {
        "post_dialysis": [
            {
                "start_time": "2021-11-15 17:21:24",
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
                "dizziness": 0
            }
        ]
    }
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "not found"
    }
```
---

<!-- ------- -->




<!-- -------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="3-consumables-and-pharmaceutical"></a>
# 3. Consumables and pharmaceutical
<!-- -------------------------------------------------  -->


<a name="consumables"></a>
## Consumables 

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's consumables used </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/show/consumables/graph/{patient_id}
```
---

> ***Url parameter : Required*** 

| Field | Type | Value
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|time_range | date | 1w,1m,3m,6m,1y,max |
|consumables_plot_date | date | YYYY-MM-DD |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "consumabless data fetched",
    "data": {
        "pre_dialysis": [
            {
                "name": "16g Needle",
                "start_time": "2021-11-15 17:21:24",
                "count": 1
            },
            {
                "name": "Heparin",
                "start_time": "2021-11-15 17:21:24",
                "count": 5000
            },
            {
                "name": "NS1000 ML",
                "start_time": "2021-11-15 17:21:24",
                "count": 1
            },
            {
                "name": "Syringe 10 ML",
                "start_time": "2021-11-15 17:21:24",
                "count": 1
            },
            {
                "name": "Syringe 5 ML",
                "start_time": "2021-11-15 17:21:24",
                "count": 1
            },
            {
                "name": "A/B part",
                "start_time": "2021-11-15 17:21:24",
                "count": 1
            }
        ]
    }
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "not found"
    }
```
---


<!-- ------- -->


<a name="pre-dialysis-and-pharmaceutical"></a>
## Pre dialysis and pharmaceutical

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's pre dialysis and pharmaceutical </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/show/pre_dialysis_pharma/graph/{patient_id}
```
---

> ***Url parameter : Required*** 

| Field | Type | Value
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|time_range | date | 1w,1m,3m,6m,1y,max |
|pre_dialysis_pharma_plot_date | date | YYYY-MM-DD |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "pre_dialysis_pharmas data fetched",
    "data": {
        "pre_dialysis": [
            {
                "name": "EPO 4K",
                "start_time": "2021-11-15 17:21:24",
                "count": 1,
                "bp_systolic": 140,
                "bp_diasystolic": 90,
                "heart_rate": 82,
                "weight": 58
            }
        ]
    }
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "not found"
    }
```
---




<a name="post-dialysis-and-pharmaceutical"></a>
## Post dialysis and pharmaceutical

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's post dialysis and pharmaceutical </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/show/post_dialysis_pharma/graph/{patient_id}
```
---

> ***Url parameter : Required*** 

| Field | Type | Value
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|time_range | date | 1w,1m,3m,6m,1y,max |
|post_dialysis_pharma_plot_date | date | YYYY-MM-DD |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "post_dialysis_pharmas data fetched",
    "data": {
        "post_dialysis": [
            {
                "name": "EPO 4K",
                "start_time": "2021-11-15 17:21:24",
                "count": 1,
                "bp_systolic": 170,
                "bp_diasystolic": 90,
                "heart_rate": 82,
                "weight": 55
            }
        ]
    }
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "not found"
    }
```
---

<!-- ------- -->




<!-- -------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="4-blood-report"></a>
# 4. Blood report
<!-- -------------------------------------------------  -->


<a name="haemoglobin-vs-pharma"></a>
## Haemoglobin vs Pharma 

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's haemoblogin and pharmaceutical </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/show/haemoglobin_vs_pharma/graph/{patient_id}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type | Value
|------ | ---- |
|time_range | date | 1w,1m,3m,6m,1y,max |
|haemoglobin_vs_pharma_plot_date | date | YYYY-MM-DD |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "haemoglobin_vs_pharma data fetched",
    "data": {
        "haemoglobin": [
            {
                "report_date": "2021-11-15",
                "haemoglobin": 90
            }
        ],
        "pharma": [
            {
                "name": "EPO 4K",
                "start_time": "2021-11-15 17:21:24",
                "count": 1
            }
        ]
    }
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "not found"
    }
```
---


<!-- ------- -->


<a name="creatinine"></a>
## Creatinine

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's creatinine </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/show/creatinine/graph/{patient_id}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type | Value
|------ | ---- |
|time_range | date | 1w,1m,3m,6m,1y,max |
|creatinine_plot_date | date | YYYY-MM-DD |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "creatinine data fetched",
    "data": {
        "creatinine": [
            {
                "report_date": "2021-11-15",
                "creatinine": 70
            }
        ]
    }
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "not found"
    }
```
---




<!-- ------- -->
