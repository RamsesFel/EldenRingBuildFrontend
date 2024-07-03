import { Component } from '@angular/core';
import { EldenRingService } from '../../services/elden-ring.service';
import { Weapons } from '../../models/weapons';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent {
  constructor(private eldenringService:EldenRingService){};

  currentWeapon:Weapons = {} as Weapons;

  ngOnInit(){
    this.getWeaponById();
  }

  getWeaponById(){
    this.eldenringService.getWeapon().subscribe((response:Weapons) => {
      this.currentWeapon = response;
      console.log(response);
    })
  }

}
