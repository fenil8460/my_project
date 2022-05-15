<a name="employee-attendance-management-apis-for-admin"></a>
# Employee attendance management apis for admin

---

- [Employee attendance management apis for admin](#employee-attendance-management-apis-for-admin)
  - [For fetching employee attendance](#for-fetching-employee-attendance)
  - [For fetching employee location cordinates](#for-fetching-employee-location-cordinates)

1. For fetching employee attendance .
2. For fetching employee location cordinates .



<a name="for-fetching-employee-attendance"></a>
## For fetching employee attendance
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch employee attendance</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/employee/attendance
```
---

> ***Required body : Json data*** 

```php
    {
        "date":"2022-01-12"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "employee_attendance_fetched",
        "data": [
            {
                "username": "Super Admin",
                "branch": "",
                "clock_in": "10:38 AM",
                "clock_in_location": "",
                "present_location": null,
                "clock_out": null,
                "clock_out_location": null,
                "type": "",
                "map": {
                    "employee_id": "AID1",
                    "date": "2022-01-12"
                }
            },
            {
                "username": "rahul",
                "branch": "Pasaydan hospital",
                "clock_in": "09:32 AM",
                "clock_in_location": "Rajasthan Seva Sadan, Jharkhand, India, 831006",
                "present_location": "Rajasthan Seva Sadan, Jharkhand, India, 831006",
                "clock_out": null,
                "clock_out_location": null,
                "type": "gps",
                "map": {
                    "employee_id": "SIDPH40",
                    "date": "2022-01-12"
                }
            }
        ]
    }
```



<a name="for-fetching-employee-location-cordinates"></a>
## For fetching employee location cordinates
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch employee location cordinates</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/employee/attendance/map/
```
---

> ***Required body : Json data*** 

```php
    {
        "date":"2020-01-20",
        "employee_id":"AID1"
    }
```
---
> ***Response body : 200 , Success***

```php
    {
        "message": "coordinates fetched",
        "data": [
            {
                "coordinate": "25.794779,87.4702932"
            },
            {
                "coordinate": "25.794779,87.4702932"
            }
        ]
    }
```

