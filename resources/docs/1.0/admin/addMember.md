# API for Admin (Add Member)

---
- [API for Admin (Add Member)](#api-for-admin-add-member)
  - [Add new admin](#add-new-admin)
  - [Edit Existing Admin](#edit-existing-admin)
  - [Delete existing admin](#delete-existing-admin)
  - [View Admin List](#view-admin-list)
  - [Fetch admin based on id passed](#fetch-admin-based-on-id-passed)
  - [## Ban or unban an existing admin](#-ban-or-unban-an-existing-admin)
  - [## Search Admin by username, phone etc](#-search-admin-by-username-phone-etc)




1. Add new admin    
2. Edit Existing Admin   
3. Delete existing admin   
4. View Admin List    
5. Fetch admin based on id passed       
6. Ban or unban an existing admin       
7. Search Admin by username, phone etc    


  
<a name="add-new-admin"></a>
## Add new admin

<h4>This Api allow us to add a new admin</h4>

---

> ***Required : Form data*** 
 
| Field | Type |value
|------ | ---- |----
| username | varchar(70) |
| email | varchar(100) |
| phone | bigint(20) |
| emphone | bigint(20) |
| password | varchar(150) |
| profile_pic | file |

---

> ***Endpoint***

```php
     /v3/api/admin/store/admin 

```

---

> ***Response : 200 , success***

```php
    {
        "message": "Admin inserted"
    }
```


<!-- -----------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin:120px 0px"> </hr>

<a name="Edit-existing-admin"></a>
## Edit Existing Admin

<h4>This API help us edit the details of the existing admin based on the id passed.</h4>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

---

```php
    /v3/api/admin/adminUpdate
```
---

> ***Required body : Form data*** 

| Field | Type |value
|------ | ---- |----
| id | integer |
| username | varchar(70) |
| email | varchar(100) |
| phone | bigint(20) |
| emphone | bigint(20) |
| log | varchar(150) |
| time | datetime |


---

---

> ***Request data : JSON ***

```php
   {
    "id":13,
    "username":"Ram Prasad",
    "email":"ram89@gmail.com",
    "phone":"9696857495",
    "emphone":"932400096",
    "log":"Super Admin Paras",
    "time":"2021-07-08 06:29:34"
   }
```
---

> ***Response body : 200 , Success***

```php
   {
    "message": "Success"
   }
```
---

 > ***Response body : Record Exists***
```php
   {
    "message": "The email has already been taken."
   }
```

---


 > ***Response body : Record Exists***
```php
   {
    "message": "The phone has already been taken."
   }
```






<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin:120px 0px"> </hr>


<a name="Delete-existing-admin"></a>
## Delete existing admin

<h4>This API help us to delete an existing admin based on the id passed. </h4>


---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

---

```php
     /v3/api/admin/adminDelete/{aid?}
```
---


> ***Response body : 200 , Success***

```php
    {
        "success": "admin removed successfully"
    }
```
---

 > ***Response body : 404 , Not Found***
```php
    {
        "message": "invalid id"
    }
```




<!-- ----------------------------------------------------------  -->






<hr style="border:2px solid gray;margin:120px 0px"> </hr>


<a name="list-admin"></a>
## View Admin List

<h4>This API help us to show the list of admin with their other details.</h4>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

---

```php
     /v3/api/admin/adminList
```

---


> ***Response body : 200 , Success***

```php
    {
    "data": [
        {
            "id": 1,
            "date": "2021-06-22 11:55:34",
            "username": "Super Admin",
            "phone": 1234567890,
            "emphone": 1122334455,
            "email": "admin@vidur.ml",
            "profile_pic": "AID1.jpg",
            "active": 1,
            "password": "c9d95957a598a7dd3db737ea505146f4",
            "remove": 0,
            "ban": 0
        },
        {
            "id": 17,
            "date": "2021-05-21 03:25:10",
            "username": "Gauri Khan",
            "phone": 034554964,
            "emphone": 9564598569,
            "email": "khangauri@trp.org",
            "profile_pic": "AID17.jpg",
            "active": 1,
            "password": "c9d95957a598a7dd3db737ea505146f4",
            "remove": 0,
            "ban": 1
        }
    ]
}
```
---

<!-- ------------------------------------------------------------  -->


---
---
<hr style="border:2px solid gray"> </hr>

<a name="Fetch-admin-by-id"></a>
## Fetch admin based on id passed

<h4>This API help us to get record of particular admin based on id passed. </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>
```php
     /v3/api/admin/adminListByid
```
---

> ***Required : url param*** 
 
| Field | Type | 
|------ | ---- |
| id | integer |

---

> ***Required : Form data*** 
 
```php
   {
    "id":18
   }
```
---

> ***Response body : 200 , Success***

```php
 {
    "data": [
        {
            "id": 18,
            "date": "2021-05-21 03:32:01",
            "username": "Shashank Singh",
            "phone": 9785987897,
            "emphone": 9788587897,
            "email": "s@trp.org",
            "profile_pic": "AID18.jpg",
            "active": 1,
            "password": "c9d95957a598a7dd3db737ea505146f4",
            "remove": 0,
            "ban": 0
        }
    ]
}
```
---



<!-- ------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin:120px 0px"> </hr>


<a name="Ban-or-Unban-Admin"></a>
## Ban or unban an existing admin
---

<h4>This API help  to ban or unban an existing admin. </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/adminBanPermit
```
---

> ***Required : url param*** 
 
| Field | Type | 
|------ | ---- |
| id | integer |
| ban | integer | 0,1 |
|log| varchar(50)  |
|time | datetime |



---

> ***Request data : JSON ***

```php
  {
    "id":18,
    "ban":0,
    "log":"super admin",
    "time":"2021-07-08 06:29:34"
 }
```


---

> ***Response : 200 , success***

```php
    {
    "message": "Change Successfull"
    }
```
---

 > ***Response body : **
```php
    {
    "message": "No record found or Update Failure"
   }
```

<!-- ------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin:120px 0px"> </hr>


<a name="search-admin-based-on-username-phone-emphone"></a>
## Search Admin by username, phone etc
---

<h4>This API help to search admin by username, phone, emphone etc. </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
     /v3/api/admin/getAdminByName
```
---

> ***Required : url param*** 
 
| Field | Type | 
|------ | ---- |
| username | varchar(70) |
| phone | bitint(20) |
| emphone | bigint(20) |

---

> ***Request data : JSON ***

```php
  {
    "username":"ad"
  }
```


---

> ***Response : 200 , success***

```php
   {
    "data": [
        {
            "id": 1,
            "date": "2021-06-22 11:55:34",
            "username": "Super Admin",
            "phone": 1234567890,
            "emphone": 1122334455,
            "email": "admin@vidur.ml",
            "profile_pic": "AID1.jpg",
            "active": 1,
            "password": "c9d95957a598a7dd3db737ea505146f4",
            "remove": 0,
            "ban": 0
        }
    ]
}
```
---

 > ***Response body : 404 , Not Found***
```php
  {
    "message": "No record found"
  }
```



