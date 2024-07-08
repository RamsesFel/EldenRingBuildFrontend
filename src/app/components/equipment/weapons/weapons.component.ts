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

  currentWeapons1:WeaponsModel = {} as WeaponsModel;
  currentWeapons2:WeaponsModel = {} as WeaponsModel;
  currentWeapons3:WeaponsModel = {} as WeaponsModel;
  formWeapon:string = "";
  pageCount:number = 0;
  @Output() addWeaponEvent = new EventEmitter<string>();


  ngOnInit(){
    this.getWeaponList();
  }

  getWeaponByName(){
    this.eldenringService.getWeaponByName(this.formWeapon).subscribe((response:WeaponsModel) => {
      this.currentWeapons1 = response;
      console.log(response);
    })
  }

  getWeaponList(){
    this.eldenringService.getWeaponList(1).subscribe((response:WeaponsModel)=>{
      this.currentWeapons1 = response;
    })
    this.eldenringService.getWeaponList(2).subscribe((response:WeaponsModel)=>{
      this.currentWeapons2 = response;
    })
    this.eldenringService.getWeaponList(3).subscribe((response:WeaponsModel)=>{
      this.currentWeapons3 = response;
    })
  }

  addWeapon(id:string){
    this.addWeaponEvent.emit(id);
  }

  changePage(num:number){
    this.pageCount += num;
    this.getWeaponList();
    window.scroll(0,0);
  }
}
