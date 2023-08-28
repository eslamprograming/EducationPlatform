import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/Admin/Services/Admin.service';

@Component({
  selector: 'app-DeleteAdmin',
  templateUrl: './DeleteAdmin.component.html',
  styleUrls: ['./DeleteAdmin.component.css']
})
export class DeleteAdminComponent implements OnInit {

  constructor(private readonly service:AdminService,private router:Router) { }

  ngOnInit() {
    this.DeleteAdmin();
  }
  DeleteAdmin(){
    this.service.DeleteAdmin().subscribe(
      response=>{
        console.log(response);
        alert("succes");
        this.router.navigate(['/AllAdmins']);
      },
      error=>{
        alert("error");
      }
    )
  }

}
