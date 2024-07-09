import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeaponsModel } from '../models/weapons';
import { ArmorModel } from '../models/armors';
import { AshesOfWarModel } from '../models/ashes-of-war';
import { ClassesModel } from '../models/classes';
import { SpellsModel } from '../models/spells';
import { TalismansModel } from '../models/talismans';

@Injectable({
  providedIn: 'root'
})
export class EldenRingService {

  constructor(private http:HttpClient) { }
  //armor
  getArmorList(pageNum:number):Observable<ArmorModel> {
    return this.http.get<ArmorModel>(`https://eldenring.fanapis.com/api/armors?limit=100&page=${pageNum}`);
  }
  getArmorByName(name:string):Observable<ArmorModel>{
    return this.http.get<ArmorModel>(`https://eldenring.fanapis.com/api/armors?limit=100&name=${name}`);
  }

  //ashes of war
  getAshesOfWarList():Observable<AshesOfWarModel> {
    return this.http.get<AshesOfWarModel>(`https://eldenring.fanapis.com/api/ashes?limit=100`);
  }
  getAshOfWarByName(name:string):Observable<AshesOfWarModel> {
    return this.http.get<AshesOfWarModel>(`https://eldenring.fanapis.com/api/ashes?limit=100&name=${name}`);
  }

  //classes
  getClassesList():Observable<ClassesModel> {
    return this.http.get<ClassesModel>(`https://eldenring.fanapis.com/api/classes?limit=100`);
  }
  getClassByName(name:string):Observable<ClassesModel> {
    return this.http.get<ClassesModel>(`https://eldenring.fanapis.com/api/classes?limit=100&name=${name}`);
  }



  //sorceries
  getSorceriesList():Observable<SpellsModel> {
    return this.http.get<SpellsModel>(`https://eldenring.fanapis.com/api/sorceries?limit=100`);
  }
  getSorceryByName(name:string):Observable<SpellsModel> {
    return this.http.get<SpellsModel>(`https://eldenring.fanapis.com/api/sorceries?limit=100&name=${name}`);
  }
  getIncantationsList():Observable<SpellsModel> {
    return this.http.get<SpellsModel>(`https://eldenring.fanapis.com/api/incantations?limit=100`);
  }
  getIncantationByName(name:string):Observable<SpellsModel> {
    return this.http.get<SpellsModel>(`https://eldenring.fanapis.com/api/incantations?limit=100&name=${name}`);
  }

  //talismans
  getTalismansList():Observable<TalismansModel> {
    return this.http.get<TalismansModel>(`https://eldenring.fanapis.com/api/talismans?limit=100`);
  }
  getTalismanByName(name:string):Observable<TalismansModel> {
    return this.http.get<TalismansModel>(`https://eldenring.fanapis.com/api/talismans?limit=100&name=${name}`);
  }

  //weapons
  getWeaponList(pageNum:number):Observable<WeaponsModel>{
    return this.http.get<WeaponsModel>(`https://eldenring.fanapis.com/api/weapons?limit=100&page=${pageNum}`);
  }
  getWeaponByName(name:string):Observable<WeaponsModel> {
    return this.http.get<WeaponsModel>(`https://eldenring.fanapis.com/api/weapons?limit=100&name=${name}`);
  }
  getShieldsList():Observable<WeaponsModel> {
    return this.http.get<WeaponsModel>(`https://eldenring.fanapis.com/api/shields?limit=100`);
  }
  getShieldByName(name:string):Observable<WeaponsModel> {
    return this.http.get<WeaponsModel>(`https://eldenring.fanapis.com/api/shields?limit=100&name=${name}`);
  }}
