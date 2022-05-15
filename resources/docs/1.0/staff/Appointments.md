<a name="upcoming-appointment-apis-for-staff"></a>
# Upcoming appointment apis for staff

---

- [Upcoming appointment apis for staff](#upcoming-appointment-apis-for-staff)
  - [Get upcoming Appointments](#get-upcoming-appointments)
  - [Get upcoming appointments by id](#get-upcoming-appointments-by-id)
  - [update upcoming appointments](#update-upcoming-appointments)

1. Get upcoming Appointments
2. Get upcoming appointments by id
3. update upcoming appointments


<a name="get-upcoming-appointments"></a>
## Get upcoming Appointments

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to get upcoming appointment based on staff branch name .</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/upcomingAppointment
```
---


> ***Response body : 200 , Success***

```php
    {
        "data": [
            {
                "id": 2,
                "patient_id": 28,
                "name": "Komal vast",
                "date": "2022-01-21 05:21:31",
                "slot": 3,
                "cancelled": 0,
                "beds_count": 3,
                "bed_id": 2
            }
        ]
    }
```
---






<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="get-upcoming-appointments-by-id"></a>
## Get upcoming appointments by id

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to get upcoming appointment based on appointment id  .</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/upcomingAppointmentById/{upcoming_app_id?}
```
---


> ***Required Parameter : Url Params*** 

| Field | Type |
|------ | ---- |
|upcoming_app_id|number|


---

> ***Response body : 200 , Success***

```php
{
    "data": [
        {
            "id": 2,
            "patient_id": 28,
            "name": "Komal vast",
            "date": "2022-01-21 05:21:31",
            "slot": 3,
            "cancelled": 0,
            "beds_count": 3,
            "bed_id": 2
        }
    ]
}
```
---








<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="update-upcoming-appointments"></a>
## update upcoming appointments

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to update upcoming appointment based on id .</h4>

> ***Endpoint***
<larecipe-badge type="Danger">PUT</larecipe-badge>

```php
    /v3/api/staff/updateUpcomingAppointment
```
---


> ***Required Body : Json data*** 

```php
    {
        "upcoming_app_id":1,
        "date":"2022-12-12",
        "slot":1,
        "bed_counter":2,
        "time":"12:13"
    }
```

---

> ***Response body : 200 , Success***

```php
    {
        "message": "Updated successfully"
    }
```
---




