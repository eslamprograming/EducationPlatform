import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/Auth/Services/Auth.service';
import { ApplicationUser } from 'src/app/modelVM/ApplicationUser';
import { AuthModel } from 'src/app/modelVM/AuthModel';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  userData:ApplicationUser = {} as ApplicationUser;
  result:AuthModel={}as AuthModel;

  constructor(private dataService: AuthService,private router:Router) { }

  submitForm() {
    this.dataService.postData(this.userData).subscribe(
      response => {
        console.log(response); 
        this.result=response;
        if(this.result.isAuthenticated===true){
          localStorage.setItem("token",this.result.token);
          this.router.navigate(['']);
        }
        else{
          alert("faild : "+this.result.message);
        }
        console.log(response);        
        // Handle the response here
      },
      error => {
        alert("error");
        // Handle errors here
      }
    );
  }
  ngOnInit() {
  }

}
