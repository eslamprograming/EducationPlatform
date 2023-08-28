import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Admin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddAdminComponent } from './Compontes/AddAdmin/AddAdmin.component';
import { AllAdminsComponent } from './Compontes/AllAdmins/AllAdmins.component';
import { DeleteAdminComponent } from './Compontes/DeleteAdmin/DeleteAdmin.component';
import { ProfileAdminComponent } from './Compontes/ProfileAdmin/ProfileAdmin.component';
import { UpdateAdminComponent } from './Compontes/UpdateAdmin/UpdateAdmin.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  declarations: [AdminComponent,AddAdminComponent,AllAdminsComponent,DeleteAdminComponent,ProfileAdminComponent,UpdateAdminComponent]
})
export class AdminModule {
  
 }
