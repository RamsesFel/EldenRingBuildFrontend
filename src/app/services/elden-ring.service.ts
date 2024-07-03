import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapons } from '../models/weapons';

@Injectable({
  providedIn: 'root'
})
export class EldenRingService {

  constructor(private http:HttpClient) { }

  getWeapon():Observable<Weapons>{
    return this.http.get<Weapons>(`https://eldenring.fanapis.com/api/weapons/17f695c42f0l0i1ohb4cao0qxackpu`);
  }
}
