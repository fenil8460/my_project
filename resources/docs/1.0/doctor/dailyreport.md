<a name="daily-reports-apis-for-doctor-portal"></a>
# Daily reports apis for doctor portal

---


- [Daily reports apis for doctor portal](#daily-reports-apis-for-doctor-portal)
  - [Fetch dialysis session sheet](#fetch-dialysis-session-sheet)
  - [Fetch patient report](#fetch-patient-report)
  - [Fetch patient name , id and branch dropdown](#fetch-patient-name--id-and-branch-dropdown)


1. Fetch dialysis session sheet
2. Fetch patient report
3. Fetch patient name , id and branch dropdown

<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="fetch-dialysis-session-sheet"></a>
## Fetch dialysis session sheet
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient's dialysis sheet based on appointment id .</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/doctor/view/session/sheet/{appointmetn_Id}
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|appointment_id | number |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "dialysis sheet fetched",
        "data": {
            "patient_detail": {
                "name": "Ashwin kadam",
                "patient_id": 25,
                "branch_name": "MMH"
            },
            "pre_dialysis": {
                "appointment_id": 25,
                "bp_systolic": 140,
                "bp_diasystolic": 80,
                "heart_rate": 72,
                "weight": 72,
                "spo2": 90,
                "reused_dialyzer": 0,
                "dialyzer": "Brown Dove B7",
                "reused_tubing": 0,
                "bp_high": 0,
                "bp_low": 0,
                "nausea": 0,
                "vomiting": 0,
                "short_breath": 0,
                "bleeding": 0,
                "edema": 0,
                "stomach_distend": 0,
                "diarrhea": 0,
                "other": "Normal",
                "technician": "SIDMMH2",
                "machine_id": 7,
                "scheduled_emergency": "scheduled",
                "access_av": "avf",
                "remarks": "No",
                "site_condition": "yes",
                "explain": "No",
                "private": "yes"
            },
            "post_dialysis": {
                "appointment_id": 25,
                "bp_systolic": 140,
                "bp_diasystolic": 80,
                "heart_rate": 75,
                "weight": 71,
                "eh": 0,
                "mode_of_transport": "Walk",
                "bp_high": 0,
                "bp_low": 0,
                "nausea": 0,
                "vomiting": 0,
                "short_breath": 0,
                "bleeding": 0,
                "edema": 0,
                "hypoglycemia": 0,
                "diarrhea": 0,
                "orthostatic_hypotension": 0,
                "dizziness": 0,
                "other": "Normal",
                "amount": 1400,
                "additional_amount": 0,
                "paid": 1400,
                "mop": "Cash",
                "technician": "SIDMMH2",
                "remarks": "No",
                "early_discharge": 0
            },
            "patient_parameter": [
                {
                    "sr": 169,
                    "id": 1,
                    "appointment_id": 25,
                    "time": "08:21:00",
                    "bps": 140,
                    "bpd": 80,
                    "pulse": 72,
                    "uf_rate": 50,
                    "uf_volume": 100,
                    "bf_rate": 300,
                    "ap": 90,
                    "vp": 86,
                    "tmp": 100,
                    "kv/t": 10,
                    "actions": "No"
                },
                {
                    "sr": 170,
                    "id": 2,
                    "appointment_id": 25,
                    "time": "09:09:00",
                    "bps": 140,
                    "bpd": 80,
                    "pulse": 72,
                    "uf_rate": 50,
                    "uf_volume": 440,
                    "bf_rate": 300,
                    "ap": 90,
                    "vp": 86,
                    "tmp": 100,
                    "kv/t": 10,
                    "actions": "No"
                },
                {
                    "sr": 171,
                    "id": 3,
                    "appointment_id": 25,
                    "time": "10:03:00",
                    "bps": 150,
                    "bpd": 80,
                    "pulse": 75,
                    "uf_rate": 50,
                    "uf_volume": 890,
                    "bf_rate": 300,
                    "ap": 90,
                    "vp": 86,
                    "tmp": 100,
                    "kv/t": 10,
                    "actions": "No"
                },
                {
                    "sr": 172,
                    "id": 4,
                    "appointment_id": 25,
                    "time": "10:29:00",
                    "bps": 150,
                    "bpd": 80,
                    "pulse": 75,
                    "uf_rate": 50,
                    "uf_volume": 1086,
                    "bf_rate": 300,
                    "ap": 90,
                    "vp": 86,
                    "tmp": 100,
                    "kv/t": 10,
                    "actions": "No"
                },
                {
                    "sr": 173,
                    "id": 5,
                    "appointment_id": 25,
                    "time": "11:22:00",
                    "bps": 150,
                    "bpd": 80,
                    "pulse": 75,
                    "uf_rate": 50,
                    "uf_volume": 1500,
                    "bf_rate": 300,
                    "ap": 90,
                    "vp": 86,
                    "tmp": 100,
                    "kv/t": 10,
                    "actions": "No"
                },
                {
                    "sr": 174,
                    "id": 6,
                    "appointment_id": 25,
                    "time": "00:00:00",
                    "bps": 0,
                    "bpd": 0,
                    "pulse": 0,
                    "uf_rate": 0,
                    "uf_volume": 0,
                    "bf_rate": 0,
                    "ap": 0,
                    "vp": 0,
                    "tmp": 0,
                    "kv/t": 0,
                    "actions": ""
                },
                {
                    "sr": 175,
                    "id": 7,
                    "appointment_id": 25,
                    "time": "00:00:00",
                    "bps": 0,
                    "bpd": 0,
                    "pulse": 0,
                    "uf_rate": 0,
                    "uf_volume": 0,
                    "bf_rate": 0,
                    "ap": 0,
                    "vp": 0,
                    "tmp": 0,
                    "kv/t": 0,
                    "actions": ""
                }
            ]
        }
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "invalid branch code"
    }
```
---




<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="fetch-patient-report"></a>
## Fetch patient report
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient report .</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/doctor/view/daily/report/
```
---

> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|appointment_id | number |

---

> ***Response body : 200 , Success***

```php
    {
        "message": "report fetched",
        "data": [
            {
                "ap_id": 1747,
                "report_name": "Daily_report_APID_1747"
            },
            {
                "ap_id": 1631,
                "report_name": "Daily_report_APID_1631"
            },
            {
                "ap_id": 1518,
                "report_name": "Daily_report_APID_1518"
            },
            {
                "ap_id": 1426,
                "report_name": "Daily_report_APID_1426"
            },
            {
                "ap_id": 1307,
                "report_name": "Daily_report_APID_1307"
            }
        ]
    }
```
---

> ***Response body : 404 , Not found***

```php
    {
        "message": "patient not found"
    }
```
---



<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="fetch-patient-name--id-and-branch-dropdown"></a>
## Fetch patient name , id and branch dropdown
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch patient name id and brnach for dropdown menu.</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/doctor/view/patient/name_id_branch/dropdown/
```
---


> ***Response body : 200 , Success***

```php
    {
        "message": "fatched , patient name id with branch",
        "data": {
            "name": "Yashwant Gawde",
            "patient_id": "Yashwant Gawde - PIDSDC149",
            "id": 149
        }
    }
```
---


