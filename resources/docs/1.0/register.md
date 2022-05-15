<a name="register-apis"></a>
# Register apis

---

- [Register apis](#register-apis)
  - [For registering as staff](#for-registering-as-staff)
  - [For registering as admin](#for-registering-as-admin)
  - [For registering as doctor](#for-registering-as-doctor)

1. Register as staff
2. Registering as admin
3. Registering as doctor


<a name="for-registering-as-staff"></a>
## For registering as staff

---

<h4>This endpoint allows you to get registered as staff</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/register
```
---

> ***Require body for email login: Form data*** 

| Field | Type |Value
|------ | ---- |-----
|username|string|
|branch|string|
|phone|number|
|emphone|number|
|email|string|
|password|string|
|category|string|
|designation|string|
|profile_pic|file|jpg/png/jpeg

---

> ***Response body : 200 , Success***

```php
    {
        "success": "registered successfully"
    }
```
---



<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-registering-as-admin"></a>
## For registering as admin

---

<h4>This endpoint allows you to get registered as admin</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/register
```
---

> ***Require body for email login: Form data*** 

| Field | Type |Value
|------ | ---- |-----
|username|string
|phone|number
|emphone|number
|email|string
|password|string
|profile_pic|file|jpg/png/jpeg


---

> ***Response body : 200 , Success***

```php
    {
        "success": "registered successfully"
    }
```
---




<!-- ---------------------------------------------------------  -->


<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-registering-as-doctor"></a>
## For registering as doctor

---

<h4>This endpoint allows you to get registered as doctor</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/register
```
---

> ***Require body for email login: Form data*** 

| Field | Type |Value
|------ | ---- |-----
|username|string|
|phone|number|
|emphone|number|
|email|string|
|password|string|
|profile_pic|file|jpg/png/jpeg

---

> ***Response body : 200 , Success***

```php
    {
        "success": "registered successfully"
    }
```
---




