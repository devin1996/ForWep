import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Weapon } from './weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponserviceService {

  private baseURL = "http://localhost:8080/api/v3/weapons";
  
  constructor(private httpClient: HttpClient) { }

  getWeaponList(): Observable<Weapon[]>{
    return this.httpClient.get<Weapon[]>(`${this.baseURL}`);
  }

  createWeapon(weapon: Weapon): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, weapon);
  }

  updateWeapon(id: number, weapon: Weapon): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, weapon);
  }

  deleteWeapon(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getWeaponById(id: number): Observable<Weapon>{
    return this.httpClient.get<Weapon>(`${this.baseURL}/${id}`);
  }



}
