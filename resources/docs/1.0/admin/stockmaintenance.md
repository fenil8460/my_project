<a name = "stock-maintenance-apis-for-admin"></a>
# Stock maintenance apis for admin

---

- [Stock maintenance apis for admin](#stock-maintenance-apis-for-admin)
  - [For fetching stocks of particular branch](#for-fetching-stocks-of-particular-branch)
  - [For adding stocks](#for-adding-stocks)
  - [For deleting stocks](#for-deleting-stocks)
  - [For shifting stocks](#for-shifting-stocks)
  - [For removing stocks](#for-removing-stocks)

1. For fetching stocks of particular branch .
2. For adding stocks .
3. For deleting stocks .
4. For shifting stocks .
5. For removing stocks .

<!-- -----------------------------------------------------  -->

<a name="for-fetching-stocks-of-particular-branch"></a>
## For fetching stocks of particular branch
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch all the stocks of particular branch </h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/stock/maintenance/show/stock/{branch_code}
```

---

> ***Url parameter : Optional*** 

| Field | Type |
|------ | ---- |
|branch_code | string |


---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid branch name"
    }
```

---

> ***Response body : 200 , Success***

```php
    {
        "message": "available stock ",
        "consumable_stock_data": [
            {
                "product": "16g Needle",
                "brand": [
                    {
                        "brand_name": "DFF",
                        "cost": 87,
                        "private_selling_price": 0,
                        "mjpjay_selling_price": 0,
                        "gst": 8,
                        "category": "consumable",
                        "total": "50"
                    }
                ]
            },
            {
                "product": "A/B part",
                "brand": [
                    {
                        "brand_name": "",
                        "cost": 0,
                        "private_selling_price": 0,
                        "mjpjay_selling_price": 0,
                        "gst": 0,
                        "category": "consumable",
                        "total": "0"
                    }
                ]
            },
        ]
    }
```



<!-- -------------------------------------------------------  -->

<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-adding-stocks"></a>
## For adding stocks
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to edit machine</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/stock/maintainance/add/stocks/{branch_code}

```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|branch_code | string |


---

> ***Required body : json*** 

```php
{
    "data":[
        {
            "head_count":"",
            "branch_name": "PH",
            "product_name": "16g Needle",
            "date": "2021-07-14",
            "category": "consumable",
            "brand": "B2",
            "cost": 129,
            "gst": 0,
            "calculated_cost_price": 129,
            "arrived": 19,
            "available_count": 19,
            "total": "4565",
            "private_selling_price": 200,
            "mjpjay_selling_price": 0   
        },
        {
            "head_count":"687",
            "branch_name": "PH",
            "product_name": "Blood Tubing",
            "date": "2021-07-14",
            "category": "consumable",
            "brand": "dove1",
            "cost": 129,
            "gst": 0,
            "calculated_cost_price": 129,
            "arrived": 12,
            "available_count": 112,
            "total": "543450",
            "private_selling_price": 200,
            "mjpjay_selling_price": 0   
        },
    ]
} 

```

---


> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid branch name"
    }
```
---


> ***Response body : 200 , Success***

```php
    {
        "message": {
            "added": [
                "16g Needle"
            ],
            "mot_added": [
                "Blood Tubing",
                "17g Needle"
            ]
        }
    }
```





<!-- ------------------------------------------  -->



<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-deleting-stocks"></a>
## For deleting stocks
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to delete stocks based on product name and branch  </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/stock/maintainance/delete/stocks/{branch_code}

```
---

> ***Url parameter : Optional*** 

| Field | Type |
|------ | ---- |
|branch_code | string |

---

---

> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|brand | string |
|product_name | string |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "stock deleted"
    }
```

---


> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid branch name"
    }
```





<!-- --------------------------------------------------  -->
<!-- --------------------------------------------------  -->
<!-- --------------------------------------------------  -->
<!-- --------------------------------------------------  -->
<!-- --------------------------------------------------  -->
<!-- --------------------------------------------------  -->
<!-- --------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-shifting-stocks"></a>
## For shifting stocks
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to shift stocks from one branch to another</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/stock/maintainance/shift/stock/
```
---

> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
| from | string |
| to | string |
| product | string |
| brand | string |
| count | number |

---

> ***Response body : 200 , Success***

```php
    {
    "message": "shifted 6 stocks"
    }
```




<!-- --------------------------------------------------------  -->

<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="for-removing-stocks"></a>
## For removing stocks
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>
 
 ---

<h4>This endpoint allows you to </h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/stock/maintainance/add/stocks/{branch_code}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|branch_code | string |

---

> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|count | number |
|brand | string |
|product_name | string |

---

> ***Response body : 404 , Not found***

```php
    {
    "message": "product not found"
    }
```

---

> ***Response body : 200 , Success***

```php
    {
    "message": "removed 4 stocks"
    }
```
```
