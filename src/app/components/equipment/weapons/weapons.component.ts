import { Component } from '@angular/core';
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

  currentWeapons:WeaponsModel = {} as WeaponsModel;
  formWeapon:string = "";
  pageCount:number = 0;

  ngOnInit(){
    this.getWeaponList();
  }

  getWeaponByName(){
    this.eldenringService.getWeaponByName(this.formWeapon).subscribe((response:WeaponsModel) => {
      this.currentWeapons = response;
      console.log(response);
    })
  }

  getWeaponList(){
    this.eldenringService.getWeaponList(this.pageCount).subscribe((response:WeaponsModel)=>{
      this.currentWeapons = response;
      console.log(response);
    })
  }

  changePage(num:number){
    this.pageCount += num;
    this.getWeaponList();
    window.scroll(0,0);
  }
}
