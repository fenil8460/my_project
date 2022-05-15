# API for Manager (Add Member)

---


- [API for Manager (Add Member)](#api-for-manager-add-member)
  - [Add new manager](#add-new-manager)
  - [Edit Existing Manager](#edit-existing-manager)
  - [Delete existing Manager](#delete-existing-manager)
  - [View  manager list](#view--manager-list)
  - [## Ban or unban an existing manager](#-ban-or-unban-an-existing-manager)
  - [Fetch manager based on id passed](#fetch-manager-based-on-id-passed)

1. Add new manager
2. Edit Existing Manager 
3. Delete existing Manager
4. View  manager list     
5. Ban or unban an existing manager
6. Fetch manager based on id passed


  
<a name="add-new-manager"></a>
## Add new manager

<h4>This Api allow us to add a new manager</h4>


---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/admin/insertManager
```
---

 
```php
{
    "data": [
            {
            "mid":8,
            "username":"Rahul path",
            "email":"rahulh78743@gmail.com",
            "designation":"manager",
            "phone":"9558741568",
            "emphone":"9368579858",
            "branch":"MMH",
            "role":"Manager",
            "password":"Password@123",
            "log":"Super Paras",
            "action":"user register",
            "time":"2021-07-08 06:29:34"
            }
     
    ]
}
```
---

> ***Response : 200 , success***

```php
    {
    "message": "Insertion Success"
    }

```

---




<!-- -----------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin:120px 0px"> </hr>

<a name="Edit-existing-manager"></a>
## Edit Existing Manager

<h4>This API help us edit the details of the existing manager based on the id passed.</h4>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

---

```php
    /v3/api/admin/editManager 
```
---

> ***Required form data ***

```php
   
  {
    "data": [
               {
                "id":3,
                "username":"Sonya Khan",
                "email":"sonya67@gmail.com",
                "phone":"9635285741",
                "emphone":"9633699636",
                "branch":"MMH",
                "speciality":"Neuphrologist",
                "perdmy":"monthly",
                "amount":100,
                "log":"Super Admin"
                "time" :"2021-07-08 06:29:34"
                 }
       ]
    }
```


 
 > ***Response body : 200, Success***
```php
     {
    "message": "Update Success"
     }
```





<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin:120px 0px"> </hr>


<a name="Delete-existing-manager"></a>
## Delete existing Manager

<h4>This API help us to delete an existing manager based on the id passed. </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

---

```php
     /v3/api/admin/deleteManager
```

---

> ***Required : url param*** 
 
| Field | Type | 
|------ | ---- |
| id | integer |
|log| varchar(150)  |
|time | datetime |

---

> ***Required : Form data*** 
```php
      {
      "id":1,
      "log":"Super Admin Paras",
      "time":"2021-07-08 06:29:34"
      }
```

---

> ***Response : 200 , success***

```php
    {
    "message": "Deletion Success"
    }
```

<!-- ----------------------------------------------------------  -->



<hr style="border:2px solid gray;margin:120px 0px"> </hr>


<a name="list-manager"></a>
## View  manager list

<h4>This API help us to show the list of manager with their other details.</h4>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

---

```php
   /v3/api/admin/viewManager
```

 > ***Response body : 200, Success***

```php
    {
    "data": [
        {
            "id": 82,
            "mid": 2,
            "username": "Pooja Sawant",
            "email": "saksh74i@therenalproject.com",
            "designation": "Manager",
            "phone": 0000006703,
            "emphone": 0000006703,
            "branch": "",
            "role": "Admin",
            "password": "c9d95957a598a7dd3db737ea505146f4",
            "profile_pic": "MID82.jpg",
            "active": 1,
            "remove": 0,
            "ban": 0
        },
        {
            "id": 83,
            "mid": 2,
            "username": "Sakshnt",
            "email": "sakshi@therenalproject.com",
            "designation": "Manager",
            "phone": 0000006703,
            "emphone": 0000006703,
            "branch": "",
            "role": "Doctor",
            "password": "c9d95957a598a7dd3db737ea505146f4",
            "profile_pic": "MID82.jpg",
            "active": 1,
            "remove": 0,
            "ban": 0
        }
       ]
        }
```




<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin:120px 0px"> </hr>


<a name="Ban-or-Unban-manager"></a>
## Ban or unban an existing manager
---

<h4>This API help  to ban or unban an existing manager. </h4>

---
> ***Endpoint***

<larecipe-badge type="danger">POST</larecipe-badge>

```php
      /v3/api/admin/banPermitManager
```
---

> ***Required : url param*** 
 
| Field | Type | 
|------ | ---- |
| id | integer |
| ban | integer |
|log| varchar(50)  |
|time | datetime |



---


> ***Required : Form data*** 
```php
      {
     "id":2,
     "ban":0,
     "log":"Super Admin Paras",
     "time":"2021-07-08 06:29:34"
     }
```


> ***Response : 200 , success***
```php
   {
    "message": "Status Changed"
   }
```





<!-- ------------------------------------------------------------  -->


---
---
<hr style="border:2px solid gray"> </hr>

<a name="Fetch-manager-by-id"></a>
## Fetch manager based on id passed

<h4>This API help us to get record of particular manager based on id passed. </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
     /v3/api/admin/manager_byID
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
        "id":82
         }
```
 
 > ***Input***
```php
   {
    "data": [
        {
            "id": 82,
            "mid": 2,
            "username": "Sakshi Sawant",
            "email": "sakshi@therenalproject.com",
            "designation": "Manager",
            "phone": 0000006703,
            "emphone": 0000006703,
            "branch": "",
            "role": "Admin",
            "password": "c9d95957a598a7dd3db737ea505146f4",
            "profile_pic": "MID82.jpg",
            "active": 1,
            "remove": 0,
            "ban": 0
        }
    ]
}
```

---




> ***Required : Form data*** 
```php
         {
        "id":88
         }
```

---

 > ***Response body : 404 , Not Found***
```php
    {
    "message": "No record found"
    }
```










