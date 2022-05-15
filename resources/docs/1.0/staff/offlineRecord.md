<a name="offline-record-staff"></a>
# Offline record in Staff

---



<a name="fetch-patient-by-branch_code-in-staff"></a>
## Fetch Patient by Branch code

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return a list of patient based on the branch code passd.</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
   /v3/api/staff/patientListByBranch
```
---


> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
| branch_name | varchar(255) |
---

---

> ***Request data : JSON***

```php
 {
   "branch":"SDC"
 }
```
---


> ***Response body : 200 success***

```php
{
    "message": "patient fetched",
    "data": [
        {
            "pid": 15,
            "patient_id": "PIDPH15",
            "patient_name": "p erwerw"
        },
        {
            "pid": 78,
            "patient_id": "PIDPH78",
            "patient_name": "Mushtaque khan "
        }
    ]
}
```


> ***Response body : 404 Not Found***

```php
   {
    "message": "not found"
   }
```
---




<!-- --------------------------------------------------------------  -->




<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="return-staff-by-branch-code-in-staff"></a>
## Staff list based on branch code 

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This end point allow you to return a list of staff based on the brach code selected.</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/staff/offlineRecordFetchOne
```



> ***Request data : JSON**

```php
   {
    "branch_name":"SDC"
   }
```
---


> ***Response body : 200 , Success***

```php
    {
        "message": "staff fetched",
        "data": [
            {
                "StaffId": 1,
                "username": "Jaymala",
                "branch": "SDC"
            },
            {
                "StaffId": 25,
                "username": "Nitin Rathod",
                "branch": "SDC"
            }
        ]
    }
```
---

<!-- ---


> ***Request data : JSON**

```php
   {
    "branch_code":"SDAC"
   }
```
--- -->


> ***Response body : 404, Not Found***

```php
    {
        "message": "not found"
    }
```




<!-- --------------------------------------------------------------  -->




<hr style="border:2px solid gray;margin-top:120px"> </hr>



<a name="offline-record-patient-insert"></a>
## Offline Record patient insert

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This end point allow you to insert the patient record that were recorded offline.</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/staff/offlineRecordInsert
```
---




> ***Required body : Json data*** 

```php
   {
        "basic_details":{
            "patient_id":32,
            "opening_staff":"rewtr",
            "closing_staff":"wer",
            "start_time" : "01:02",
            "end_time" :  "12:43",
            "arrival_date" : "2020-10-10"
        },

        "pre_dialysis":{
            "bp_systolic" : 47,
            "bp_diasystolic"  : 74,
            "heart_rate" :47,
            "weight" : 47,
            "spo2"  : 77,
            "reused_dialyzer" :4,
            "dialyzer"  : 4,
            "reused_tubing" : 5,
            "machine_id" : "ER5645645",
            "scheduled_emergency" : "emergency",
            "access_av" : "adf",
            "bp_high" : 0,
            "bp_low" : 0,
            "nausea" : 0,
            "vomiting" : 0,
            "short_breath" : 1,
            "bleeding" : 1,
            "edema" : 0,
            "stomach_distend" : 0,
            "diarrhea" : 0,
            "other" : "any ",
            "remarks" : "any ",
            "site_condition" : " any",
            "explain" : " anything",
            "private":"yes or no"

        },

        "patient_parameter":[
            {
                "time" : "12:33:12",
                "bps" : 23,
                "bpd" : 23,
                "pulse" : 23,
                "uf_rate" : 23,
                "uf_volume" : 23,
                "bf_rate" : 324,
                "ap" : 23,
                "vp" : 23,
                "tmp" : 23,
                "kvt" : 23,
                "actions" : "any thing"
            },
                    {
                "time" : "12:33:12",
                "bps" : 23,
                "bpd" : 23,
                "pulse" : 23,
                "uf_rate" : 23,
                "uf_volume" : 23,
                "bf_rate" : 324,
                "ap" : 23,
                "vp" : 23,
                "tmp" : 23,
                "kvt" : 23,
                "actions" : "any thing"
            },
                    {
                "time" : "12:33:12",
                "bps" : 23,
                "bpd" : 23,
                "pulse" : 23,
                "uf_rate" : 23,
                "uf_volume" : 23,
                "bf_rate" : 324,
                "ap" : 23,
                "vp" : 23,
                "tmp" : 23,
                "kvt" : 23,
                "actions" : "any thing"
            },
                    {
                "time" : "12:33:12",
                "bps" : 23,
                "bpd" : 23,
                "pulse" : 23,
                "uf_rate" : 23,
                "uf_volume" : 23,
                "bf_rate" : 324,
                "ap" : 23,
                "vp" : 23,
                "tmp" : 23,
                "kvt" : 23,
                "actions" : "any thing"
            },
            {
                "time" : " ",
                "bps" : 0,
                "bpd" : 0,
                "pulse" : 0,
                "uf_rate" : 0,
                "uf_volume" : 0,
                "bf_rate" : 0,
                "ap" : 0,
                "vp" : 0,
                "tmp" : 0,
                "kvt" : 0,
                "actions" : " "
            },
            {
                "time" : " ",
                "bps" : 0,
                "bpd" : 0,
                "pulse" : 0,
                "uf_rate" : 0,
                "uf_volume" : 0,
                "bf_rate" : 0,
                "ap" : 0,
                "vp" : 0,
                "tmp" : 0,
                "kvt" : 0,
                "actions" : " "
            },
            {
                "time" : " ",
                "bps" : 0,
                "bpd" : 0,
                "pulse" : 0,
                "uf_rate" : 0,
                "uf_volume" : 0,
                "bf_rate" : 0,
                "ap" : 0,
                "vp" : 0,
                "tmp" : 0,
                "kvt" : 0,
                "actions" : " "
            }
        ],

        "post_dialysis":{
            "bp_systolic" : 41,
            "bp_diasystolic"  : 41,
            "heart_rate" : 14,
            "weight" : 41,
            "eh" : 2,
            "mode_of_transport" : "walk",
            "bp_high" : 0,
            "bp_low" : 0,
            "nausea" : 0,
            "vomiting" : 1,
            "short_breath" : 1,
            "bleeding" : 0,
            "edema" : 0,
            "hypoglycemia" : 1,
            "diarrhea" : 0,
            "other" : "any thing",
            "remarks" : "some texy",
            "dizziness" : 0,
            "orthostatic_hypotension" : 0,
            "early_discharge":0,

            
            
            "consumables":{
                "Heparin":{
                    "brand":"Samarth",
                    "count":3
                },
                "17g Needle":{
                    "brand":"Browndove",
                    "count":2
                }
            },
            "pharmaceuticals":{
                "Inj Dextrose 25% 100ml":{
                    "brand":"Biotech",
                    "count":2
                },
                "Inj Iron":{
                    "brand":"Sucrowel",
                    "count":10
                }
            },
            "others":{

            }
        }
    }

```
---

> ***Response body : 200 , Success***

```php
     {
        "message": "offline record saved saved"
    }


```

---












