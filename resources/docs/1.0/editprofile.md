<a name="edit-profile-api"></a>
# Edit profile api

---

- [Edit profile api](#edit-profile-api)
  - [Edit profile](#edit-profile)
  - [Change password](#change-password)

1. Edit profile 
2. Change password


<a name="edit-profile"></a>
## Edit profile 

---

<h4>This endpoint allows you edit your profile. </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/edit/profile
```
---

> ***Require body : Json data*** 

```php
    {
        "editProfile":"",
        "name":"rahul",
        "email":"upstaff1@gmail.com",
        "phone":"9869173400",
        "confirm_current_password":"upstaff1"
    }
```

---

> ***Response body : 200 , Success***

```php
    {
    "message": "profile updated"
    }
```
---


<!--  --------------------------------------------------------  -->




<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="change-password"></a>
## Change password

---

<h4>This endpoint allows you to change password . </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/change/password
```
---


> ***Require body : Json data*** 

```php
    {
        "changePassword": "",
        "current_password": "abc@123",
        "new_password": "xyz@123",
        "re_enter_password":"xyz@123"
    }
```

---

> ***Response body : 200 , Success***

```php
    {
        "message": "password updated"
    }
```
---





