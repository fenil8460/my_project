<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;
use App\Models\Account;
use App\Models\Activity_log;
use App\Models\Admin;
use App\Models\Appointment;
use App\Models\Blood_Report;
use App\Models\booked_appointments;
use App\Models\Centre_Detail;
use App\Models\Centre;
use App\Models\Doctor;
use App\Models\feedback;
use App\Models\Coupon;
use App\Models\home_dialysis;
use App\Models\Location_Report;
use App\Models\Machine;
use App\Models\Manager;
use App\Models\patient_bill;
use App\Models\Patient_parameter;
use App\Models\Patient_Report;
use App\Models\Patient;
use App\Models\Post_dialysis;
use App\Models\Pre_dialysis;
use App\Models\Prescription;
use App\Models\Renal_Report;
use App\Models\Staff;
use App\Models\StockMaintenance;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_example()
    {
        $this->assertTrue(true);
    }

    // public function test_login_form(){
    //     $data=[
    //         "email"=>"d2@trp.org",
    //         "password"=>"123456789",
    //         "category"=>"Doctor",
    //         "submit"=>true
    //     ];
    //     $response =$this->post('api/login',$data);

    //     $response->assertStatus(200);
    // }

    // public function test_register_form(){
    //     Storage::fake('avatars');
    //     $data=[
    //         "username"=>"test",
    //         "branch"=>"testr",
    //         "phone"=>"8565236520",
    //         "emphone"=>"7845123260",
    //         "email"=>"fenilDoc1@gmail.com",
    //         "password"=>"123456789",
    //         "category"=>"Doctor",
    //         "designation"=>"Senior Technician",
    //         "password_confirmation"=>"123456789",
    //         "profile_pic"=>UploadedFile::fake()->image('avatar.jpg')
    //     ];
    //     $response =$this->post('api/register',$data);

    //     $response->assertStatus(200);
    // }

    public function test_user_duplication(){
        $user1 = User::make([
            'name'=>'Dary',
            'email'=>'dary@gmail.com'
        ]);
        $user2 = User::make([
            'name'=>'test',
            'email'=>'test@gmail.com'
        ]);

        $this->assertTrue($user1->name != $user2->name);
    }

    public function test_delete_user(){
        $user = User::factory()->count(1)->make();
        $user=User::first();

        if($user){
            $user->delete();
        }
        $this->assertTrue(true);
    }

    public function test_account(){
        $account1 = Account::make([
            'stock_name'=>'Dialyzer',
            'brand'=>'Multiuse'
        ]);
        $account2 = Account::make([
            'stock_name'=>'Optineuron forte',
            'brand'=>'Mangalmurti Hospital'
        ]);

        $this->assertTrue($account1->stock_name != $account2->stock_name);
    }

    public function test_activity_log(){
        $activity_log1 = Activity_log::make([
            'log'=>'Super Admin(Admin) has logged In.',
            'action'=>'logged in'
        ]);
        $activity_log2 = Activity_log::make([
            'log'=>'Super Admin(Admin) has updated password.',
            'action'=>'profile updated'
        ]);

        $this->assertTrue($activity_log1->log != $activity_log2->log);
    }
    
    public function test_admin(){
        $admin1 = Admin::make([
            'username'=>'Super Admin',
            'email'=>'admin@vidur.ml'
        ]);
        $admin2 = Admin::make([
            'username'=>'Nandini pednekar sawant',
            'email'=>'sakshisawant208@gmail.co'
        ]);

        $this->assertTrue($admin1->username != $admin2->username);
    }
    
    public function test_appointment(){
        $appointment1 = Appointment::make([
            'start_time'=>'2021-09-17 08:25:36',
            'record_type'=>'pre_dialysis'
        ]);
        $appointment2 = Appointment::make([
            'start_time'=>'2020-12-19 08:35:39',
            'record_type'=>'pre_dialysis'
        ]);

        $this->assertTrue($appointment1->start_time != $appointment2->start_time);
    }
    
    public function test_blood_report(){
        $blood_report1 = Blood_Report::make([
            'patient_id'=>'20',
            'remark'=>'nothing'
        ]);
        $blood_report2 = Blood_Report::make([
            'patient_id'=>'20',
            'remark'=>''
        ]);

        $this->assertTrue($blood_report1->remark != $blood_report2->remark);
    }
    
    public function test_booked_appointments(){
        $booked_appointments1 = booked_appointments::make([
            'branch_name'=>'Mangal murti hospital',
            'branch_code'=>'IRCS'
        ]);
        $booked_appointments2 = booked_appointments::make([
            'branch_name'=>'Mangal murti hospital',
            'branch_code'=>'MMH'
        ]);

        $this->assertTrue($booked_appointments1->branch_code != $booked_appointments2->branch_code);
    }
    
    public function test_centre_detail(){
        $center1 = Centre::make([
            'centre_name'=>'Mangalmurti Hospital',
            'code'=>'MMH'
        ]);
        $center2 = Centre::make([
            'centre_name'=>'Shivam Dialysis Center',
            'code'=>'SDC'
        ]);

        $this->assertTrue($center1->centre_name != $center2->centre_name);
    }
    
    public function test_centre(){
        $center_details1 = Centre_Detail::make([
            'center_name'=>'AH',
            'name'=>'Electricity Bill'
        ]);
        $center_details2 = Centre_Detail::make([
            'center_name'=>'IRCS',
            'name'=>'House Keeping Rathnamala'
        ]);

        $this->assertTrue($center_details1->center_name != $center_details2->center_name);
    }
    
    public function test_doctor(){
        $doctor1 = Doctor::make([
            'username'=>'Dr Akash Singhada',
            'branch'=>'MMH,SDC,RH'
        ]);
        $doctor2 = Doctor::make([
            'username'=>'Dr Sandip Bhurke',
            'branch'=>'MMH,PH,RH,OH'
        ]);

        $this->assertTrue($doctor1->username != $doctor2->username);
    }
    
    public function test_feedback(){
        $feedback1 = feedback::make([
            'encrypted_code'=>'dsaadsa@fr4',
            'liked_most'=>'Multiuse'
        ]);
        $feedback2 = feedback::make([
            'encrypted_code'=>'vdfvdsfds$',
            'liked_most'=>'Mangalmurti Hospital'
        ]);

        $this->assertTrue($feedback1->encrypted_code != $feedback2->encrypted_code);
    }
    
    public function test_coupon(){
        $coupon1 = Coupon::make([
            'code'=>'100SALE',
            'amount'=>'100'
        ]);
        $coupon2 = Coupon::make([
            'code'=>'150OFF',
            'amount'=>'150'
        ]);

        $this->assertTrue($coupon1->code != $coupon2->code);
    }
    
    public function test_home_dialysis(){
        $home_dialysis1 = home_dialysis::make([
            'per_hour_fee'=>'Dialyzer',
            'location'=>'Multiuse'
        ]);
        $home_dialysis2 = home_dialysis::make([
            'per_hour_fee'=>'Optineuron forte',
            'location'=>'Mangalmurti Hospital'
        ]);

        $this->assertTrue($home_dialysis1->per_hour_fee != $home_dialysis2->per_hour_fee);
    }
    
    public function test_location_report(){
        $location_report1 = Location_Report::make([
            'address'=>'415 S Wall St, Downtown Los Angeles, Los Angeles County, United States, North America, 90013',
            'coordinate'=>'34.046013,-118.244965'
        ]);
        $location_report2 = Location_Report::make([
            'address'=>'415 S Wall St, Downtown Los Angeles, Los Angeles County, United States, North America, 90014',
            'coordinate'=>'34.046013,-118.244965'
        ]);

        $this->assertTrue($location_report1->address != $location_report2->address);
    }
    
    public function test_machine(){
        $machine1 = Machine::make([
            'code'=>'SDC',
            'provider'=>'Hemant Surgicals'
        ]);
        $machine2 = Machine::make([
            'code'=>'MMH',
            'provider'=>'Hemant Surgicals'
        ]);

        $this->assertTrue($machine1->code != $machine2->code);
    }
    
    public function test_manager(){
        $manager1 = Manager::make([
            'username'=>'Jitesh Pednekar',
            'email'=>'pednekar.jeet04@gmail.com'
        ]);
        $manager2 = Manager::make([
            'username'=>'Sakshi Sawant',
            'email'=>'sakshi@therenalproject.com'
        ]);

        $this->assertTrue($manager1->username != $manager2->username);
    }
    
    public function test_patient_bill(){
        $patient_bill1 = patient_bill::make([
            'name'=>'Bed Sheet',
            'brand'=>''
        ]);
        $patient_bill2 = patient_bill::make([
            'name'=>'Chemical M/C',
            'brand'=>''
        ]);

        $this->assertTrue($patient_bill1->name != $patient_bill2->name);
    }
    
    public function test_Patient_parameter(){
        $patient_parameter1 = Patient_parameter::make([
            'time'=>'09:21:00',
            'bps'=>'130'
        ]);
        $patient_parameter2 = Patient_parameter::make([
            'time'=>'10:10:00',
            'bps'=>'140'
        ]);

        $this->assertTrue($patient_parameter1->time != $patient_parameter2->time);
    }
    
    public function test_patient_report(){
        $patient_report1 = Patient_Report::make([
            'patient_id'=>10,
            'description'=>'Multiuse'
        ]);
        $patient_report2 = Patient_Report::make([
            'patient_id'=>1,
            'description'=>'Mangalmurti Hospital'
        ]);

        $this->assertTrue($patient_report1->patient_id != $patient_report2->patient_id);
    }
    
    public function test_patient(){
        $patient1 = Patient::make([
            'name'=>'Suresh rathod',
            'phone_number'=>'9820256283'
        ]);
        $patient2 = Patient::make([
            'name'=>'Mafatlal panchal',
            'phone_number'=>'8451904561'
        ]);

        $this->assertTrue($patient1->name != $patient2->name);
    }
    
    public function test_post_dialysis(){
        $post_dialysis1 = Post_dialysis::make([
            'heart_rate'=>74,
            'weight'=>40
        ]);
        $post_dialysis2 = Post_dialysis::make([
            'heart_rate'=>80,
            'weight'=>41
        ]);

        $this->assertTrue($post_dialysis1->heart_rate != $post_dialysis2->heart_rate);
    }
    
    public function test_pre_dialysis(){
        $pre_dialysis1 = Pre_dialysis::make([
            'heart_rate'=>74,
            'weight'=>40
        ]);
        $pre_dialysis2 = Pre_dialysis::make([
            'heart_rate'=>80,
            'weight'=>41
        ]);

        $this->assertTrue($pre_dialysis1->heart_rate != $pre_dialysis2->heart_rate);
    }
    
    public function test_prescription(){
        $prescription1 = Prescription::make([
            'prescription'=>'Currently you dont have any prescription. Just chill!',
            'date'=>'2021-12-14 09:55:56'
        ]);
        $prescription2 = Prescription::make([
            'prescription'=>'Currently you dont have any prescription.',
            'date'=>'2021-12-16 11:27:04'
        ]);

        $this->assertTrue($prescription1->prescription != $prescription2->prescription);
    }
    
    public function test_renal_report(){
        $renal_report1 = Renal_Report::make([
            'protein'=>10,
            'albumin'=>0.5
        ]);
        $renal_report2 = Renal_Report::make([
            'protein'=>12,
            'albumin'=>0.3
        ]);

        $this->assertTrue($renal_report1->protein != $renal_report2->protein);
    }
    
    public function test_staff(){
        $staff1 = Staff::make([
            'username'=>'Jaymala',
            'designation'=>'Senior Technician'
        ]);
        $staff2 = Staff::make([
            'username'=>'Nishita Hindalekar',
            'designation'=>'Senior Technician'
        ]);

        $this->assertTrue($staff1->username != $staff2->username);
    }
    
    public function test_stockMaintenance(){
        $user1 = StockMaintenance::make([
            'branch_name'=>'SDC',
            'product_name'=>'16g Needle'
        ]);
        $user2 = StockMaintenance::make([
            'branch_name'=>'MMH',
            'product_name'=>'17g Needle'
        ]);

        $this->assertTrue($user1->branch_name != $user2->branch_name);
    }


}
