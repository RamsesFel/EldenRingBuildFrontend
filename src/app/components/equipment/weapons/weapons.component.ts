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

  weaponList:WeaponsModel[] = [];
  singleWeapon:WeaponsModel[] = [];
  formWeapon:string = "";
  allWeaponTypes:string[] = ["All"];
  weaponCategory:string = "All";
  @Output() addWeaponEvent = new EventEmitter<string>();

  ngOnInit(){
    this.getWeaponList();
  }

  getWeaponByName(){
      this.singleWeapon = [];
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
          this.weaponList.push(response);
          if(i == 3){
          this.getShieldList();
          }
        })
      }
  }

  getShieldList(){
      this.eldenringService.getShieldsList().subscribe((response:WeaponsModel)=>{
      this.weaponList.push(response);
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
    console.log(this.weaponList)
    for (let i = 0; i < this.weaponList.length; i++) {
      let allWeaponTypes = [...new Set(this.weaponList[i].data.map((x)=>x.category))];
      this.allWeaponTypes.push(...allWeaponTypes);
    }
    console.log(this.allWeaponTypes)
    this.allWeaponTypes = [...new Set(this.allWeaponTypes)];
    this.allWeaponTypes.pop();
  }

  resetAll(){
    this.singleWeapon = [];
    this.weaponList = [];
    this.allWeaponTypes = ["All"];
  }

  getRandomWeapon(){
    while(true){
      let randomItemnum = (Math.round(Math.random() * (50 - 0 )+ 0));
      let randomListnum = (Math.round(Math.random() * (4 - 0 )+ 0));
      let randomItem = this.weaponList[randomListnum].data[randomItemnum];
      console.log(randomItem.category);
    try {

    }
    catch {

    }
    if(randomItem.category == this.weaponCategory || this.weaponCategory == "All" && randomItem.category != undefined){
      this.formWeapon = randomItem.name;
      break;
    }
    }
    this.singleWeapon = [];
    this.searchType();
  }
}
