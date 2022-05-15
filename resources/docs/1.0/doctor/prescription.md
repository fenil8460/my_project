<a name="prescription-apis-for-doctor-portal"></a>
# Prescription apis for doctor portal

---


- [Prescription apis for doctor portal](#prescription-apis-for-doctor-portal)
  - [Add prescription](#add-prescription)
  - [Show prescription](#show-prescription)

1. Add prescription
2. Show prescription


<!-- -------------------------------------------------------- -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="add-prescription"></a>
## Add prescription
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to add prescription .</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/doctor/add/prescription/{patient_id?}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|prescription | string |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "prescription saved"
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```




<!-- -------------------------------------------------------- -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="show-prescription"></a>
## Show prescription
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to show prescription .</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/doctor/show/prescription/{patient_id?}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | number |

---
> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|prescription | string |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "prescription fetched",
        "data": [
            {
                "prescription": "this is presctipiton",
                "date": "2021-11-27 17:58:30"
            }
        ]
    }
```
---


> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```
