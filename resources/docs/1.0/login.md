<a name="login-api"></a>
# Login api

---

- [Login api](#login-api)
  - [Email and password login](#email-and-password-login)
  - [Otp login](#otp-login)
  - [Logout](#logout)

1. Email and password login
2. otp login
3. Logout


<a name="email-and-password-login"></a>
## Email and password login

---

<h4>This endpoint allows you to login to your work area with email and password. </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/login
```
---

> ***Require body for email login: Form data*** 

| Field | Type |value|
|------ | ---- |-----|
|email|string|
|password|string|
|category|string|Admin/Doctor/Staff|
|manager|string|yes/no|

---


> ***Response body : 200 , Success***

```php
    {
        "success": " staff logged in ",
        "token": "5|1ct3ii0Qp7rN9Vbj31rtgerXrei3414n*gwfbY1dnNoI",
        "logged in": {
            "id": 40,
            "date": "2021-11-12 21:32:42",
            "username": "staff11174",
            "designation": "Senior Technician",
            "category": "Part-time",
            "branch": "PH",
            "phone": 3034330003,
            "emphone": 4355434567,
            "salary": 4555,
            "dmy": "month",
            "email": "stafff417@gmail.com",
            "profile_pic": "SIDAH40.jpg",
            "active": 1,
            "remove": 0,
            "ban": 0,
            "hd_patient": "no"
        }
    }
```
---


<!--  --------------------------------------------------------  -->




<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="otp-login"></a>
## Otp login

---

<h4>This endpoint allows you to login to your work area with phone number and otp . </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/login
```
---


> ***Require body for Otp login: Form data*** 

| Field | Type |
|------ | ---- |
|number|number|
|otp|null|

---

> ***Response body : 200 , Success***

```php
// otp responese
```
---

<!--  --------------------------------------------------------  -->




<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="logout"></a>
## Logout

---

<h4>This endpoint allows you to logout </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/logout
```
---







