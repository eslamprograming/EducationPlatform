import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModelModule } from 'src/SharedModel/SharedModel.module';
import { AuthModule } from 'src/Auth/Auth.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TokenInterceptor } from './token-interceptor.interceptor';
import { AdminModule } from 'src/Admin/Admin.module';


@NgModule({
  declarations: [		
    AppComponent,
      LayoutComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModelModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AdminModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
