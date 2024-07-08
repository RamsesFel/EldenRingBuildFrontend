import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EldenRingService } from '../../../services/elden-ring.service';
import { ArmorModel } from '../../../models/armors';

@Component({
  selector: 'app-armor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './armor.component.html',
  styleUrl: './armor.component.css'
})
export class ArmorComponent {
  constructor(private eldenringService:EldenRingService){};

  currentArmor:ArmorModel = {} as ArmorModel;
  formArmor:string = "";
  pageCount: number = 0;

  ngOnInit(){
    this.getArmorList();
  }

  getArmorByName(){
    this.eldenringService.getArmorByName(this.formArmor).subscribe((response:ArmorModel) => {
      this.currentArmor = response;
      console.log(response);
    })
  }

  getArmorList(){
    this.eldenringService.getArmorList(this.pageCount).subscribe((response:ArmorModel)=>{
      this.currentArmor = response;
      console.log(response);
    })
  }
  changePage(num:number){
    this.pageCount += num;
    this.getArmorList();
    window.scroll(0,0);
  }
}
