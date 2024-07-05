import { Component } from '@angular/core';
import { EldenRingService } from '../../../services/elden-ring.service';
import { WeaponsModel } from '../../../models/weapons';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent {
  constructor(private eldenringService:EldenRingService){};

  currentWeapon:WeaponsModel = {} as WeaponsModel;

  ngOnInit(){
    this.getWeaponByName();
  }

  getWeaponByName(){
    this.eldenringService.getWeaponByName("Forked Hatchet").subscribe((response:WeaponsModel) => {
      this.currentWeapon = response;
      console.log(response);
    })
  }
}
