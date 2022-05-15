<a name="blood-report"></a>
# Blood report apis for staff

---

- [Blood report apis for staff](#blood-report-apis-for-staff)
  - [Save blood report](#save-blood-report)
  - [Save renal report](#save-renal-report)

1. Save blood report
2. Save renal report


<a name="save-blood-report"></a>
## Save blood report 

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to save blood report of patients , patients id should be passed in the form data .</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/staff/patient/blood/report
```
---


> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|blood_report|null|
|patient_id|number|
|haemoglobin|number|
|rbc|number|
|pcv|number|
|corp_volume|number|
|corp_hb|number|
|corp_hb_conc|number|
|platelet|number|
|rdw|number|
|wbc|number|
|neutro|number|
|lympho|number|
|mono|number|
|eosino|number|
|baso|number|
|ab_wbc|number|
|ab_rbc|number|
|remark|number|
|protein|number|
|albumin|number|
|globulin|number|
|albu_glob|number|

---

> ***Response body : 200 , Success***

```php
    {
        "message": "blood report saved successfully"
    }
```
---






<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="save-blood-report"></a>
## Save renal report 

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to save blood report of patients , patients id should be passed in the form data .</h4>

> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
    /v3/api/staff/patient/blood/report
```
---


> ***Required body : Form data*** 

| Field | Type |
|------ | ---- |
|blood_report|null|
|patient_id|number|
|protein|number|
|albumin|number|
|globulin|number|
|alu_glo|number|
|uric_acid|number|
|urea|number|
|creatinine|number|
|calcium|number|
|phosphorous|number|
|sodium|number|
|potassium|number|
|chloride|number|
|ionised_cal|number|
|bio_protein|number|
|bio_albumin|number|
|bio_globulin|number|
|ag_ratio|number|

---

> ***Response body : 200 , Success***

```php
    {
        "message": "uploaded pateint renal report"
    }
```
---




