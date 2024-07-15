import { Component, createComponent } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WeaponsComponent } from './components/equipment/weapons/weapons.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateComponent } from './components/create/create.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeaponsComponent, ProfileComponent, RouterLink, CreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';


}
