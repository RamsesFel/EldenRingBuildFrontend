import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from '../models/favorite';
import { Created } from '../models/created';
import { Build } from '../models/build';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) { }

  url: string = "https://localhost:7063";

  //-----------------build
  getAllBuilds():Observable<Build[]> {
    return this.http.get<Build[]>(`${this.url}/api/Build`);
  }
  getBuildById(id:number):Observable<Build> {
    return this.http.get<Build>(`${this.url}/api/Build/${id}`);
  }
  addBuild(newBuild:Build):Observable<Build> {
    return this.http.post<Build>(`${this.url}/api/Build`, newBuild);
  }
  updateBuild(updateBuild:Build):Observable<void> {
    return this.http.put<void>(`${this.url}/api/Build/${updateBuild.id}`, updateBuild);
  }
  deleteBuild(id:number):Observable<void> {
    return this.http.delete<void>(`${this.url}/api/Build/${id}`);
  }

  //-----------------created
  getCreatedById(id:string):Observable<Created> {
    return this.http.get<Created>(`${this.url}/api/Created/${id}`);
  }
  
  addCreated(newCreated:Created):Observable<Created> {
    return this.http.post<Created>(`${this.url}/api/Created`, newCreated);
  }

  deleteCreated(id:number):Observable<void> {
    return this.http.delete<void>(`${this.url}/api/Created/${id}`);
  }

  //-----------------favorite
  getFavoriteById(id:string):Observable<Favorite> {
    return this.http.get<Favorite>(`${this.url}/api/Favorite/${id}`);
  }

  addFavorite(newFavorite:Favorite):Observable<Favorite> {
    return this.http.post<Favorite>(`${this.url}/api/Favorite`, newFavorite);
  } 

  deleteFavorite(id:number):Observable<void> {
    return this.http.delete<void>(`${this.url}/api/Favorite/${id}`);
  }
}
