import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModelComponent } from './SharedModel.component';
import { HeaderComponent } from './Componentes/Header/Header.component';
import { FooterComponent } from './Componentes/Footer/Footer.component';
import { HomeComponent } from './Componentes/Home/Home.component';
import { RouterModule } from '@angular/router';
import { AppModule } from 'src/app/app.module';


@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [HeaderComponent,FooterComponent,HomeComponent]
  ,
  exports:[
    HeaderComponent,FooterComponent,HomeComponent
  ],
})
export class SharedModelModule { }
