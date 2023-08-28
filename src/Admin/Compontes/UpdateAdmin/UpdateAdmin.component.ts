import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/Admin/Services/Admin.service';
import { AdminVM } from 'src/app/modelVM/AdminVM';
import { DataResponce } from 'src/app/modelVM/DataResponce';

@Component({
  selector: 'app-UpdateAdmin',
  templateUrl: './UpdateAdmin.component.html',
  styleUrls: ['./UpdateAdmin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  constructor(private service:AdminService,private router:Router) { }
  result:DataResponce={} as DataResponce;
  userData:AdminVM = {} as AdminVM;

  ngOnInit() {
     this.getData();
  }
  getData(){
    this.service.AdminProfile().subscribe(
      response=>{
        
        
        if(response.success===true){
          // Get a reference to the input element
          const inputElement = document.getElementById("firstname") as HTMLInputElement;
          inputElement.value = response.data[0].firstName;
          this.userData.firstName=response.data[0].firstName;
          const inputElement2 = document.getElementById("lastname") as HTMLInputElement;
          inputElement2.value = response.data[0].lastName;
          this.userData.lastName=response.data[0].lastName;
          const inputElement3 = document.getElementById("phoneNumber") as HTMLInputElement;
          inputElement3.value = response.data[0].phoneNumber;
          this.userData.phoneNumber = response.data[0].phoneNumber;


          console.log(this.result);
        }
      },
      error=>{
        alert("error");
      }
    )
  }

  UpdateAdmin(){
    
    this.service.updateAdmin(this.userData).subscribe(
      response=>{
        this.result=response;
        console.log(response);
        alert("succes");
        if(response.success===true){
          this.router.navigate(['/profileAdmin'])
        }
        
      },
      error=>{
        alert("error");
        console.log(error.message);
      }
    )
  }

}
