import { Component } from '@angular/core';
import { EldenRingService } from '../../services/elden-ring.service';
import { Build } from '../../models/build';
import { WeaponsModel } from '../../models/weapons';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {
  constructor(private eldenringService:EldenRingService){};
  allWeapons:WeaponsModel = {} as WeaponsModel;

  newBuild:Build = {} as Build;
  
  ngOnInit(){
    this.getWeaponsList(1);
  }

  getWeaponsList(pagenum:number){
    this.eldenringService.getWeaponList(1).subscribe((response:WeaponsModel)=>{
      console.log(response);
      this.allWeapons = response;
    })
  }

}
