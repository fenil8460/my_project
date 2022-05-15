<a name="activity_log-apis-for-admin"></a>
# Activity_log apis for admin

---

- [Activity_log apis for admin](#activity_log-apis-for-admin)
  - [For fetching activity log](#for-fetching-activity-log)
  - [For fetching activity log filter list](#for-fetching-activity-log-filter-list)

1. For fetching activity log .
2. For fetching activity log filter list .



<a name="for-fetching-activity-log"></a>
## For fetching activity log
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch activity logs based on fileter type and date , if none of the json filed is filled then it willl return all activity logs data</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/activityLog
```
---

> ***Required body : Json data*** 

```php
    {
        "filter_action":"logged in",
        "date":"2022-01-19"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "activity_logs_fetched",
        "data": [
            {
                "id": 5639,
                "log": "Super Admin (admin) has logged in as staff with email ",
                "action": "logged in",
                "time": {
                "date": "2022-01-19 10:51:43",
                "time": "2 hours ago"
                }
            },
            {
                "id": 5638,
                "log": "Super Admin(Admin) has logged In.",
                "action": "logged in",
                "time": {
                "date": "2022-01-19 10:51:43",
                "time": "2 hours ago"
                }
            }
        ]
    }
```



<a name="for-fetching-activity-log-filter-list"></a>
## For fetching activity log filter list
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch activity log filter list</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/activity_log_filter_list
```

---
> ***Response body : 200 , Success***

```php
{
    "message": "activity_log_filter_list_fetched",
    "data": [
        "Added machine",
        "Added microcentre",
        "Added stock",
        "amount paid",
        "Banned Staff"
    ]
}
```

