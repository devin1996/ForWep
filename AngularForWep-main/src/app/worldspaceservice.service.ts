import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Worldspace } from './worldspace';

@Injectable({
  providedIn: 'root'
})
export class WorldspaceserviceService {

  private baseURL = "http://localhost:8080/api/v3/entityval";

  constructor(private httpClient: HttpClient) { }

  getEntity(): Observable<Worldspace>{
    return this.httpClient.get<Worldspace>(`${this.baseURL}`);
  }

}
