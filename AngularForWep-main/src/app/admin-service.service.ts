import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseURL = "http://localhost:8080/api/admin/adminlogin";

  constructor(private httpClient: HttpClient) { }

  loginAdmin(admin: Admin): Observable<object>{
    console.log(admin);
    return this.httpClient.post(`${this.baseURL}`, admin);
  }

}
