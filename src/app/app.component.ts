import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeaponsComponent, ProfileComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';


}
