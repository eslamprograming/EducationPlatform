import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/Admin/Services/Admin.service';
import { DataResponce } from 'src/app/modelVM/DataResponce';

@Component({
  selector: 'app-ProfileAdmin',
  templateUrl: './ProfileAdmin.component.html',
  styleUrls: ['./ProfileAdmin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  constructor(private service:AdminService,private router:Router) { }
  result:DataResponce={} as DataResponce;

  ngOnInit() {
    this.profileAdmin();
  }
  profileAdmin(){
    this.service.AdminProfile().subscribe(
      response=>{
        this.result=response;
        console.log(response);
        alert("succes");
      },
      error=>{
        alert("error");
      }
    )
  }

}
