<?php

use App\Http\Controllers\patient\BloodReportController;
use App\Http\Controllers\patient\dialysis\PostDialysisController;
use App\Http\Controllers\patient\dialysis\PreDialysisController;
use App\Http\Controllers\patient\PatientBillController;
use App\Http\Controllers\staff\StaffController;
use App\Http\Controllers\staff\StaffPageController;
use App\Http\Controllers\staff\ViewBranchPageController;
use App\Http\Controllers\patient\PatientController;
use App\Http\Controllers\patient\PatientParameterController;
use App\Http\Controllers\patient\UpdatePatientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\staff\ManageStaffController;
use App\Http\Controllers\HomeDialysisController;
use App\Http\Controllers\patient\dialysis\DialysisSessionSheetController;
use App\Http\Controllers\patient\dialysis\PatientBillListController;
use App\Http\Controllers\patient\dialysis\PatientDetailsController;

// Route::middleware('auth:sanctum')->group(function(){

    Route::middleware(['auth:staff'])->group(function(){

        //patient
        // Route::group(['middleware'=>['manageMemberMiddleware']],function(){

            Route::post('/register/patient',[PatientController::class,"registerPatient"])->name('manageMember');
            Route::get('/view/patient/{patient_id?}',[PatientController::class,"viewPatient"])->name('manageMember');
            Route::post('/update/patient/{patient_id?}',[UpdatePatientController::class,"updatePatient"])->name('manageMember');
            Route::post('/block_unblock/patient/{patient_id?}',[PatientController::class,"block_unblock_patient"])->name('manageMember');
            Route::get('/get/patient/name_and_id',[PatientController::class,"get_patient_name_and_id"])->name('manageMember');


            Route::post('/register',[StaffController::class,"storeStaff"]);

            //Staff Portal >> Manage Patient
            Route::get('getManagePatient',[ManageStaffController::class,'getManagePatient']);
            Route::get('listPatient',[ManageStaffController::class,'listPatient']);

            Route::post('updatePatientDetails',[ManageStaffController::class,'updatePatientDetails']);

        // });


        Route::group(['middleware'=>['bloodReportMiddleware']],function(){

            //blood report
            Route::post('/patient/blood/report',[BloodReportController::class,"blood_report"])->name('bloodReport');
            //show  patient blood and renal report
            Route::get('show/patient/blood_and_renal/report/{patient_id?}',[BloodReportController::class,"show_patient_blood_and_renal_report"])->name('bloodReport');
        });


        //staff.php page
        Route::group(['middleware'=>['bill_patient_parameter_middleware']],function(){

                  //show particular branch patient
                  Route::get('/view/particular/branch/patient/',[StaffPageController::class,"view_particular_branch_patient"])->name('bill_patient_parameter');

                  //show patient who are dialysing
                  Route::get('/view/dialysing/patient/',[StaffPageController::class,"view_dialysing_patient"])->name('bill_patient_parameter');

                  //view available beds
                  Route::get('/view/available/beds/',[StaffPageController::class,"view_available_beds"])->name('bill_patient_parameter');

                  //branch details
                  Route::get('/view/branch/name/',[StaffPageController::class,"view_branch_name"])->name('bill_patient_parameter');

                  //show patient parameter
                  Route::get('show/patient/parameter/{app_id?}',[PatientParameterController::class,"show_patient_parameter"])->name('bill_patient_parameter');

                  //enter patient parameter
                  Route::post('enter/patient/parameter/{app_id?}',[PatientParameterController::class,"enter_patient_parameter"])->name('bill_patient_parameter');


            //view session sheet
                Route::get('/view/session/sheet/{app_id?}',[DialysisSessionSheetController::class,"dialysis_session_sheet"])->name('bill_patient_parameter');


              //view_branch_details_page.php
                  //view branch details
                  Route::get('/view/branch/details/',[ViewBranchPageController::class,"view_branch_details"])->name('bill_patient_parameter');

              //patient bill
                  //bill
                  Route::get('/patient/bill/{appointment_id?}',[PatientBillController::class,'patient_bill'])->name('bill_patient_parameter');

                  //bill payment
                  Route::post('/patient/bill/payment/{appointment_id?}',[PatientBillController::class,"bill_payment"])->name('bill_patient_parameter');

                  //bill payment
                  Route::post('/patient/discount/coupon/{appointment_id?}',[PatientBillController::class,"discount_coupon"])->name('bill_patient_parameter');


            // ----------------------------------------------

              //pre dialysis
                Route::post('/pre_dialysis/form/{patient_id?}',[PreDialysisController::class,"save_pre_dialysis_from"])->name('bill_patient_parameter');
                //alert stock count
                Route::get('show/stock/alert',[PreDialysisController::class,'show_stock_alert'])->name('bill_patient_parameter');


              //post dialysis
                //get appointment id current dialysing patient based on patient id
                Route::get('get/appointment_id/{pid?}',[PostDialysisController::class,'get_appointment_id'])->name('bill_patient_parameter');

                  //show stocks related to branch
                  Route::get('/show/stocks/',[PostDialysisController::class,"show_stocks_related_to_branch"])->name('bill_patient_parameter');

                  //save post dialysis form
                  Route::post('/save/post_dialysis/form/{appointment_id?}',[PostDialysisController::class,"save_post_dialysis_form"])->name('bill_patient_parameter');


              //patient details
                  Route::get('/patient/details/{patient_id?}',[PatientDetailsController::class,"patient_details"])->name('bill_patient_parameter');

              //patient details
                 Route::get('/patient/bill/list/{patient_id?}',[PatientBillListController::class,"patient_bill_list"])->name('bill_patient_parameter');

        });



        // -----------------------------------------------------
        // -----------------------------------------------------
        // -----------------------------------------------------




            //offline records
            Route::group(['middleware'=>['offlineRecordsMiddleware']],function(){

                Route::get('offlineRecordFetchOne',[ManageStaffController::class,'offlineRecordFetchOne'])->name('offlineRecords');
                Route::get('offlineRecordFetchTwo',[ManageStaffController::class,'offlineRecordFetchTwo'])->name('offlineRecords');
                Route::get('offlineRecordFetchThree',[ManageStaffController::class,'offlineRecordFetchThree'])->name('offlineRecords');
                Route::get('offlineRecordFetchFour',[ManageStaffController::class,'offlineRecordFetchFour'])->name('offlineRecords');

                Route::get('offlineRecordFetchConsuPharma',[ManageStaffController::class,'offlineRecordFetchConsuPharma'])->name('offlineRecords');

                Route::post('offlineRecordInsert',[ManageStaffController::class,'offlineRecordInsert'])->name('offlineRecords');

            });





            //Staff portal -> upcoming appointment
            Route::get('upcomingAppointment',[ManageStaffController::class,'upcomingAppointment'])->name('homeDialysisMiddleware');

            Route::get('upcomingAppointmentById/{upcoming_app_id?}',[ManageStaffController::class,'upcomingAppointmentById'])->name('homeDialysisMiddleware');

            Route::put('updateUpcomingAppointment',[ManageStaffController::class,'updateUpcomingAppointment'])->name('homeDialysisMiddleware');



        Route::group(['middleware'=>['homeDialysisMiddleware']],function(){

            //Staff Portal >> Home dialysis
            Route::get('HDPatient_search',[ManageStaffController::class,'HDPatient_search'])->name('homeDialysisMiddleware');


            Route::get('staff_home_dialysis',[ManageStaffController::class,'staff_home_dialysis'])->name('homeDialysisMiddleware');



            //pre dialysis
            Route::post('/pre_dialysis/form/{patient_id?}',[PreDialysisController::class,"save_pre_dialysis_from"])->name('bill_patient_parameter');

             //save post dialysis form
             Route::post('/save/post_dialysis/form/{appointment_id?}',[PostDialysisController::class,"save_post_dialysis_form"])->name('bill_patient_parameter');

        });

    });

// });

