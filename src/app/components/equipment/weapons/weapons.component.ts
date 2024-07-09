import { Component, EventEmitter, Output } from '@angular/core';
import { EldenRingService } from '../../../services/elden-ring.service';
import { WeaponsModel } from '../../../models/weapons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.css'
})
export class WeaponsComponent {
  constructor(private eldenringService:EldenRingService){};

  currentWeapons:WeaponsModel[] = [];
  weaponList:WeaponsModel[] = [];
  formWeapon:string = "";
  @Output() addWeaponEvent = new EventEmitter<string>();

  ngOnInit(){
    this.getWeaponList();
    console.log(this.currentWeapons)
    console.log(this.weaponList)
  }

  getWeaponByName(){
    this.eldenringService.getWeaponByName(this.formWeapon).subscribe((response:WeaponsModel) => {
      this.currentWeapons.push(response);
      console.log(response);
    })
    this.eldenringService.getShieldByName(this.formWeapon).subscribe((response:WeaponsModel)=>{
      this.currentWeapons.push(response);
    })
  }

  getWeaponList(){
    for (let i = 0; i < 4; i++) {
      this.eldenringService.getWeaponList(i).subscribe((response:WeaponsModel)=>{
        this.weaponList.push(response);
      })
    }
    this.eldenringService.getShieldsList().subscribe((response:WeaponsModel)=>{
      this.weaponList.push(response);
    })
  }

  addWeapon(id:string){
    this.addWeaponEvent.emit(id);
  }
}
