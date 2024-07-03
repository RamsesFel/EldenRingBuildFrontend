import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeaponsModel } from '../models/weapons';
import { ArmorModel } from '../models/armors';
import { AshesOfWarModel } from '../models/ashes-of-war';
import { ClassesModel } from '../models/classes';
import { IncantationsModel } from '../models/incantations';
import { ShieldsModel } from '../models/shields';
import { SorceriesModel } from '../models/sorceries';
import { TalismansModel } from '../models/talismans';

@Injectable({
  providedIn: 'root'
})
export class EldenRingService {

  constructor(private http:HttpClient) { }
  //armor
  getArmorList(pageNum:number):Observable<ArmorModel[]> {
    return this.http.get<ArmorModel[]>(`https://eldenring.fanapis.com/api/armors?limit=100&page=${pageNum}`);
  }
  getArmorByName(name:string):Observable<ArmorModel>{
    return this.http.get<ArmorModel>(`https://eldenring.fanapis.com/api/armors?name=${name}`);
  }

  //ashes of war
  getAshesOfWarList():Observable<AshesOfWarModel[]> {
    return this.http.get<AshesOfWarModel[]>(`https://eldenring.fanapis.com/api/ashes?limit=100`);
  }
  getAshesOfWarByName(name:string):Observable<AshesOfWarModel> {
    return this.http.get<AshesOfWarModel>(`https://eldenring.fanapis.com/api/ashes?name=${name}`);
  }

  //classes
  getClassesList():Observable<ClassesModel[]> {
    return this.http.get<ClassesModel[]>(`https://eldenring.fanapis.com/api/classes?limit=100`);
  }
  getClassesByName(name:string):Observable<ClassesModel> {
    return this.http.get<ClassesModel>(`https://eldenring.fanapis.com/api/classes?name=${name}`);
  }

  //incantations
  getIncantationsList():Observable<IncantationsModel[]> {
    return this.http.get<IncantationsModel[]>(`https://eldenring.fanapis.com/api/incantations?limit=100`);
  }
  getIncantationsByName(name:string):Observable<IncantationsModel> {
    return this.http.get<IncantationsModel>(`https://eldenring.fanapis.com/api/incantations?name=${name}`);
  }

  //shields
  getShieldsList():Observable<ShieldsModel[]> {
    return this.http.get<ShieldsModel[]>(`https://eldenring.fanapis.com/api/shields?limit=100`);
  }
  getShieldsByName(name:string):Observable<ShieldsModel> {
    return this.http.get<ShieldsModel>(`https://eldenring.fanapis.com/api/shields?name=${name}`);
  }

  //sorceries
  getSorceriesList():Observable<SorceriesModel[]> {
    return this.http.get<SorceriesModel[]>(`https://eldenring.fanapis.com/api/sorceries?limit=100`);
  }
  getSorceriesByName(name:string):Observable<SorceriesModel> {
    return this.http.get<SorceriesModel>(`https://eldenring.fanapis.com/api/sorceries?name=${name}`);
  }

  //talismans
  getTalismansList():Observable<TalismansModel[]> {
    return this.http.get<TalismansModel[]>(`https://eldenring.fanapis.com/api/talismans?limit=100`);
  }
  getTalismansByName(name:string):Observable<TalismansModel> {
    return this.http.get<TalismansModel>(`https://eldenring.fanapis.com/api/talismans?name=${name}`);
  }

  //weapons
  getWeaponList(pageNum:number):Observable<WeaponsModel[]>{
    return this.http.get<WeaponsModel[]>(`https://eldenring.fanapis.com/api/weapons?limit=100&page=${pageNum}`);
  }
  getWeaponsByName(name:string):Observable<WeaponsModel> {
    return this.http.get<WeaponsModel>(`https://eldenring.fanapis.com/api/weapons?name=${name}`);
  }
}
