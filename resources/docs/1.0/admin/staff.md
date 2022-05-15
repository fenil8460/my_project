<a name="staff-apis-for-admin"></a>
# Staff apis for admin

---

- [Staff apis for admin](#staff-apis-for-admin)
  - [For registering staff](#for-registering-staff)
  - [For ban and unban](#for-ban-and-unban)
  - [For updating staff](#for-updating-staff)
  - [For fetching staff](#for-fetching-staff)
  - [For deleting staff](#for-deleting-staff)

 

1. For regestring staff .
2. For ban or unban  
3. For updating staff
4. Fetching staffs
5. For deleting staff

---

<!-- --------------------------------------------  -->

<a name="for-registering-staff"></a>
## For registering staff

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to register new staff</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/admin/store/staff
```
---

> ***Required body : Form data*** 

| Field | Type |value
|------ | ---- |----
| username | string |
| phone | number |
| emphone | number |
| email | string |
| password | string |
| category | number |
| branch | string |
| salary | number |
| dmy | number |day/month/year
| designation | string |
| profile_pic | image |jpg/png/jpeg

---

> ***Response body : 200 , Success***

```php
    {
        "message": "Staff inserted"
    }
```
---





<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>



<a name="for-ban-and-unban"></a>
## For ban and unban 
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to ban or unban staff</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/admin/ban_unban/staff/{staff_id}
```
---
> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|staff_id | integer |

---
> ***Response body : 200 , Success***

```php
    {
    "message": "staff unbanned successfully"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "success": "staff banned successfully"
    }
```
---
> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid staff id"
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





<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="for-updating-staff"></a>
## For updating staff
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to update staff </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/admin/update/staff/{staff_id}
```
---
> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|staff_id | integer |

---

> ***Required body : Form data*** 

| Field | Type |value
|------ | ---- |----
| username | string |
| phone | number |
| password | string |
| email | string |
| emphone | number |
| designation | string |
| dmy | number |day/month/year
| salary | number |
| branch | string |
| category | string |

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
        "message": "invalid staff id"
    }
```
---
> ***Response body : 404 , Not found***

```php
    {
        "message": "staff not found"
    }
```
---




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="for-fetching-staff"></a>
## For fetching staff
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch all the staff as well as single staff based on staff id</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/view/staff/{staff_id}
```
---

> ***Url parameter : Optional*** 
- For getting single staff use url parameter otherwise go without urlparam

| Field | Type |
|------ | ---- |
|staff_id | integer |

---

> ***Response body : 200 , Success***

```php
    {
    "data": [
        {
            "id": 1,
            "date": "2020-12-17 03:18:10",
            "username": "Jaymala",
            "designation": "Senior Technician",
            "category": "Part Time",
            "branch": "SDC",
            "phone": 0000006703,
            "emphone": 0000006703,
            "salary": 23000,
            "dmy": "month",
            "email": "jkule1987@gmail.com",
            "profile_pic": "Empty.jpg",
            "active": 1,
            "remove": 0,
            "ban": 0,
            "hd_patient": "yes"
        },
        {
            "id": 2,
            "date": "2020-12-17 06:02:55",
            "username": "Nishita Hindalekar",
            "designation": "Senior Technician",
            "category": "",
            "branch": "MMH",
            "phone": 0000006703,
            "emphone": 0000006703,
            "salary": 17000,
            "dmy": "month",
            "email": "vardekarsonali@gmail.com",
            "profile_pic": "Empty.jpg",
            "active": 1,
            "remove": 1,
            "ban": 0,
            "hd_patient": "yes"
        },
    ]
    }
```
---
> ***Response body : 200 , Success***

```php
    {
    "message": "staff found",
    "data": {
        "id": 25,
        "date": "2021-03-03 06:26:41",
        "username": "Nitin ",
        "designation": "Senior Technician",
        "category": "Full Time",
        "branch": "SDC",
        "phone": 0000006703,
        "emphone": 0000006703,
        "salary": 20000,
        "dmy": "month",
        "email": "nitinrathod638@gmail.com",
        "profile_pic": "Empty.jpg",
        "active": 0,
        "remove": 0,
        "ban": 0,
        "hd_patient": "no"
        }
    }
```
---
> ***Response body : 404 , Not found***

```php
    {
        "message": "staff not found"
    }
```
---





<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="for-deleting-staff"></a>
## For deleting staff
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to delete staff</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/admin/delete/staff/{staff_id}
```
---
> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|staff_id | integer |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "staff deleted successfully"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "staff not found"
    }
```
---














