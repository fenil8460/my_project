<a name="report-apis-for-doctor-portal"></a>
# Report apis for doctor portal

---


- [Report apis for doctor portal](#report-apis-for-doctor-portal)
  - [Fetch user report](#fetch-user-report)
  - [Fetch blood report](#fetch-blood-report)

1. Fetch user report
2. Fetch blood report


<!-- -------------------------------------------------------- -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="fetch-user-report"></a>
## Fetch user report
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch user report .</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/doctor/show/user/report/{patient_id?}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | number |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "record fetched",
        "data": [
            {
                "id": 1,
                "patient_id": 33,
                "description": "blood1636951348.png",
                "file_link": "No",
                "date": "2021-11-15 10:12:28"
            },
            {
                "id": 2,
                "patient_id": 33,
                "description": "blood1636951412.png",
                "file_link": "No",
                "date": "2021-11-15 10:13:32"
            },
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




<!-- -------------------------------------------------------- -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="fetch-blood-report"></a>
## Fetch blood report
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch blood report .</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/doctor/show/blood/report/{patient_id?}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|patient_id | number |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "record fetched",
        "data": [
            {
                "id": 1,
                "patient_id": 33,
                "description": "blood1636951348.png",
                "file_link": "something",
                "date": "2021-11-15 10:12:28"
            },
            {
                "id": 2,
                "patient_id": 33,
                "description": "blood1636951412.png",
                "file_link": "something",
                "date": "2021-11-15 10:13:32"
            },
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



