<a name="branch-details-api-for-staff"></a>
# Branch details api for staff

---

- [Branch details api for staff](#branch-details-api-for-staff)
  - [Fetch branch details](#fetch-branch-details)

1. Fetch branch details


<a name="fetch-branch-details"></a>
## Fetch branch details

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch current branch details</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/view/branch/details/
```
---


> ***Response body : 200 , Success***

```php
    {
        "message": "success , fetched branch details",
        "data": {
            "centre_name": "Pasaydan hospital",
            "code": "PH",
            "normal_fee": 1200,
            "emergency_fee": 4000,
            "registration_fee": 200,
            "per_hour_fee": 1000
        }
    }
```
---




