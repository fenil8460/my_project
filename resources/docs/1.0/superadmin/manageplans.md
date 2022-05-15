<a name="plans-apis-for-super-admin"></a>
# Plans apis for super admin

---

- [Plans apis for super admin](#plans-apis-for-super-admin)
  - [For adding plans](#for-adding-plans)
  - [For editing plans](#for-editing-plans)
  - [Fetching plans](#fetching-plans)
  - [Enable or disable plans](#enable-or-disable-plans)

1. For adding plans .
2. For editing plans .
3. Fetching plans
4. Enable - disable plans


<a name="for-adding-plans"></a>
## For adding plans
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to add new plans</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/add/plan
```
---

> ***Required body : Json data*** 

```php
    {
        "plan_name":"abc",
        "stripe_id_monthly":"abc",
        "stripe_id_annually":"cdf",
        "price_monthly":"23",
        "price_annually":"345",
        "start_user":"23",
        "end_user":"56"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "plan saved successfully"
    }
```




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-editing-plans"></a>
## For editing plans
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to edit plans based on id</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/edit/plan/{plan_id}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|plan_id | integer |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "plan updated successfully"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid plan id"
    }
```
---




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="fetching-plans"></a>
## Fetching plans
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch all plans or fetch single plans , if plan id is passed in url parameter then single plan will fetched</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/fetch/plan/{plan_id?}
```

---

> ***Url parameter : Optional*** 

| Field | Type |
|------ | ---- |
|plan_id | integer |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "plan fetched",
        "data": {
            "id": 1,
            "plan_name": "abc",
            "stripe_id_monthly": "abc",
            "stripe_id_annually": "cdf",
            "price_monthly": 23,
            "price_annually": 345,
            "start_user": 23,
            "end_user": 56,
            "is_enabled": 1
        }
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invlaid plan id"
    }
```
---




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="enable-or-disable-plans"></a>
## Enable or disable plans
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to enable or disable plan by passing plan in url parameter </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/enable_disable/plan/{plan_id}
```
---

> ***Response body : 200 , Success***

```php
    {
        "message": "plan enabled successfully"
    }
```
---

> ***Response body : 200 , Success***

```php
    {
        "message": "plan disabled successfully"
    }
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|plan_id | integer |

---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invlaid plan id"
    }
```
---









 