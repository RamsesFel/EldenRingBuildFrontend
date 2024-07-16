import { Component, createComponent } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WeaponsComponent } from './components/equipment/weapons/weapons.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateComponent } from './components/create/create.component';
import {GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { AllBuildsComponent } from './components/all-builds/all-builds.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WeaponsComponent,
    ProfileComponent,
    RouterLink,
    CreateComponent,
    GoogleSigninButtonModule,
    AllBuildsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FrontEnd';
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  constructor(private socialAuthServiceConfig: SocialAuthService) {}
  ngOnInit() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe(
      (userResponse: SocialUser) => {
        this.user = userResponse;
        //if login fails, it will return null.
        this.loggedIn = userResponse != null;
      }
    );
  }
  signOut(): void {
    this.socialAuthServiceConfig.signOut();
  }
}
