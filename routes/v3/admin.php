<?php

use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\staff\StaffController;
use App\Http\Controllers\patient\PatientController;
use App\Http\Controllers\staff\UpdateStaffController;
use App\Http\Controllers\HomeDialysis\HomeDialysisController;
use App\Http\Controllers\staff\ManageStaffController;
use App\Http\Controllers\machine\MachineController;
use App\Http\Controllers\machine\EditMachineController;
use App\Http\Controllers\machine\DeleteMachineController;
use App\Http\Controllers\microcentre\ManageMicroCentreController;
use App\Http\Controllers\statistics\PatientInfoController;
use App\Http\Controllers\stock_maintenance\AddNewProductController;
use App\Http\Controllers\stock_maintenance\AddStockController;
use App\Http\Controllers\patient\PatientBillController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\patient\UpdatePatientController;
use App\Http\Controllers\statistics\StaffInfoController;
use App\Http\Controllers\EmployeeAttendance\EmployeeAttendanceController;

use App\Http\Controllers\Manager\ManagerController;

use App\Http\Controllers\admin\ActivityLogController;
use App\Http\Controllers\admin_report\CenterBasedReportController;
use App\Http\Controllers\admin_report\DoctorReportController;
use App\Http\Controllers\admin_report\PatientReportController;
use App\Http\Controllers\Appointment\appointmentController;

use App\Http\Controllers\Doctor\DoctorController;
use App\Http\Controllers\stock_maintenance\ManageStockController;

// Route::get('/show/admin',[AdminController::class,"storeAdmin"]);


