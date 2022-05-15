<a name = "machine-apis-for-admin"></a>
# Machine apis for admin

---

- [Machine apis for admin](#machine-apis-for-admin)
  - [For adding new machine](#for-adding-new-machine)
  - [For editing machine](#for-editing-machine)
  - [For Getting machines](#for-getting-machines)
  - [For deleting machine](#for-deleting-machine)
  - [For ban or unban machine](#for-ban-or-unban-machine)

1. For adding new machine .
2. For editing machine .
3. For deleting machine .
4. For getting machine .
5. For ban or unban machine .

<!-- -----------------------------------------------------  -->

<a name="for-adding-new-machine"></a>
## For adding new machine
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to add new machine</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/add/microcentre 
```

---

> ***Required body : Form data*** 

| Field | Type |Value
|------ | ---- |-----
|dmy_machine|string|day/month/year|
|provider|string|
|counter|string|
|emi|string|
|machine_type|string|
|machine_serial_number|string|
|installation_date|date|

---

> ***Response body : 422 , Unprocessable Entity***

```php
    {
    "message": "machine serial must be unique",
    }
```

---

> ***Response body : 200 , Success***

```php
    {
    "message": "machine inserted"
    }
```



<!-- -------------------------------------------------------  -->

<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-editing-machine"></a>
## For editing machine
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to edit machine</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/edit/machine/{machine_id}

```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|machine_id | integer |

---

> ***Required body : Form body*** 

| Field | Type |Value
|------ | ---- |-----
|dmy_machine|string|day/month/year|
|provider|string|
|counter|number|
|emi|number|
|machine_type|string|
|machine_serial_number|number|
|installation_date|date|
|bn|string|

---

> ***Response body : 404 , Not found***

```php
    {
    "message": "machne not found"
    }
```
---

> ***Response body : 422 , Unprocessable Entity***

```php
    {
    "message": "machine serial must be unique",
    }
```
---

> ***Response body : 200 , Success***

```php
    {
    "message": "machine updated successfully"
    }
```





<!-- ------------------------------------------  -->



<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-getting-machines"></a>
## For Getting machines
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you fetch all machines as well as single machne . Single machine will be fetched if  machine id is provided in the url , otherwise all machine will be fetched </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/view/machine/{machine_id}

```
---

> ***Url parameter : Optional*** 

| Field | Type |
|------ | ---- |
|machine_id | integer |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "Machines found",
    "data": [
        {
            "machine_id": 6,
            "code": "PH",
            "provider": "dhritesh  kumar",
            "installation_date": "2020-10-10",
            "machine_type": "Fresenius 4008H",
            "machine_serial_number": "555554534",
            "emi": 2,
            "dmy_machine": "year",
            "counter": 55555,
            "ban": 0
        }
    ]
    }
```

---

> ***Response body : 200 , Success***

```php
    {
    "message": "all Machines",
    "data": [
        {
            "machine_id": 6,
            "code": "PH",
            "provider": "dhritesh  kumar",
            "installation_date": "2020-10-10",
            "machine_type": "Fresenius 4008H",
            "machine_serial_number": "555554534",
            "emi": 2,
            "dmy_machine": "year",
            "counter": 55555,
            "ban": 0
        },
        {
            "machine_id": 8,
            "code": "PH",
            "provider": "dhritesh  kumar",
            "installation_date": "2020-10-10",
            "machine_type": "Fresenius 4008H",
            "machine_serial_number": "55555",
            "emi": 2,
            "dmy_machine": "year",
            "counter": 55555,
            "ban": 0
        },
    ]
    }
```

> ***Response body : 404 , Not found***

```php
    {
    "message": "machine not found"
    }
```




<!-- --------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-deleting-machine"></a>
## For deleting machine
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to delete machine based on machine id</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/delete/machine/{machine_id}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|machine_id | integer |

---

> ***Response body : 404 , Not found***

```php
    {
    "message": "machine not found"
    }
```
---

> ***Response body : 200 , Success***

```php
    {
    "message": "machine Deleted successfully"
    }
```




<!-- --------------------------------------------------------  -->

<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-ban-or-unban-machine"></a>
## For ban or unban machine
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>
 
 ---

<h4>This endpoint allows you to ban or unban machine based on machine id</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/ban_unban/machine/{machine_id}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|machine_id | integer |

---

> ***Response body : 404 , Not found***

```php
    {
    "message": "machine not found"
    }
```

---

> ***Response body : 200 , Success***

```php
    {
    "message": "machine banned successfully"
    }
```
---

> ***Response body : 200 , Success***

```php
    {
    "message": "machine unbanned successfully"
    }
```
