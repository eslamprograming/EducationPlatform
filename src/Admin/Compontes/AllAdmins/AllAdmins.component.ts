import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/Admin/Services/Admin.service';
import { DataResponce } from 'src/app/modelVM/DataResponce';

@Component({
  selector: 'app-AllAdmins',
  templateUrl: './AllAdmins.component.html',
  styleUrls: ['./AllAdmins.component.css']
})
export class AllAdminsComponent implements OnInit {

  constructor(private service:AdminService,private router:Router) { }
  result:DataResponce={}as DataResponce;

  ngOnInit() {
    this.AllAdmin();
  }
  AllAdmin(){
    this.service.AllAdmins().subscribe(
      response=>{
        this.result=response;
        if(this.result.success===true){
          console.log(response);
          alert("susses");
        }
        else{
          alert("faild :"+this.result.message);
        }
      },
      error=>{alert(error.message);}
    )
  }

}
