import { Component, EventEmitter, Output } from '@angular/core';
import { EldenRingService } from '../../../services/elden-ring.service';
import { Datum, WeaponsModel } from '../../../models/weapons';
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

  currentWeapon:WeaponsModel[] = [];
  formWeapon:string = "";
  allWeaponTypes:string[] = [];
  weaponCategory:string = "All";
  @Output() addWeaponEvent = new EventEmitter<string>();

  ngOnInit(){
    this.getWeaponList();
  }

  getWeaponByName(){
    this.currentWeapon = [];
    this.eldenringService.getWeaponByName(this.formWeapon).subscribe((response:WeaponsModel) => {
      this.currentWeapon.push(response);
      console.log(response);
    })
    this.eldenringService.getShieldByName(this.formWeapon).subscribe((response:WeaponsModel)=>{
      this.currentWeapon.push(response);
    })
  }

  getWeaponList(){
    this.currentWeapon = [];
    let count = 0;
      for (count = 0; count < 4; count++) {
        this.eldenringService.getWeaponList(count).subscribe((response:WeaponsModel)=>{
          this.currentWeapon.push(response);
        })
      }
      if(count == 4){
        this.getShieldList();
      }
  }

  getShieldList(){
      this.eldenringService.getShieldsList().subscribe((response:WeaponsModel)=>{
      this.currentWeapon.push(response);
      this.getWeaponTypes();
      })
  }

  addWeapon(id:string){
    this.addWeaponEvent.emit(id);
  }

  getWeaponTypes(){
    console.log(this.currentWeapon)
    for (let i = 0; i < this.currentWeapon.length; i++) {
      this.allWeaponTypes = [...new Set(this.currentWeapon[i].data.map(weapon => weapon.category))]
    }
    console.log(this.allWeaponTypes)
  }
}
