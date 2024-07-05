import {GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { WeaponsComponent } from '../equipment/weapons/weapons.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [GoogleSigninButtonModule, WeaponsComponent, RouterLink, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  constructor(private socialAuthServiceConfig: SocialAuthService) { }
  
  ngOnInit() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
    });
  }
  signOut(): void {
    this.socialAuthServiceConfig.signOut();
  }

}
