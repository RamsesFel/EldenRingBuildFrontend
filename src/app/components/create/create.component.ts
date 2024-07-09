import { Component } from '@angular/core';
import { WeaponsComponent } from '../equipment/weapons/weapons.component';
import { ArmorComponent } from '../equipment/armor/armor.component';
import { AshesOfWarComponent } from '../equipment/ashes-of-war/ashes-of-war.component';
import { ClassesComponent } from '../equipment/classes/classes.component';
import { IncantationsComponent } from '../equipment/incantations/incantations.component';
import { SorceriesComponent } from '../equipment/sorceries/sorceries.component';
import { TalismansComponent } from '../equipment/talismans/talismans.component';
import { Build } from '../../models/build';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [WeaponsComponent,ArmorComponent,AshesOfWarComponent,ClassesComponent,IncantationsComponent,SorceriesComponent,TalismansComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  toggleList:number = 0;
  currentBuild:Build = {} as Build;  
  buildWeapons: string [] = []; 
  buildArmor: string [] = []; 
  buildAOF: string  = ""; 
  buildTalisman: string [] = [];
  buildSpells: string [] = [];
  buildClass: string = "";

  showList(num:number){
    this.toggleList = num;
  }

  addtoBuild(item:string){
    this.currentBuild.weapon1 = item;
    
    // console.log(this.currentBuild);
//THANKS VICTORIA
    switch(this.toggleList)
    {
      case (1):
      {
      if (this.buildWeapons.length < 2)
      {
       this.buildWeapons.push(item)
      }
      break
      }

      
      case (2):
      {
        if (this.buildArmor.length < 4 && !this.buildArmor.includes(item))
          {
           this.buildArmor.push(item)
           
          }
          console.log(this.buildArmor)
          break
      }
      case (3):
      {
        if(this.buildAOF != "")
        {
          this.buildAOF = item
        }
        break
        
      }
      case (4):
      {
        if(this.buildClass != "")
          {
            this.buildClass = item
          }
          break
      }
      case (5):
      {
        if(this.buildSpells.length < 12  && !this.buildSpells.includes(item))
          {
            this.buildSpells.push(item)
          } 
          break
      }

      case (6):
      {
        if(this.buildSpells.length < 12  && !this.buildSpells.includes(item))
          {
            this.buildSpells.push(item)
          }
          break
      }
      case (7):
      {
        if(this.buildTalisman.length < 4  && !this.buildTalisman.includes(item))
          {
            this.buildTalisman.push(item)
          }
          console.log(this.buildTalisman)
        break
      }

    }
    
  }

}
