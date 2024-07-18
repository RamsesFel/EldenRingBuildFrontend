import {GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { WeaponsComponent } from '../equipment/weapons/weapons.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { Favorite } from '../../models/favorite';
import { Created } from '../../models/created';
import { Build } from '../../models/build';
import { CreateComponent } from '../create/create.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [GoogleSigninButtonModule, WeaponsComponent, RouterLink, RouterOutlet, CreateComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  allFavorites: Favorite [] = [];
  allCreated: Created [] =  [];
  updatingBuild:boolean = false;
  currentBuild:Build = {} as Build;
  showBuild: boolean = false;
  @Output() updateBuildEvent = new EventEmitter <Build>; 

  constructor(private socialAuthServiceConfig: SocialAuthService, private _databaseService: DatabaseService) { }
  ngOnInit() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
      this.getCreatedByID(this.user.id);
      this.getFavoriteByID(this.user.id);
    });
  }
  signOut(): void {
    this.socialAuthServiceConfig.signOut();
  }


  getFavoriteByID(id:string)
  {
    this._databaseService.getFavoriteById(id).subscribe((Response:Favorite[])=>{this.allFavorites = Response})
  }
  getCreatedByID(id:string)
  {
    this._databaseService.getCreatedById(id).subscribe((Response:Created[])=>{this.allCreated = Response})
  }

  deleteBuild(buildId:number, createdId:number) {
    this._databaseService.deleteCreated(createdId).subscribe((response:void) =>
       {
        this._databaseService.deleteBuild(buildId).subscribe((response:void) => {});
        this.getCreatedByID(this.user.id)
      });    
  }

  UpdateBuild(updateBuild:Build) {
    this.updatingBuild = true;
    this.currentBuild = updateBuild;
  }

  deleteFavorite(favoriteId:number) {
    this._databaseService.deleteFavorite(favoriteId).subscribe((response) => {this.getFavoriteByID(this.user.id)});
  }

  changeDisplay(num: number) {
    this.showBuild = !this.showBuild;
    if(num == 1) {
      this.showBuild = true;
    } else {
      this.showBuild = false;
    }
  }

  checkifNull(item:string) {
    if (item != undefined) {return true}
    else {return false};
  }
}
