import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminVM } from 'src/app/modelVM/AdminVM';
import { AuthModel } from 'src/app/modelVM/AuthModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

constructor(private http:HttpClient) { }
userData:AdminVM = {} as AdminVM;
result:AuthModel={}as AuthModel;

AddAdmin(data: any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.post<any>(`${environment.apiUrl}/api/Admins/AddAdmin`, data, httpOptions);
}
AddPhoto(data: any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.post<any>(`${environment.apiUrl}/api/Admins/ImageAdmin`, data, httpOptions);
}


AdminProfile():Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/api/Admins/GetAdmin`);
}
AllAdmins():Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/api/Admins/GetAllAdmin`);
}
DeleteAdmin():Observable<any>{
  return this.http.delete<any>(`${environment.apiUrl}/api/Admins/DeletAdmin`);
}
updateAdmin(data:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.patch<any>(`${environment.apiUrl}/api/Admins/UpdateAdmin`,data,httpOptions);

}

}
