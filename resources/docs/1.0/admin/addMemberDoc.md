# API for Doctor (Add Member)

---
- [API for Doctor (Add Member)](#api-for-doctor-add-member)
  - [Add new doctor](#add-new-doctor)
  - [Edit Existing Doctor](#edit-existing-doctor)
  - [Delete existing doctor](#delete-existing-doctor)
  - [View Doctor List](#view-doctor-list)
  - [Fetch doctor based on id passed](#fetch-doctor-based-on-id-passed)
  - [## Ban or unban an existing doctor](#-ban-or-unban-an-existing-doctor)
  - [## Search manager by username, phone etc](#-search-manager-by-username-phone-etc)


1. Add new doctor
2. Edit Existing Doctor
3. Delete existing doctor
4. View Doctor List
5. Fetch doctor based on id passed
6. Ban or unban an existing doctor
7. Search manager by username, phone etc



  
<a name="add-new-doctor"></a>
## Add new doctor

<h4>This Api allow us to add a new doctor</h4>


---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/admin/insertDoctor
```
---

> ***Required body : Form data*** 

| Field | Type |value
|------ | ---- |----
| date | datetime |
| username | varchar(70) | 
| branch | varchar(400) |
| speciality | varchar(30) |
| phone | bigint(20) |
| emphone | bigint(20) |
| email | varchar(100)|
| new_patient | int |
| emergency_pay | int |
| scheduled_pay | int |
| profile_pic | varchar(100)|
| amount | float |
| perdmy | varchar(20) |
| password | varchar(255) |
| log | varchar(150) |
| time | datetime |  


---
---

> ***Request data : JSON ***

```php
      {
        "date":"2021-07-08 06:29:34",
        "username":"Rahul Pandey",
        "branch":"MMH",
        "speciality":"nephrologist",
        "phone":"963698595",
        "emphone":"9685748574",
        "email":"rahul90@gmail.com",
        "new_patient":55,
        "profile_pic":"me.jpeg",
        "emergency_pay":8500,
        "scheduled_pay":85,
        "amount":500,
        "perdmy":"monthly",
        "password":"Password@345",
        "log":"Super admin Paras",
        "time":"2021-07-08 06:29:34"
       }

```

---
> ***Response : 200 , success***

```php
   {
    "message": "Data Insertion success"
   }

```
---

 > ***Response body : Field Exist***
```php
    {
    "message": "The phone has already been taken."
   }
```

---


 > ***Response body : Field Exist***
```php
   {
    "message": "The email has already been taken."
   }
```


<!-- -----------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin:120px 0px"> </hr>

<a name="Edit-existing-doctor"></a>
## Edit Existing Doctor

<h4>This API help us edit the details of the existing doctor based on the id passed.</h4>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/admin/editDoctor
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
| branch | varchar(400) |
| speciality | varchar(30) |
| perdmy | varchar(20) |
| amount | float |
| log | varchar(150) | 
| time | datetime |  

---


> ***Request data : JSON ***

```php
 {
    "id":2,
    "username":"Funs ngadu",
    "email":"banu78@gmail.com",
    "phone":"9685748574",
    "emphone":"963258741",
    "branch":"MMH",
    "speciality":"Nephrologist",
    "perdmy":"monthly",
    "amount":40000,
    "log":"Super Admin Paras",
    "time":"2021-07-08 06:29:34"
}
```
---

> ***Response : 200 , success***

```php
    {
    "message": "Success"
    }
```
---

> ***Required : Form data*** 
```php
      {
        "id":2,
        "username":"Fun  gadu",
        "email":"bangadu78@gmail.com",
        "phone":"9685748574",
        "emphone":"963258741",
        "branch":"MMH",
        "speciality":"Nephrologist",
        "perdmy":"monthly",
        "amount":40000,
        "log":"Super Admin Paras",
        "time":"2021-07-08 06:29:34"
     }
```
 
 ---
 > ***Response body : Field Exist***
```php
   {    
    "message": "The email has already been taken."
    }
```
---

 > ***Response body : Field Exist***
```php
  {
   "message": "The phone has already been taken."
  }
```



<!-- ------------------------------------------------------------  -->

<hr style="border:2px solid gray;margin:120px 0px"> </hr>


<a name="Delete-existing-doctor"></a>
## Delete existing doctor

<h4>This API help us to delete an existing doctor based on the id passed. </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

---
```php
     /v3/api/admin/deleteDoctor
```
---
> ***Required body : Form data*** 

| Field | Type |value
|------ | ---- |----
| id | integer |
| log | varchar(150) | 
| time | datetime |  


---

> ***Request data : JSON ***

```php
  {
    "id":5,
    "log":"Super Admin Paras",
    "time":"2021-07-08 06:29:34"
}
```
---

> ***Response : 200 , success***

```php
  {
    "message": "Deletion  Success"
  }
```

---
---

> ***Request data : JSON ***

```php
  {
    "id":5,
    "log":"Super Admin Paras",
    "time":"2021-07-08 06:29:34"
}
```

---

 > ***Response body : 404 , Not Found***
```php
   {
    "message": "No Record found"
   }
```


<!-- ----------------------------------------------------------  -->






<hr style="border:2px solid gray;margin:120px 0px"> </hr>


<a name="list-doctor"></a>
## View Doctor List

<h4>This API help us to show the list of doctor with their other details.</h4>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>
```php
    /v3/api/admin/viewDoctor
```
---
 
 > ***Response body : 200, Success***
```php
   {
    "data": [
        {
            "id": 1,
            "date": "2020-12-17 02:25:47",
            "username": "Dr Akansha ",
            "branch": "MMH,SDC,RH",
            "speciality": "Nephrologist",
            "phone": 9300000058,
            "emphone": 0000000971,
            "email": "d1@trp.org",
            "profile_pic": "Empty.jpg",
            "new_patient": 150,
            "emergency_pay": 300,
            "scheduled_pay": 100,
            "amount": 0,
            "perdmy": "dialysis",
            "active": 1,
            "remove": 0,
            "ban": 1,
            "password": "c9d95957a598a7dd3db737ea505146f4"
        },
        {
            "id": 2,
            "date": "2020-12-17 05:56:15",
            "username": "Fun  gadu",
            "branch": "MMH",
            "speciality": "Nephrologist",
            "phone": 00000748574,
            "emphone": 000258741,
            "email": "bangadu78@gmail.com",
            "profile_pic": "Empty.jpg",
            "new_patient": 0,
            "emergency_pay": 0,
            "scheduled_pay": 0,
            "amount": 40000,
            "perdmy": "monthly",
            "active": 1,
            "remove": 0,
            "ban": 0,
            "password": "43cf0e644bc499b253da515ee6e71363"
        }
    ]
}
```



<!-- ------------------------------------------------------------  -->


---
---
<hr style="border:2px solid gray"> </hr>

<a name="Fetch-doctor-by-id"></a>
## Fetch doctor based on id passed

<h4>This API help us to get record of particular doctor based on id passed. </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>


```php
    /v3/api/admin/doctor_byID

```
---

> ***Required : url param*** 
 
| Field | Type | 
|------ | ---- |
| id | integer |

---
---
> ***Required : Form data*** 
```php
      {
       "id":7
      }
```
---
 
 > ***Response body : 404 , Not Found***
```php
    {
    "message": "No record found"
   }
```

---

> ***Required : Form data*** 
```php
      {
      "id":1    
      }
```
---
 
 > ***Response body : 200, Success***
```php
    {
    "data": [
        {
            "id": 1,
            "date": "2020-12-17 02:25:47",
            "username": "Dr  Singh",
            "branch": "MMH",
            "speciality": "Nephrologist",
            "phone": 93157000000,
            "emphone": 0000860971,
            "email": "d1@trp.org",
            "profile_pic": "Empty.jpg",
            "new_patient": 150,
            "emergency_pay": 300,
            "scheduled_pay": 100,
            "amount": 0,
            "perdmy": "dialysis",
            "active": 1,
            "remove": 0,
            "ban": 0,
            "password": "c9d95957a598a7dd3db737ea505146f4"
        }
    ]
}
```




<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin:120px 0px"> </hr>


<a name="Ban-or-Unban-Doctor"></a>
## Ban or unban an existing doctor
---

<h4>This API help  to ban or unban an existing doctor. </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
      /v3/api/admin/doctorBanPermit
```
---

> ***Required : url param*** 
 
| Field | Type | 
|------ | ---- |
| id | integer |
| ban | integer |
|log| varchar(150)  |
|time | datetime |


---


> ***Required : Form data*** 
```php
      {
    "id":8,
    "ban":1,
    "log":"Super admin Paras",
    "time":"2021-07-08 06:29:34"
    }
```
---
 > ***Response body : 200, Success***
```php
   {
    "message": "Status Changed"
   }
```
---

> ***Required : Form data*** 
```php
     {
    "id":80,
    "ban":0,
    "log":"Super admin Paras",
    "time":"2021-07-08 06:29:34"
}
```

---

 > ***Response body : 404 , Not Found***
```php
   {
    "message": "No record found or Update Failure"
   }
```

<!-- ------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin:120px 0px"> </hr>


<a name="search-manager-based-on-username-phone-emphone"></a>
## Search manager by username, phone etc
---

<h4>This API help to search manager by username, phone, emphone etc. </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
    /v3/api/admin/getManagerByName
```
---

> ***Required : url param*** 
 
| Field | Type | 
|------ | ---- |
| username | varchar(70) |


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
            "id": 82,
            "mid": 2,
            "username": "Pooja Sawant",
            "email": "pooja@therenalproject.com",
            "designation": "Manager",
            "phone": 8779244703,
            "emphone": 8779244703,
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
            "username": "Rahul Sawant",
            "email": "rahul85@therenalproject.com",
            "designation": "Manager",
            "phone": 0000006703,
            "emphone": 0000000703,
            "branch": "",
            "role": "Doctor",
            "password": "c9d95957a598a7dd3db737ea505146f4",
            "profile_pic": "MID82.jpg",
            "active": 1,
            "remove": 0,
            "ban": 0
        },

```
---

> ***Request data : JSON ***

```php
  {
    "username":"xyz"
   }
```
---

 > ***Response body : 404 , Not Found***
```php
 {
    "message": "No record found"
 }
```





