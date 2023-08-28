import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/Admin/Services/Admin.service';
import { AdminVM } from 'src/app/modelVM/AdminVM';
import { AuthModel } from 'src/app/modelVM/AuthModel';
import { DataResponce } from 'src/app/modelVM/DataResponce';

@Component({
  selector: 'app-AddAdmin',
  templateUrl: './AddAdmin.component.html',
  styleUrls: ['./AddAdmin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private service:AdminService,private router:Router) { }
  userData:AdminVM = {} as AdminVM;
  result:DataResponce={}as DataResponce;

  ngOnInit() {
  }
  AddAdmin(){
    this.service.AddAdmin(this.userData).subscribe(
      response=>{
        this.result=response;
        if(this.result.success===true){
          alert("succes");
          this.router.navigate(['/Logout']);
        }
        else{
          alert(this.result.message);
        }
      },
      error=>{
        alert("error : "+error.message);
      }
    )

  }

}
