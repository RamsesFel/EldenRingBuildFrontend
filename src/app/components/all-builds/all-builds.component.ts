import { Component } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Build } from '../../models/build';
import { Favorite } from '../../models/favorite';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-builds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-builds.component.html',
  styleUrl: './all-builds.component.css'
})
export class AllBuildsComponent {
  constructor(private _databaseService: DatabaseService, private socialAuthServiceConfig:SocialAuthService) {}

  allBuilds: Build[] = [];
  favoritedBuilds: Build[] = [];
  user: SocialUser = {} as SocialUser;
  loggedIn:boolean = false;
  isTrue:boolean = false;

  ngOnInit() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe(
      (userResponse: SocialUser) => {
        this.user = userResponse;
        //if login fails, it will return null.
        this.loggedIn = userResponse != null;
      }
    );
    this.getAllBuilds();
  }

  getAllBuilds() {
    this._databaseService.getAllBuilds().subscribe((response: Build[]) => {
      this.allBuilds = response;
    });
  }

  addToFavorites(buildId:number) {
    let favoriteBuild: Favorite = {} as Favorite;
    favoriteBuild.buildId = buildId;
    favoriteBuild.userId = this.user.id;
    this._databaseService.addFavorite(favoriteBuild).subscribe((response) => {})
  }

  checkifNull(item:string) {
    if (item != undefined) {return true}
    else {return false};
  }
}
