<?php

use App\Http\Controllers\apiauth\ApiAuthController;
use App\Http\Controllers\register\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\Doctor\DoctorController;
use App\Http\Controllers\Manager\ManagerController;
use App\Http\Controllers\resource\resourceController;
use App\Http\Controllers\Appointment\appointmentController;
use App\Http\Controllers\statistics\StaffInfoController;

use App\Http\Controllers\admin\ActivityLogController;
use App\Http\Controllers\profile\ChangePasswordController;
use App\Http\Controllers\profile\EditProfile;
use App\Http\Controllers\superadmin_portal\TrpSectionController;
use App\Http\Controllers\superadmin_portal\TrpCompanyDetailsController;
use App\Http\Controllers\superadmin_portal\TrpPlansController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


    Route::group(['middleware' => ['auth:doctor,staff,manager,admin']],function(){

        Route::post('edit/profile',[EditProfile::class,"editProfile"]);
        Route::post('change/password',[ChangePasswordController::class,"changePassword"]);


        //logout
        Route::post('logout',[ApiAuthController::class,"logout"]);
    });




Route::post('/login',[ApiAuthController::class,"login"])->name('login');;
Route::post('/register',[RegisterController::class,"register"]);



// ---------------------------------------------------------------------------------------
//super admin
//add plan

Route::middleware(['auth:superadmin','check.is.superadmin'])->group(function () {
//     Route::get('test', function(){
// return 'test';
//     });
Route::post('/add/plan',[TrpPlansController::class,"add_plan"]);
//edit plan
Route::post('/edit/plan/{plan_id?}',[TrpPlansController::class,"edit_plan"]);
//enable or disable plan
Route::post('/enable_disable/plan/{planPid?}',[TrpPlansController::class,"enable_disable_plan"]);
//fetch plan
Route::get('/fetch/plan/{planPid?}',[TrpPlansController::class,"fetch_plan"]);


//company details
//add company
Route::post('/add/company/details',[TrpCompanyDetailsController::class,"add_company_details"]);
//edit company
Route::post('/edit/company/details/{company_id?}',[TrpCompanyDetailsController::class,"edit_company_details"]);
//delete company
Route::post('/delete/company/details/{company_id?}',[TrpCompanyDetailsController::class,"delete_company_details"]);
//enable - disable company
Route::post('/enable_disable/company/details/{company_id?}',[TrpCompanyDetailsController::class,"enable_disable_company_details"]);
//fetch company
Route::get('/fetch/company/details/{company_id?}',[TrpCompanyDetailsController::class,"fetch_company_details"]);


//sections
//add section
Route::post('/add/section',[TrpSectionController::class,"add_section"]);
//edit section
Route::post('/edit/section/{plan_id?}',[TrpSectionController::class,"edit_section"]);
//fetch section
Route::get('/fetch/section/{planPid?}',[TrpSectionController::class,"fetch_section"]);

// -------------------------------------------------------------------------------







Route::get('centre_details_for_register_page/register',[RegisterController::class,"centre_code_in_registre_page"]);










// -------------------------------------------------------------------------------



//Admin API
Route::get('viewAdmin',[AdminController::class,'viewAdmin']);
Route::put('editAdmin',[AdminController::class,'editAdmin']);
Route::delete('deleteAdmin',[AdminController::class,'deleteAdmin']);
Route::put('banPermitAdmin',[AdminController::class,'banPermitAdmin']);
Route::get('fetch_byId',[AdminController::class,'fetch_byId']);


//Doctor API
Route::post('insertDoctor',[DoctorController::class,'insertDoctor']);
Route::get('viewDoctor',[DoctorController::class,'viewDoctor']);

Route::put('editDoctor',[DoctorController::class,'editDoctor']);
Route::put('banPermitDoctor',[DoctorController::class,'banPermitDoctor']);

Route::delete('deleteDoctor',[DoctorController::class,'deleteDoctor']);

Route::get('doctor_byID',[DoctorController::class,'doctor_byID']);


//Manager API

Route::post('insertManager',[ManagerController::class,'insertManager']);
Route::get('viewManager',[ManagerController::class,'viewManager']);

Route::put('editManager',[ManagerController::class,'editManager']);
Route::put('banPermitManager',[ManagerController::class,'banPermitManager']);

Route::delete('deleteManager',[ManagerController::class,'deleteManager']);
Route::get('manager_byID',[ManagerController::class,'manager_byID']);




//Resource API
Route::get('getResource',[resourceController::class,'getResource']);


//get Staff information
Route::get('getStaffInfo',[StaffInfoController::class,'getStaffInfo']);

//Appointment API
Route::get('getAppointment',[appointmentController::class,'getAppointment']);

//ActivityLog Controller
Route::get('activityLog',[ActivityLogController::class,'activityLog']);


Route::get('activityLogByDate',[ActivityLogController::class,'activityLogByDate']);

});


