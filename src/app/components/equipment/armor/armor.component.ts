import { Component, EventEmitter, Output } from '@angular/core';
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
  armorList:ArmorModel[] = [];
  formArmor:string = "";
  armorCategory:string = "All";

  @Output() addArmorEvent = new EventEmitter<string[]>();

  addArmor(id:string, category:string){
    this.addArmorEvent.emit([id,category]);
  }

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
    for(let i = 0; i < 6; i++){
      this.eldenringService.getArmorList(i).subscribe((response:ArmorModel)=>{
        this.armorList.push(response);
        console.log(this.armorList);
      })
    }
  }

  getRandomArmor(){
    while(true){
    let randomItemnum = (Math.round(Math.random() * (100 - 0 )+ 0));
    let randomListnum = (Math.round(Math.random() * (5 - 0 )+ 0));
    let randomItem = this.armorList[randomListnum].data[randomItemnum]
    if(randomItem.category == this.armorCategory || this.armorCategory == "All"){
      this.formArmor = randomItem.name.slice(0, randomItem.name.indexOf("("));
      break;
    }}
    this.getArmorByName();
  }

}
