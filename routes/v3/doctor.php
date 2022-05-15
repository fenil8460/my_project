<?php

use App\Http\Controllers\doctor\DoctorPortal\DailyReportController;
use App\Http\Controllers\doctor\DoctorPortal\DoctorHomeController;
use App\Http\Controllers\doctor\doctorportal\DoctorPatientGraphController;
use App\Http\Controllers\doctor\DoctorPortal\PrescriptionController;
use App\Http\Controllers\doctor\doctorportal\ReportsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:sanctum')->group(function(){

    Route::middleware(['auth:doctor'])->group(function(){

        //home page
            // view branch
            Route::get('/view/branch/',[DoctorHomeController::class,"view_branch"]);
            //view patient details
            Route::get('/view/patient/details/{patient_id?}',[DoctorHomeController::class,"show_patient_details"]);
            //view patient name and id
            Route::get('/view/patient/name_and_id/{branch_code?}',[DoctorHomeController::class,"show_patient_name_id"]);
           //show total patient
            Route::get('/view/total/patient/{branch_code?}',[DoctorHomeController::class,"show_total_patient"]);
            //view total hospital
            Route::get('/view/total/hospital/',[DoctorHomeController::class,"show_total_hospital"]);
            //total no of dialysis
            Route::get('/view/dialysis/count',[DoctorHomeController::class,"view_dialysis_count"]);
            //show all dialysis
            Route::get('/view/all/dialysis',[DoctorHomeController::class,"show_all_dialysis"]);
            //doctor amount
            Route::post('/view/doctor/amount/',[DoctorHomeController::class,"doctor_amount"]);





        //daily report page
        Route::get('/view/daily/report/{patient_id?}',[DailyReportController::class,"show_patient_report"]);
            //view session sheet
            Route::get('/view/session/sheet/{app_id?}',[DailyReportController::class,"dialysis_session_sheet"]);
             //patient_dropdown_with_name_id_branch
             Route::get('/view/patient/name_id_branch/dropdown/',[DailyReportController::class,"patient_dropdown_with_name_id_branch"]);




        //prescription
        Route::post('/add/prescription/{patient_id?}',[PrescriptionController::class,"add_prescription"]);
            //show prescription
            Route::get('/show/prescription/{patient_id?}',[PrescriptionController::class,"show_prescription"]);




        //Reports
            //user report
            Route::get('/show/user/report/{patient_id?}',[ReportsController::class,"userReport"]);
            //blood report
            Route::get('/show/blood/report/{patient_id?}',[ReportsController::class,"bloodReport"]);



        //graphs
        Route::group(['middleware'=>['doctorGraphMiddleware']],function(){
            //dialysis parameter
                //weight
                Route::post('/show/weight/graph/{patient_id?}',[DoctorPatientGraphController::class,"weight_graph"])->name('doctorGraph');
                // bp_systolic_diasystolic
                Route::post('/show/bp_systolic_diastolic/graph/{patient_id?}',[DoctorPatientGraphController::class,"bp_systolic_diasystolic"])->name('doctorGraph');
                //Heart rate
                Route::post('/show/heart_rate/graph/{patient_id?}',[DoctorPatientGraphController::class,"heart_rate"])->name('doctorGraph');


            //conditions
                //pre_dialysis_coditions
                Route::post('/show/pre_dialysis_conditions/graph/{patient_id?}',[DoctorPatientGraphController::class,"pre_dialysis_conditions"])->name('doctorGraph');
                //post_dialysis_coditions
                Route::post('/show/post_dialysis_conditions/graph/{patient_id?}',[DoctorPatientGraphController::class,"post_dialysis_conditions"])->name('doctorGraph');


            //cons and pharma
                //cons
                Route::post('/show/consumables/graph/{patient_id?}',[DoctorPatientGraphController::class,"consumables"])->name('doctorGraph');
                //pre_dialysis_pharma
                Route::post('/show/pre_dialysis_pharma/graph/{patient_id?}',[DoctorPatientGraphController::class,"pre_dialysis_pharma"])->name('doctorGraph');
                //post_dialysis_pharma
                Route::post('/show/post_dialysis_pharma/graph/{patient_id?}',[DoctorPatientGraphController::class,"post_dialysis_pharma"])->name('doctorGraph');

            //blood report
                //haemoglobin vs pharma
                Route::post('/show/haemoglobin_vs_pharma/graph/{patient_id?}',[DoctorPatientGraphController::class,"haemoglobin_vs_pharma"])->name('doctorGraph');
                //haemoglobin vs pharma
                Route::post('/show/creatinine/graph/{patient_id?}',[DoctorPatientGraphController::class,"creatinine"])->name('doctorGraph');
        });

        
    });

// });


