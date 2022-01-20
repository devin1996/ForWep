import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Worldspace } from './worldspace';

@Injectable({
  providedIn: 'root'
})
export class WorldspaceserviceService {

  private baseURL = "http://localhost:8080/api/v3/entityval";
  private baseURL2 = "http://localhost:8080/api/v3/entityval1";

  constructor(private httpClient: HttpClient) { }

  getEntity(): Observable<Worldspace>{
    return this.httpClient.get<Worldspace>(`${this.baseURL}`);
  }

  getEntity2(): Observable<Worldspace>{
    return this.httpClient.get<Worldspace>(`${this.baseURL2}`);
  }
}
