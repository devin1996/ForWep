import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Mouse } from './mouse';

@Injectable({
  providedIn: 'root'
})
export class MouseService {

  private baseURL = "http://localhost:8080/api/v3/mouse123";

  constructor(private httpClient: HttpClient) { }

  sendmousedetails(mouse: Mouse): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, mouse);
  }


}
