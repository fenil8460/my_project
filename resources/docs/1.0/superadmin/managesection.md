<a name="manage-section-apis-for-super-admin"></a>
# Manage section apis for super admin

---

- [Manage section apis for super admin](#manage-section-apis-for-super-admin)
  - [For adding section](#for-adding-section)
  - [For editing section](#for-editing-section)
  - [Fetching sections](#fetching-sections)

1. For adding section .
2. For editing section .
3. Fetching section


<a name="for-adding-section"></a>
## For adding section
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to add new new section if any new middleware is introduced</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/add/section
```
---

> ***Required body : Json data*** 

```php
    {
        "section":"testing",
        "plan_id":2
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "section saved successfully"
    }
```




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-editing-section"></a>
## For editing section
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to edit section based on id</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/edit/section/{section_id?}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|section_id | integer |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "section updated successfully"
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid section id"
    }
```
---




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="fetching-sections"></a>
## Fetching sections
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch all sections or fetch single section , if section id is passed in url parameter then single section will fetched</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/fetch/section/{section_id?}
```

---

> ***Url parameter : Optional*** 

| Field | Type |
|------ | ---- |
|section_id | integer |

---

> ***Response body : 200 , Success***

```php
        {
            "id": 3,
            "plan_id": 3,
            "section": "activityLog"
        },
        {
            "id": 4,
            "plan_id": 2,
            "section": "doctorGraph"
        }
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invlaid section id"
    }
```
---



 