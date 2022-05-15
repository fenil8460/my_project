<a name="microcentre-apis-for-admin"></a>
# Microcentre apis for admin

---

- [Microcentre apis for admin](#microcentre-apis-for-admin)
  - [Adding new microcentre](#adding-new-microcentre)
  - [Getting all microcentre](#getting-all-microcentre)
  - [Getting single microcentre](#getting-single-microcentre)
  - [Deleting microcentre](#deleting-microcentre)
  - [Updating microcentre](#updating-microcentre)
  - [Get default stocks](#get-default-stocks)
  - [fetch last microcentre](#fetch-last-microcentre)
    


1. Adding new microcentre .
2. Editing microcentre .
3. Getting all microcentre .
4. Getting particular microcentre based on id .
4. Getting last microcentre .
4. Getting deleting microcentre based on id .
  


<!-- -->


<a name="adding-new-microcentre"></a>
## Adding new microcentre
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>
```php
     /v3/api/admin/add/microcentre 
```
---


<h4>This endpoint allows you to add new microcentre</h4>

---

> ***Required : Json data*** 
 
```php
    {
        "data": [
        {
            "date": "2021-08-27 11:49:16",
            "centre_name": "Pkk ert kkL asfd",
            "code": "PXk",
            "region": "Mumbai",
            "beds_count": 3,
            "registration_fee": 200,
            "normal_fee": 1250,
            "emergency_fee": 3000,
            "per_hour_fee": 200,
            "ap": 1,
            "amount": 0,
            "percentage": 15,
            "perdmy": "dialysis",
            "scheme": "yes",
            "m_scheduled": 1100,
            "m_emergency": 1100,
            "m_eh": 1
        },
        [
            {
                "centre_name": "PXk",
                "name": "house keeper abc",
                "amount": 453,
                "perdmy": "dropdown"
            },
            {
                "centre_name": "PXk",
                "name": "house keeper abc",
                "amount": 453,
                "perdmy": "dropdown"
            }
        ],
        [
            {
            "consumables": {
                "16g Needle": {
                    "billable": 0
                },
                "17g Needle": {
                    "billable": 0
                },
                "Bed Sheet": {
                    "billable": 0
                },
                "Gloves": {
                    "billable": 0
                },
                "Blood Tubing": {
                    "billable": 1
                },
                "Chemical M/C": {
                    "billable": 0
                },
                "Chemical D&T": {
                    "billable": 0
                },
                "Dialyzer": {
                    "billable": 1
                },
                "Heparin": {
                    "billable": 0
                },
                "IV Set": {
                    "billable": 0
                },
                "NS1000 ML": {
                    "billable": 0
                },
                "NS500 ML": {
                    "billable": 0
                },
                "Syringe 10 ML": {
                    "billable": 0
                },
                "Syringe 5 ML": {
                    "billable": 0
                },
                "A/B part": {
                    "billable": 0
                },
                "Transducer protector": {
                    "billable": 0
                }
            }
            },
            {
            "pharmaceuticals": {
                "Inj Dextrose 25% 100ml": {
                    "billable": 1
                },
                "Inj Multi Vit": {
                    "billable": 1
                },
                "EPO 4K": {
                    "billable": 1
                },
                "EPO 10K": {
                    "billable": 1
                },
                "Inj Iron": {
                    "billable": 1
                },
                "Inj Antibiotics": {
                    "billable": 1
                },
                "Inj Amino Acid": {
                    "billable": 1
                }
            }
        }

        ]
    ]
    }
```

---


> ***Response body : 200 , success***

```php
    {
    "message": "Microcentre inserted successfully"
    }
```


<!-- -----------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="getting-all-microcentre"></a>
## Getting all microcentre
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch all microcentre.</h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/view/microcentre/
```
---

> ***Response body : 200 , success***

```php
    {
    "message": "fetching centres , success",
    "data": [
        {
            "id": 1,
            "date": "2021-02-25 08:12:48",
            "centre_name": "Mangalmurti Hospital",
            "code": "MMH",
            "region": "Mumbai",
            "beds_count": 4,
            "registration_fee": 0,
            "normal_fee": 1200,
            "emergency_fee": 4000,
            "per_hour_fee": 1000,
            "ap": 1,
            "amount": 0,
            "percentage": 16,
            "perdmy": "dialysis",
            "scheme": "no",
            "m_scheduled": 0,
            "m_emergency": 0,
            "m_eh": 0
        },
        {
            "id": 2,
            "date": "2021-02-25 08:12:48",
            "centre_name": "Shivam Dialysis Center",
            "code": "SDC",
            "region": "Mumbai",
            "beds_count": 11,
            "registration_fee": 0,
            "normal_fee": 1200,
            "emergency_fee": 1200,
            "per_hour_fee": 200,
            "ap": 1,
            "amount": 0,
            "percentage": 16,
            "perdmy": "dialysis",
            "scheme": "yes",
            "m_scheduled": 1100,
            "m_emergency": 1100,
            "m_eh": 0
        }
    ]
    }
```




<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="getting-single-microcentre"></a>
## Getting single microcentre
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch single microcentre based on centre's id.</h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/show/single/microcentre/{microcentre_id}
```

---

> ***Url Parameter : Required*** 
 
| Field | Type | 
|------ | ---- |
| id | integer |

---

> ***Response body : 200 , success***

```php
    {
        "success": "record found",
        "data": {
            "id": 1,
            "date": "2021-02-25 08:12:48",
            "centre_name": "Mangalmurti Hospital",
            "code": "MMH",
            "region": "Mumbai",
            "beds_count": 4,
            "registration_fee": 0,
            "normal_fee": 1200,
            "emergency_fee": 4000,
            "per_hour_fee": 1000,
            "ap": 1,
            "amount": 0,
            "percentage": 16,
            "perdmy": "dialysis",
            "scheme": "no",
            "m_scheduled": 0,
            "m_emergency": 0,
            "m_eh": 0
        }
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
    "not_found": "request record not found with this id "
    }
```




<!-- ----------------------------------------------------------  -->






<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="deleting-microcentre"></a>
## Deleting microcentre

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to delete microcentre based on centre's id.</h4>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/delete/microcentre/{microcentre_id}
```

---

> ***Url parameter : Required** 
 
| Field | Type | 
|------ | ---- |
| id | integer |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "centre deleted successfully"
    }
```

---

> ***Response body : 404 , Not found***

```php
    {
    "message": "centre not found"
    }
```



<!-- ------------------------------------------------------------  -->


---
---
<hr style="border:2px solid gray"> </hr>

<a name="updating-microcentre"></a>
## Updating microcentre

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to update microcentre based on id </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/edit/microcentre/{microcentre_id}
```
---

> ***Url parameter : Required*** 
 
| Field | Type | 
|------ | ---- |
| id | integer |

---

> ***Required body : Json data*** 
 
```php
{
    "data": [
        {
            "date": "2021-08-28 11:49:16",
            "region": "Mumbai",
            "beds_count": 4,
            "registration_fee": 200,
            "normal_fee": 1250,
            "emergency_fee": 3000,
            "per_hour_fee": 200,
            "ap": 1,
            "amount": 0,
            "percentage": 15,
            "perdmy": "dialysis",
            "scheme": "yes",
            "m_scheduled": 1100,
            "m_emergency": 1100,
            "m_eh": 1
        },
        
        [{
                "centre_name": "PKk",
                "name": "house keeper abc",
                "amount": 453,
                "perdmy": "dropdown"
            },
            {
                "centre_name": "PKk",
                "name": "house keeper abc",
                "amount": 453,
                "perdmy": "dropdown"
            }
        ]
    ]
}

```
---

> ***Response body : 200 , Success***

```php
    {
    "message": "centre deleted successfully"
}
```
---

> ***Response body : 404 , Not found***

```php
    {
    "message": "not found"
    }
```
---



<!-- ------------------------------------------------------------  -->




---
---
<hr style="border:2px solid gray"> </hr>

<a name="updating-microcentre"></a>
## Get default stocks

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch defaults stocks </h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/get/default/stocks
```
---

---

> ***Response body : 200 , Success***

```php
   {
    "message": "default stocks",
    "stocks": {
        "consumables": {
            "16g Needle": {
                "billable": 0
            },
            "17g Needle": {
                "billable": 0
            },
            "Bed Sheet": {
                "billable": 0
            },
            "Gloves": {
                "billable": 0
            },
            "Blood Tubing": {
                "billable": 1
            },
            "Chemical M/C": {
                "billable": 0
            },
            "Chemical D&T": {
                "billable": 0
            },
            "Dialyzer": {
                "billable": 1
            },
            "Heparin": {
                "billable": 0
            },
            "IV Set": {
                "billable": 0
            },
            "NS1000 ML": {
                "billable": 0
            },
            "NS500 ML": {
                "billable": 0
            },
            "Syringe 10 ML": {
                "billable": 0
            },
            "Syringe 5 ML": {
                "billable": 0
            },
            "A/B part": {
                "billable": 0
            },
            "Transducer protector": {
                "billable": 0
            }
        },
        "pharmaceuticals": {
            "Inj Dextrose 25% 100ml": {
                "billable": 1
            },
            "Inj Multi Vit": {
                "billable": 1
            },
            "EPO 4K": {
                "billable": 1
            },
            "EPO 10K": {
                "billable": 1
            },
            "Inj Iron": {
                "billable": 1
            },
            "Inj Antibiotics": {
                "billable": 1
            },
            "Inj Amino Acid": {
                "billable": 1
            }
        }
    }
    }

```

---



<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="fetch-last-microcentre"></a>
## fetch last microcentre

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch last microcentre </h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/last/microcentre/
```
---


> ***Response body : 200 , success***

```php
{
    "success": "last  centre details",
    "last_data": {
        "id": 67,
        "date": "2021-08-27 11:49:16",
        "centre_name": "PkkkkkkL asfd",
        "code": "PRk",
        "region": "Mumbai",
        "beds_count": 3,
        "registration_fee": 200,
        "normal_fee": 1250,
        "emergency_fee": 3000,
        "per_hour_fee": 200,
        "ap": 1,
        "amount": 0,
        "percentage": 0,
        "perdmy": "dialysis",
        "scheme": "yes",
        "m_scheduled": 1100,
        "m_emergency": 1100,
        "m_eh": 1
    }
}
```
---