// Route::middleware('auth:sanctum')->group(function () {
    // Route::get('aaaaaaaaaaaa',function(){
    //     return 'test';
    // })->middleware(['checkPlan']);

    Route::group(['middleware' => 'checkPlan:sm'], function () {
        // my routes
        Route::get('Company 1',function(){
            return 'test';
        });
    });
    
    Route::middleware(['auth:admin'])->group(function () {


        // Route::group(['middleware' => ['manageMemberMiddleware']], function () {

            //admin work
            Route::post('/store/admin', [AdminController::class, "storeAdmin"])->name('manageMember');

            //Doctor API(list,fetchbyid,insert, update,delete)
            Route::get('viewDoctor', [DoctorController::class, 'viewDoctor'])->name('manageMember');

            Route::post('editDoctor', [DoctorController::class, 'editDoctor'])->name('manageMember');

            Route::post('deleteDoctor', [DoctorController::class, 'deleteDoctor'])->name('manageMember');

            Route::get('doctor_byID', [DoctorController::class, 'doctor_byID'])->name('manageMember');

            Route::post('doctorBanPermit', [DoctorController::class, 'doctorBanPermit'])->name('manageMember');
            Route::post('insertDoctor', [DoctorController::class, 'insertDoctor'])->name('manageMember');
            Route::get('getDoctorByName', [DoctorController::class, 'getDoctorByName'])->name('manageMember');
        // });


        // Route::group(['middleware' => ['manageMemberMiddleware']], function () {

            //Admin API
            Route::get('adminList', [AdminController::class, 'adminList'])->name('manageMember');
            Route::get('adminListByid', [AdminController::class, 'adminListByid'])->name('manageMember');
            Route::get('adminDelete/{aid?}', [AdminController::class, 'adminDelete'])->name('manageMember');
            Route::post('adminUpdate', [AdminController::class, 'adminUpdate'])->name('manageMember');
            Route::post('adminBanPermit', [AdminController::class, 'adminBanPermit'])->name('manageMember');
            Route::get('getAdminByName', [AdminController::class, 'getAdminByName'])->name('manageMember');
        // });


        //Manager API
        Route::group(['middleware' => ['manageMemberMiddleware']], function () {

            Route::get('viewManager', [ManagerController::class, 'viewManager'])->name('manageMember');
            Route::post('deleteManager', [ManagerController::class, 'deleteManager'])->name('manageMember');
            Route::get('manager_byID', [ManagerController::class, 'manager_byID'])->name('manageMember');
            Route::post('banPermitManager', [ManagerController::class, 'banPermitManager'])->name('manageMember');
            Route::post('editManager', [ManagerController::class, 'editManager'])->name('manageMember');
            Route::post('insertManager', [ManagerController::class, 'insertManager'])->name('manageMember');
            Route::get('getManagerByName', [ManagerController::class, 'getManagerByName'])->name('manageMember');
        });



        // Route::group(['middleware' => ['manageMemberMiddleware']], function () {

            //MircroCentre routes
            Route::get('/view/microcentre', [ManageMicroCentreController::class, "viewMicrocentre"]);
            Route::post('/add/microcentre', [ManageMicroCentreController::class, "addMicrocentre"]);
            Route::get('/last/microcentre', [ManageMicroCentreController::class, "fetch_last_microcentre"]);
            Route::get('/show/single/microcentre/{id}', [ManageMicroCentreController::class, "show_single_Microcentre"]);
            Route::post('/edit/microcentre/{id}', [ManageMicroCentreController::class, "editMicrocentre"]);
            Route::post('/delete/microcentre/{id}', [ManageMicroCentreController::class, "deleteMicrocentre"]);
            Route::get('/get/all/branch/name_and_code', [ManageMicroCentreController::class, "get_all_branch_name_and_code"]);
            //default stocks
            Route::get('/get/default/stocks', [ManageStockController::class, "default_stocks"]);


            //staff work
            Route::get('/view/staff/{staff_id?}', [StaffController::class, "viewStaff"])->name('manageMember');
            Route::post('/store/staff', [StaffController::class, "storeStaff"])->name('manageMember');
            Route::post('/update/staff/{staff_id?}', [UpdateStaffController::class, "updateStaff"])->name('manageMember');
            Route::post('/delete/staff/{staff_id?}', [ManageStaffController::class, "removeStaff"])->name('manageMember');
            Route::post('/ban_unban/staff/{staff_id?}', [ManageStaffController::class, "ban_unban"])->name('manageMember');


            //patient work
            Route::post('/register/patient', [PatientController::class, "registerPatient"])->name('manageMember');
            Route::post('/update/patient/{patient_id?}', [UpdatePatientController::class, "updatePatient"])->name('manageMember');
            Route::get('/view/patient/{patient_id?}', [PatientController::class, "viewPatient"])->name('manageMember');
            Route::post('/update/patient/{patient_id?}', [UpdatePatientController::class, "updatePatient"])->name('manageMember');
            Route::post('/block_unblock/patient/{patient_id?}', [PatientController::class, "block_unblock_patient"])->name('manageMember');
            Route::get('/get/patient/name_and_id', [PatientController::class, "get_patient_name_and_id"])->name('manageMember');


            //machine work
            Route::post('/add/machine/{bn}', [MachineController::class, "addMachine"])->name('manageMember');
            //for getting both single and all machine
            Route::get('/view/machine/{machine_id?}', [MachineController::class, "viewMachine"])->name('manageMember');
            Route::post('/edit/machine/{id?}', [EditMachineController::class, "editMachine"])->name('manageMember');
            Route::post('/delete/machine/{id?}', [DeleteMachineController::class, "deleteMachine"])->name('manageMember');
            Route::post('/ban_unban/machine/{id?}', [DeleteMachineController::class, "ban_unban"])->name('manageMember');

        // });






        //Activity_log
        // Route::group(['middleware' => ['activityLogMiddleware']], function () {

            Route::get('activityLog', [ActivityLogController::class, 'activityLog'])->name('activityLog');
            Route::get('activity_log_filter_list', [ActivityLogController::class, 'activity_log_filter_list'])->name('activityLog');

        // });


        // Route::group(['middleware' => ['homeDialysisMiddleware']], function () {

            //Admin >> Home Dialysis
            Route::get('homeDialysisList', [HomeDialysisController::class, 'homeDialysisList'])->name('homeDialysisMiddleware');;

            Route::get('homeDialysisListByDate', [HomeDialysisController::class, 'homeDialysisListByDate'])->name('homeDialysisMiddleware');;

            Route::post('homeDialysisInsert', [HomeDialysisController::class, 'homeDialysisInsert'])->name('homeDialysisMiddleware');;

            Route::get('fetch_home_dialysis_patient_ById', [HomeDialysisController::class, 'fetch_home_dialysis_patient_ById'])->name('homeDialysisMiddleware');;

            Route::post('deleteHomeDialysisPatient', [HomeDialysisController::class, 'deleteHomeDialysisPatient'])->name('homeDialysisMiddleware');;
            Route::get('getRegion', [HomeDialysisController::class, 'getRegion'])->name('homeDialysisMiddleware');;
            Route::get('getOtherHDStaff', [HomeDialysisController::class, 'getOtherHDStaff'])->name('homeDialysisMiddleware');;
            Route::get('getOtherHDMachine', [HomeDialysisController::class, 'getOtherHDMachine'])->name('homeDialysisMiddleware');;

            Route::get('getOtherHDDoctor', [HomeDialysisController::class, 'getOtherHDDoctor'])->name('homeDialysisMiddleware');;

            Route::post('updateHomeDialysisPatient', [HomeDialysisController::class, 'updateHomeDialysisPatient'])->name('homeDialysisMiddleware');;

            Route::get('fetchDoctoronId', [HomeDialysisController::class, 'fetchDoctoronId'])->name('homeDialysisMiddleware');;

            Route::get('fetchMachineonId', [HomeDialysisController::class, 'fetchMachineonId'])->name('homeDialysisMiddleware');;

            Route::get('fetchStaffonId', [HomeDialysisController::class, 'fetchStaffonId'])->name('homeDialysisMiddleware');;

            Route::get('fetchHDpatient', [HomeDialysisController::class, 'fetchHDpatient'])->name('homeDialysisMiddleware');;

            //Create Home Dialysis
            Route::get('homeDialysisInsertApiOne', [HomeDialysisController::class, 'homeDialysisInsertApiOne'])->name('homeDialysisMiddleware');;

            Route::get('homeDialysisInsertApiTwo', [HomeDialysisController::class, 'homeDialysisInsertApiTwo'])->name('homeDialysisMiddleware');;

        // });



        // Route::group(['middleware' => ['statisticsMiddleware']], function () {

            //Admin >> Statistics >> staff info graph
            Route::get('staff_consumable_graph', [StaffController::class, 'staff_consumable_graph']);
            Route::get('staff_pharma_graph', [StaffController::class, 'staff_pharma_graph']);
            Route::get('dialyzer_tubing_graph', [HomeDialysisController::class, 'dialyzer_tubing_graph']);
            Route::get('patient_charges_graph', [HomeDialysisController::class, 'patient_charges_graph']);
            Route::get('patient_per_location_graph', [HomeDialysisController::class, 'patient_per_location_graph']);

            //Statistics
            Route::get('getStaffInfo', [StaffInfoController::class, 'getStaffInfo']);
            Route::get('getStaffInfoByDate', [StaffInfoController::class, 'getStaffInfoByDate']);


            //Admin >> statistics >> Appointment Info
            Route::get('getAppointment', [appointmentController::class, 'getAppointment']);
            Route::get('appointmentSortBybranch', [appointmentController::class, 'appointmentSortBybranch']);
            Route::get('graphAppointmentInfo', [appointmentController::class, 'graphAppointmentInfo']);
            Route::get('graphAppointmentBetweenDates', [appointmentController::class, 'graphAppointmentBetweenDates']);
            Route::get('graphAppointmentTimeGap', [appointmentController::class, 'graphAppointmentTimeGap']);
            Route::get('appointmentInfoLastMonths', [appointmentController::class, 'appointmentInfoLastMonths']);



            //statistics
            //for patient
            Route::get('view/stats/patient/info', [PatientInfoController::class, 'stats_for_table']);
            //currently dislyging patient
            Route::get('view/current/dialysing/patients', [PatientInfoController::class, 'current_dialysing_patient']);

            //patient report
            Route::get('patient/report/{pid?}', [PatientInfoController::class, 'patient_report']);

            //dialysis sheet
            Route::get('patient/dialysis/report/{aid?}', [PatientInfoController::class, 'dialysis_session_sheet']);
        // });



        //ADMIN REPORTS SECTION
            //center based repprt
                //hospital report
                 Route::get('get/hospital/report',[CenterBasedReportController::class,'hospital_report']);
                //stock maintainance report
                 Route::get('get/stock_maintenance/report',[CenterBasedReportController::class,'stock_maintenance_report']);
                //machine report
                 Route::get('get/machine/report',[CenterBasedReportController::class,'machine_report']);
                //sharing rates report
                 Route::get('get/sharing_rates/report',[CenterBasedReportController::class,'sharing_rates_report']);
                //sharing rates report
                Route::get('get/closing_stocks/report',[CenterBasedReportController::class,'closing_stocks_report']);

            //doctor reports
                //doctor report
                Route::get('get/doctor/report',[DoctorReportController::class,'doctor_report']);

            //patient reports
                //patient report
                Route::get('get/patient/report',[PatientReportController::class,'patient_report']);
                //private patient report
                Route::get('get/private_patient/report',[PatientReportController::class,'private_patient_report']);
                //mjpjay patient report
                Route::get('get/mjpjay_patient/report',[PatientReportController::class,'mjpjay_patient_report']);






        Route::group(['middleware' => ['smMiddleware']], function () {

            //stock maintainence
            //add product
            Route::post('stock/maintenance/add/product', [AddNewProductController::class, 'addProduct'])->name('sm');

            //show stock
            Route::get('stock/maintenance/show/stock/{branch_name?}', [AddStockController::class, 'showStocks'])->name('sm');

            //add stocks
            Route::post('/stock/maintainance/add/stocks/{branch_name?}', [AddStockController::class, "add_stocks"])->name('sm');

            //delete stocks
            Route::post('/stock/maintainance/delete/stocks/{branch_name?}', [ManageStockController::class, "delete_stock"])->name('sm');

            //remove stocks
            Route::post('/stock/maintainance/remove/stocks/{branch_name?}', [ManageStockController::class, "remove_stock"])->name('sm');

            //shift stocks
            Route::post('/stock/maintainance/shift/stock/', [ManageStockController::class, "shift_stock"])->name('sm');
        });




        //bill
        Route::group(['middleware' => ['bill_patient_parameter_middleware']], function () {

            Route::get('/patient/bill/{appointment_id?}', [PatientBillController::class, 'patient_bill']);
        });


        //Employee Attendence API
            // employee_attendance
            Route::get('employee/attendance',[EmployeeAttendanceController::class,'employee_attendance']);
            // employee_attendance_map
            Route::get('employee/attendance/map',[EmployeeAttendanceController::class,'employee_attendance_map']);



    });
// });



//admin login
// Route::post('login/admin', [AdminController::class, "login"]);

// Route::get('stock/maintenance/show/stock/{branch_name}',[AddStockController::class,'showStocks']);
