import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeaponsComponent } from './components/weapons/weapons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeaponsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';


}
