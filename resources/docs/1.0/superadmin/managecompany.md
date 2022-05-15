<a name="manage-company-apis-for-super-admin"></a>
# Manage company apis for super admin

---

- [Manage company apis for super admin](#manage-company-apis-for-super-admin)
  - [For adding company details](#for-adding-company-details)
  - [For editing company details](#for-editing-company-details)
  - [Fetching company plans](#fetching-company-plans)
  - [Enable or disable company](#enable-or-disable-company)
  - [Delete company](#delete-company)

1. For adding company details .
2. For editing company details .
3. Fetching company details
4. Enable - disable company details
5. delete company details


<a name="for-adding-company-details"></a>
## For adding company details
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to add new company details</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/add/company/details
```
---

> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
| company_name | string
| company_logo | file (ext:jpg,png,jpeg , max-size:1000)
| package | number
| login | number

---

> ***Response body : 200 , Success***

```php
    {
        "message": "company details saved successfully"
    }
```




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-editing-plans"></a>
## For editing company details
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to edit comapny details based on id . you can edit any of the filed or leave any fields as per your requirement</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/edit/company/details/{company_Id}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|company_Id | integer |

---


> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
| company_name | string
| company_logo | file (ext:jpg,png,jpeg , max-size:1000)
| package | number
| login | number
| is_active | number

---

> ***Response body : 200 , Success***

```php
    {
        "message": "company details updated successfully"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid company id"
    }
```
---








<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="patient-bill"></a>
## Fetching company plans
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch all company details or fetch single company details , if company id is passed in url parameter then single details will fetched</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/fetch/company/details/{company_id?}
```

---

> ***Url parameter : Optional*** 

| Field | Type |
|------ | ---- |
|company_id | integer |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "data fetched",
        "data": {
            "id": 1,
            "company_name": "abc",
            "company_logo": "abc.jpg",
            "login": 23,
            "package": 1,
            "created_on": "2022-01-05 12:59:11",
            "is_active": 1,
            "is_deleted": 0
        }
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invlaid company id"
    }
```
---






<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="enable-or-disable-company"></a>
## Enable or disable company 
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to enable or disable company details by passing company id in url parameter </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/enable_disable/company/details/{company_id?}
```

---

> ***Response body : 200 , Success***

```php
    {
        "message": "company enabled successfully"
    }
```
---

> ***Response body : 200 , Success***

```php
    {
        "message": "company disabled successfully"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invlaid company id"
    }
```
---





<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="enable-or-disable-company"></a>
## Delete company 
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to delete company by passing company id in url parameter </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/delete/company/details/{company_id?}
```

---

> ***Response body : 200 , Success***

```php
    {
        "message": "company deleted"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invlaid company id"
    }
```
---


