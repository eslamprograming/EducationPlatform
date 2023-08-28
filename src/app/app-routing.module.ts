import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'src/Auth/Component/Register/Register.component';
import { HomeComponent } from 'src/SharedModel/Componentes/Home/Home.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from 'src/Auth/Component/profile/profile.component';
import { LoginComponent } from 'src/Auth/Component/Login/Login.component';
import { UpdateComponent } from 'src/Auth/Component/Update/Update.component';
import { UpdatePasswordComponent } from 'src/Auth/Component/UpdatePassword/UpdatePassword.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { LogoutComponent } from 'src/Auth/Component/Logout/Logout.component';
import { AddAdminComponent } from 'src/Admin/Compontes/AddAdmin/AddAdmin.component';
import { AllAdminsComponent } from 'src/Admin/Compontes/AllAdmins/AllAdmins.component';
import { DeleteAdminComponent } from 'src/Admin/Compontes/DeleteAdmin/DeleteAdmin.component';
import { ProfileAdminComponent } from 'src/Admin/Compontes/ProfileAdmin/ProfileAdmin.component';
import { UpdateAdminComponent } from 'src/Admin/Compontes/UpdateAdmin/UpdateAdmin.component';


const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'AllAdmins',component:AllAdminsComponent,canActivate:[AuthGuard]},
  {path:'DeleteAdmin',component:DeleteAdminComponent,canActivate:[AuthGuard]},
  {path:'profileAdmin',component:ProfileAdminComponent,canActivate:[AuthGuard]},
  {path:'UpdateAdmin',component:UpdateAdminComponent,canActivate:[AuthGuard]},

  ],
},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'Update',component:UpdateComponent,canActivate:[AuthGuard]},
  {path:'Updatepassword',component:UpdatePasswordComponent,canActivate:[AuthGuard]},
  {path:'Logout',component:LogoutComponent},
  {path:'AddAdmin',component:AddAdminComponent,canActivate:[AuthGuard]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
