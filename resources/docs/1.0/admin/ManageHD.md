<a name="create-manage-home-dialysis-in-Admin"></a>
# Create & Manage Home Dialysis in Admin

---

- [Create Home Dialysis](#create-home-dialysis-in-Admin)
    - [List of Home dialysis` patient](#list-of-homedialysis-patient)
    - [Show home dialysis other details](#home-dialysis-select-region)
    - [Insert home dialysis record](#Inserting-home-dialysis-record)
- [Home dialysis apis (Delete & Edit & Fetch) for admin](#create-manage-home-dialysis-in-Admin)
   - [Delete a home dialysis patient](#delete-homedialysis-patient)
   - [Home dialysis`s patient list](#home-dialysis-patient-list)
   - [Fetch home dialysis patient by id](#getting-single-record-of-home-dialysis-patient)
   - [Home dialysis`s patient region](#home-dialysis-patient-region)
   - [Home dialysis`s staff list](#Home-dialysis-staff-details)
   - [Home dialysis`s machine list](#Home-dialysis-machines-details)
   - [Home dialysis doctor list](#Home-dialysis-doctor-details)
   - [Home dialysis specific doctor](#Home-dialysis-fetch-a-doctor-by-id)
   - [Home dialysis specific staff](#Home-dialysis-fetch-a-staff-by-id)
   - [Home dialysis specific machine](#Home-dialysis-fetch-a-machine-by-id)
   - [Home dialysis update record](#Home-dialysis-update-details)
- [Home Dialysis Statistics](#home-dialysis-statistics-list)
    - [ Home Dialysis Statistics List ](#home-dialysis-statistics-list)
    - [Home Dialysis list based on date passed](#hd-patient-date-passed)
    - [Dialyzer & tubing graph ](#Graph-home-dialysis-dialyzer_tubing)  
    - [Patient Charges Graph](#graph-home-dialysis-patient-charges)
    - [Patient per location Graph ](#home-dialysis-statistics-patient-per-location-graph)  
     

1. List of Home dialysis` patient
2. Show home dialysis other details
3. Insert home dialysis record
4. Delete a home dialysis patient .
5. Home dialysis`s patient list.
6. Fetch home dialysis patient by id.
7. Home dialysis`s patient region.
8. Home dialysis`s staff list.
9. Home dialysis`s machine list.
10. Home dialysis doctor list.
11. Home dialysis specific doctor.
12. Home dialysis specific staff.
13. Home dialysis specific machine.
14. Home dialysis update record
15. Home dialysis statistics`s list
16. Home dialysis list based on date passd
17. Dialyzer & Tubing graph
18. Patient Graph charges
19. Patient Per location graph
  

---

<a name="create-home-dialysis-in-Admin"></a>
# Create Home Dialysis

---
<!-- -->


<a name="list-of-homedialysis-patient"></a>
## List of Home dialysis` patient
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>
```php
     /v3/api/admin/homeDialysisInsertApiOne
```
---


<h4>This endpoint allows you to return the list of home dialysis`s patient.</h4>


> ***Response body : 200 , success***

```php
 {
    "data": [
        {
            "name": "Jaikant Sikre",
            "patient_id": 8,
            "branch_name": "HD8"
        },
        {
            "name": "Sandeep Pandey",
            "patient_id": 154,
            "branch_name": "HD"
        }
    ]
 }

```


<!-- -----------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="home-dialysis-select-region"></a>
##2. Show home dialysis other details 
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to show home dialysis other related details such as staff, staff id, doctor, doctor id, machine etc.</h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/homeDialysisInsertApiTwo
```
---

> ***Response body : 200 , success***

```php
   {
    "data": [
        {
            "StaffId": 36,
            "username": "Atul Singh",
            "branch": "IRCS",
            "machine_type": "Fresenius 4008B",
            "machine_serial_number": "7SXAUV03",
            "ro_serial": "ABYT8798789AAA",
            "DocID": 1,
            "DoctorBranch": "MMH,SDC,RH",
            "Doctor": "Dr Akasha Prasad"
        },
        {
            "StaffId": 36,
            "username": "Atul Negi",
            "branch": "IRCS",
            "machine_type": "Fresenius 8008S",
            "machine_serial_number": "9SXAIKT4",
            "ro_serial": "AAAMH98789AAA",
            "DocID": 1,
            "DoctorBranch": "MMH,SDC,RH",
            "Doctor": "Dr Akasha Prasad"
        }
    ]
    }
```




<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="Inserting-home-dialysis-record"></a>
##3. Insert home dialysis record
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to insert the home dialysis`s patient details.</h4>

---
> ***Endpoint***
<larecipe-badge type="success">POST</larecipe-badge>

```php
     /v3/api/admin/homeDialysisInsert
```

---

> ***Url Parameter : Required*** 
 
| Field | Type | Value |
|------ | ---- | ---- |
| patient_id | integer | 5  |
| dialysis_charge | float | 1.5 |
| per_hour_fee | float | 10.5 |
| monthly_rental | float | 100 |
| installation | float | 100.6 |
| additional_charge | float | 400.5 |
| add_charge_pmy | varchar(15) | "monthly" |
| reason_add_charge | varchar(255) | "GST increase" |
| dialyzer | float | 55.6 |
| blood_tubing | float | 66.9 |
| location | varchar(50) | "delhi" |
| expected_starting_date | datetime | "2021-09-04 00:00:00" |
| staff | integer | 4 |
| doctor | integer | 6 |
| machine | integer | 7 |
| ro_serial | varchar(50) | "MAX78574" |



> ***Required data :  JSON ***

```php
  {
    "patient_id":8,
    "dialysis_charge":5.8,
    "per_hour_fee":9.6,
    "monthly_rental":8.9,
    "installation":80.9,
    "additional_charge":800,
    "add_charge_pmy":"Monthly",
    "reason_add_charge":"Extra Tax",
    "dialyzer":9.6,
    "blood_tubing":8.9,
    "location":"Delhi",
    "expected_starting_date":"2021-09-04 00:00:00",
    "staff":8,
    "doctor":7,
    "machine":9,
    "ro_serial":"MAX7474"
}
```


---

> ***Response body : 200 , success***

```php
   {
    "message": "Insertion Success"
   }
```
---



<!-- -----------------------------------------------------------------  -->





<a name="delete-homedialysis-patient"></a>
## Delete Homedialysis patient
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>
```php
     /v3/api/admin/deleteHomeDialysisPatient
```
---


<h4>This endpoint allows you to delete a home dialysis`s patient based on the id passed.</h4>


---

> ***Url Parameter : Required*** 
 
| Field | Type | 
|------ | ---- |
| id | integer |

---
 


> ***Response body : 200 , success***

```php
   {
    "message": "Deletion Success"
   }
```


<!-- -----------------------------------------------------------------  -->


<hr style="border:2px solid gray;margin-top:120px"> </hr>

<a name="home-dialysis-patient-list"></a>
## Home dialysis`s patient list
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return a list of home dialysis`s patient</h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/homeDialysisList
```
---

> ***Response body : 200 , success***

```php
    {
    "data": [
        {
            "PatientId": 8,
            "name": "Surveer Prasad",
            "dialysis_charge": 67,
            "per_hour_fee": 4,
            "monthly_rental": 6,
            "installation": 5,
            "dialyzer": 65,
            "blood_tubing": 5,
            "location": "Agra",
            "expected_starting_date": "2021-09-04 00:00:00",
            "Staff Member": "Atul  Jha",
            "machine_serial_number": "19CX15434",
            "Doctor": "Dr Akansha Prasad"
        },
        {
            "PatientId": 154,
            "name": "Sandeep  Kumar",
            "dialysis_charge": 67,
            "per_hour_fee": 87,
            "monthly_rental": 76,
            "installation": 56,
            "dialyzer": 0,
            "blood_tubing": 0,
            "location": "Andheri",
            "expected_starting_date": "2021-10-03 17:15:19",
            "Staff Member": "Jairam Singh",
            "machine_serial_number": "3XCAB507",
            "Doctor": "Dr Akansha Jha"
        },
    ]
    }

```




<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="getting-single-record-of-home-dialysis-patient"></a>
## Fetch HD patient by id
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch home dialysis patient based on id provided.</h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/fetch_home_dialysis_patient_ById
```

---

> ***Url Parameter : Required*** 
 
| Field | Type | 
|------ | ---- |
| patient_id | integer |



---

> ***Request Data : JSON ***

```php
  {
   "patient_id":152
  }
```



> ***Response body : 200 , success***

```php
  {
    "data": [
        {
            "id": 5,
            "patient_id": 152,
            "dialysis_charge": 54,
            "per_hour_fee": 45,
            "monthly_rental": 800,
            "installation": 0,
            "additional_charge": 800,
            "add_charge_pmy": "800",
            "reason_add_charge": "mood change",
            "dialyzer": 800,
            "blood_tubing": 100,
            "location": "Delhi",
            "expected_starting_date": "2012-12-12 00:00:00",
            "staff": 5,
            "machine": 5,
            "doctor": 8,
            "ro_serial": "ZWEW747"
        }
    ]
}
```




<!-- ----------------------------------------------------------  -->






<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="home-dialysis-patient-region"></a>
## Home Dialysis`s patient region

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you return region of home dialysis patient</h4>

---
> ***Endpoint***
<larecipe-badge type="danger">POST</larecipe-badge>

```php
     /v3/api/admin/getRegion
```

---


---

> ***Response body : 200 , Success***

```php
   {
    "data": [
        {
            "region": "Mumbai"
        },
        {
            "region": "Bhivandi"
        },
        {
            "region": "Nerul"
        },
        {
            "region": "Pune"
        }
    ]
}
```



<!-- ------------------------------------------------------------  -->


---
---
<hr style="border:2px solid gray"> </hr>

<a name="Home-dialysis-staff-details"></a>
## Home dialysis`s staff list

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return staff  details based on region. </h4>

---
> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
   /v3/api/admin/getOtherHDStaff
```
---

> ***Url parameter : Required*** 
 
| Field | Type | Value |
|------ | ---- |----  |
| region | varchar(50) | "Mumbai" |

---

> ***Required body : Json data*** 
 
```php
    {
    "region":"mumbai"
    }
```
---

> ***Response body : 200 , Success***

```php
    {
    "data": [
        {
            "StaffId": 2,
            "Staff": "Nishita Hindalekar",
            "StaffBranch": "MMH"
        },
        {
            "StaffId": 1,
            "Staff": "Jaymala",
            "StaffBranch": "SDC"
        }
       ]
    } 

     
```
---




<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="Home-dialysis-machines-details"></a>
## Home dialysis`s machine list

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return home dialysis`s machine details. </h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/getOtherHDMachine
```
---


> ***Required body : Json data*** 
 
```php
    {
    "region":"mumbai"
    }
```
---


> ***Response body : 200 , success***

```php
    {
    "data": [
        {
            "machine_type": "Fresenius 4008B",
            "machine_serial_number": "2VCAH725"
        },
        {
            "machine_type": "Nipro Surdial 55+",
            "machine_serial_number": "19CX15436"
        },
        {
            "machine_type": "Fresenius 4008A",
            "machine_serial_number": "1QAA4430"
        },
        {
            "machine_type": "Fresenius 4008B",
            "machine_serial_number": "2VCAH781"
        }
    ]
    }


```
---



<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="Home-dialysis-doctor-details"></a>
## Home dialysis doctor list

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return home dialysis`s doctor details. </h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
     /v3/api/admin/getOtherHDDoctor
```
---


> ***Required body : Json data*** 
 
```php
    {
    "region":"mumbai"
    }
```
---


> ***Response body : 200 , success***

```php
    {
    "data": [
        {
            "username": "Sanjay Singh",
            "id": 5,
            "branch": "MMH"
        }
    ]
}


```
---




<!-- ------------------------------------------------------------  -->





<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="Home-dialysis-fetch-a-doctor-by-id"></a>
## HD specific doctor

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch a particular doctor based on the id passed. </h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
  /v3/api/admin/fetchDoctoronId
```
---

> ***Url parameter : Required*** 
 
| Field | Type | Value |
|------ | ---- |----  |
| doctor_id | integer |  |

---

> ***Required body : Json data*** 
 
```php
     {
    "doctor_id":5
     }
```
---

> ***Response body : 200 , Success***

```php
   {
    "data": [
        {
            "id": 5,
            "date": "2021-07-08 06:29:34",
            "username": "Rahul Singh",
            "branch": "MMH",
            "speciality": "Nephrologist",
            "phone": 9696968596,
            "emphone": 9365744858,
            "email": "rahulsingh78@gmail.com",
            "profile_pic": "1636823554.jpeg",
            "new_patient": 100,
            "emergency_pay": 500,
            "scheduled_pay": 100,
            "amount": 0,
            "perdmy": "month",
            "active": 1,
            "remove": 0,
            "ban": 0,
            "password": "ee49bfdcbebcf244d2024aa8681c4fff"
        }
    ]
}

     
```
---



<!-- ------------------------------------------------------------  -->






<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="Home-dialysis-fetch-a-staff-by-id"></a>
## HD specific Staff

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch a particular staff based on the id passed. </h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/fetchStaffonId
```
---

> ***Url parameter : Required*** 
 
| Field | Type | Value |
|------ | ---- |----  |
| staff_id | integer |  |

---

> ***Required body : Json data*** 
 
```php
    {
    "staff_id":31
   }
```
---

> ***Response body : 200 , Success***

```php
   
     {
    "data": [
        {
            "id": 31,
            "date": "2021-07-15 01:57:23",
            "username": "Harsh Tomar ",
            "designation": "Junior Technician",
            "category": "",
            "branch": "RH",
            "phone": 9790691541,
            "emphone": 9790851541,
            "salary": 0,
            "dmy": "",
            "email": "staff@vidur.ml",
            "profile_pic": "Empty.jpg",
            "active": 1,
            "remove": 0,
            "ban": 0,
            "hd_patient": "yes"
        }
    ]
}
     
```
---



<!-- ------------------------------------------------------------  -->







<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="Home-dialysis-fetch-a-machine-by-id"></a>
## HD specific Machine

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to fetch a particular machine details based on the id passed. </h4>

---
> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
    /v3/api/admin/fetchMachineonId
```
---

> ***Url parameter : Required*** 
 
| Field | Type | Value |
|------ | ---- |----  |
| machine_id | integer |  |

---

> ***Required body : Json data*** 
 
```php
    {
    "machine_id":5
    } 
```
---

> ***Response body : 200 , Success***

```php
   
    {
    "data": [
        {
            "machine_id": 5,
            "code": "SDC",
            "provider": "Hemant Surgicals",
            "installation_date": "2021-07-01",
            "machine_type": "Fresenius 4008A",
            "machine_serial_number": "1QAA4427",
            "emi": 0,
            "dmy_machine": "month",
            "counter": 5,
            "ban": 0
        }
    ]
}
     
```
---



<!-- ------------------------------------------------------------  -->






<hr style="border:2px solid gray;margin-top:120px"> </hr>


<a name="Home-dialysis-update-details"></a>
## HD update record

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to update the home dialysis`s patient details. </h4>

---
> ***Endpoint***
<larecipe-badge type="success">POST</larecipe-badge>

```php
  /v3/api/admin/updateHomeDialysisPatient
```
---

> ***Url parameter : Required*** 
 
| Field | Type | Value |
|------ | ---- |----  |
| id | integer |  |
| dialysis_charge | float |  |
| monthly_rental_charge |  float | |
| installation_charge | float |  |
| dialyzer_charge | float |  |
| extra_hour_charge | float |  |
| blood_tubing_charge | float |  |
| additional_charge | float |   |
| add_charge_pmy | varchar(15) | "per month", "per dialysis", "per year" |
| reason_for_additional_charge | varchar(255)   |   |
| location | varchar(50)   |   |
| expected_starting_date | datetime | |
| staff | integer |  |
| machine | integer |  |
| doctor | integer | |
| ro_serial | varchar(50) |  |
---

> ***Required body : Json data*** 
 
```php
    {
    "id":152,
    "dialysis_charge":48.6,
    "per_hour_fee":500,
    "monthly_rental":60.9,
    "installation":56.9,
    "additional_charge":59,
    "add_charge_pmy":"month",
    "reason_add_charge":"Found better option",
    "dialyzer":59.6,
    "blood_tubing":100,
    "location":"Agra",
    "expected_starting_date":"2021-10-03 17:15:19",
    "staff":2,
    "machine":7,
    "doctor":7,
    "ro_serial":"MAX7474"
  }
```
---

> ***Response body : 200 , Success***

```php
   {
    "message": "Update Success"
   }

     
```
---




<!-- --------------------------------------------  -->

<a name="home-dialysis-statistics-list"></a>
## Home Dialysis Statistics List

<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to show the list of home dialysis patient</h4>

> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
    /v3/api/admin/homeDialysisList
```
---

---

> ***Response body : 200 , Success***

```php
   {
    "data": [
        {
            "PatientId": 8,
            "name": "Rahul Singh",
            "dialysis_charge": 67,
            "per_hour_fee": 4,
            "monthly_rental": 6,
            "installation": 5,
            "dialyzer": 65,
            "blood_tubing": 5,
            "location": "Agra",
            "expected_starting_date": "2021-09-04 00:00:00",
            "Staff Member": "Atul Negi",
            "machine_serial_number": "19CX15434",
            "Doctor": "Dr Akansha Singhada"
        },
        {
            "PatientId": 154,
            "name": "Sandeep rathi",
            "dialysis_charge": 67,
            "per_hour_fee": 87,
            "monthly_rental": 76,
            "installation": 56,
            "dialyzer": 0,
            "blood_tubing": 0,
            "location": "Andheri",
            "expected_starting_date": "2021-10-03 17:15:19",
            "Staff Member": "Jaymala",
            "machine_serial_number": "3XCAB507",
            "Doctor": "Dr Akash Singhada"
        }
    ]
   }

```
---





<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>



<a name="hd-patient-date-passed"></a>
## Home Dialysis list based on date passed
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return the home dialysis`s patient list based on the date passed.</h4>

> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
    /v3/api/admin/homeDialysisListByDate
```
---
> ***Url parameter : Required*** 

| Field | Type |
|------ | ---- |
|date | datetime |

---
> ***Response body : 200 , Success***

```php
   {
    "data": [
        {
            "PatientId": 8,
            "name": "Rahul Kadam",
            "dialysis_charge": 67,
            "per_hour_fee": 4,
            "monthly_rental": 6,
            "installation": 5,
            "dialyzer": 65,
            "blood_tubing": 5,
            "location": "Agra",
            "expected_starting_date": "2021-09-04 00:00:00",
            "Staff Member": "Atul Negi",
            "machine_serial_number": "19CX15434",
            "Doctor": "Dr Akansha Singhada"
        },
        {
            "PatientId": 153,
            "name": "Rajni Prasad",
            "dialysis_charge": 67,
            "per_hour_fee": 87,
            "monthly_rental": 76,
            "installation": 56,
            "dialyzer": 0,
            "blood_tubing": 0,
            "location": "Andheri",
            "expected_starting_date": "2021-09-08 17:15:19",
            "Staff Member": "Jai Singh",
            "machine_serial_number": "3XCAB507",
            "Doctor": "Dr Akansha Singhada"
        }
    ]
}
```



<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="Graph-home-dialysis-dialyzer_tubing"></a>
## Dialyzer & tubing graph
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to get the data related to dialyzer and tubing with other details </h4>

> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
   /v3/api/admin/dialyzer_tubing_graph
```

> ***Response body : 200 , Success***

```php
   {
    "data": [
        {
            "patient_id": 8,
            "branch_name": "HD8",
            "dialyzer": 65,
            "blood_tubing": 5
        },
        {
            "patient_id": 154,
            "branch_name": "HD",
            "dialyzer": 0,
            "blood_tubing": 0
        }
    ]
   }

```



<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="graph-home-dialysis-patient-charges"></a>
## Patient Charges Graph
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return the list of patient with other details related to it.</h4>

> ***Endpoint***
<larecipe-badge type="success">GET</larecipe-badge>

```php
   /admin/patient_charges_graph
```

> ***Response body : 200 , Success***

```php
     {
    "data": [
        {
            "patient_id": 8,
            "branch_name": "HD8",
            "installation": 5,
            "monthly_rental": 6,
            "dialysis_charge": 67
        },
        {
            "patient_id": 154,
            "branch_name": "HD",
            "installation": 56,
            "monthly_rental": 76,
            "dialysis_charge": 67
        },
        {
            "patient_id": 153,
            "branch_name": "IRCS",
            "installation": 56,
            "monthly_rental": 76,
            "dialysis_charge": 67
        }
    ]
 }

```



<!-- --------------------------------------------------------  -->
<hr style="border:2px solid gray;margin-top:120px"> </hr>
<a name="home-dialysis-statistics-patient-per-location-graph"></a>
## Patient per location Graph
<larecipe-badge type="warning" radius="full">Require authorization</larecipe-badge>

---

<h4>This endpoint allows you to return the data that shows the total no. of patient belonging to a particular location .</h4>

> ***Endpoint***
<larecipe-badge type="danger">GET</larecipe-badge>

```php
    /v3/api/admin/patient_per_location_graph
```


> ***Response body : 200 , Success***

```php
  {
    "data": [
        {
            "Patient": 3,
            "location": "Agra"
        },
        {
            "Patient": 7,
            "location": "Andheri"
        },
        {
            "Patient": 6,
            "location": "Delhi"
        }
    ]
}
```


