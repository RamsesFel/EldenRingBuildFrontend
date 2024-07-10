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
  singleWeapon:WeaponsModel[] = [];
  formWeapon:string = "";
  allWeaponTypes:string[] = ["All"];
  weaponCategory:string = "All";
  @Output() addWeaponEvent = new EventEmitter<string>();

  ngOnInit(){
    this.getWeaponList();
  }

  getWeaponByName(){
      this.eldenringService.getWeaponByName(this.formWeapon).subscribe((response:WeaponsModel) => {
      this.singleWeapon.push(response);
      this.eldenringService.getShieldByName(this.formWeapon).subscribe((response:WeaponsModel)=>{
      this.singleWeapon.push(response);
      console.log(this.singleWeapon);
    })
  }) 
  }

  getWeaponList(){
    this.resetAll();
      for (let i = 0; i < 4; i++) {
        this.eldenringService.getWeaponList(i).subscribe((response:WeaponsModel)=>{
          this.currentWeapon.push(response);
          if(i == 3){
          this.getShieldList();
          }
        })
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

  searchType(){
    if(this.formWeapon == ""){
      this.getWeaponList();
    }else{
      this.getWeaponByName();
    }
  }

  getWeaponTypes(){
    console.log(this.currentWeapon)
    for (let i = 0; i < this.currentWeapon.length; i++) {
      let allWeaponTypes = [...new Set(this.currentWeapon[i].data.map((x)=>x.category))];
      this.allWeaponTypes.push(...allWeaponTypes);
  }
  console.log(this.allWeaponTypes)
  this.allWeaponTypes = [...new Set(this.allWeaponTypes)];
}

resetAll(){
  this.singleWeapon = [];
  this.currentWeapon = [];
  this.allWeaponTypes = ["All"];
}
}
