import { Component } from '@angular/core';
import { WeaponsComponent } from '../equipment/weapons/weapons.component';
import { ArmorComponent } from '../equipment/armor/armor.component';
import { AshesOfWarComponent } from '../equipment/ashes-of-war/ashes-of-war.component';
import { ClassesComponent } from '../equipment/classes/classes.component';
import { IncantationsComponent } from '../equipment/incantations/incantations.component';
import { ShieldsComponent } from '../equipment/shields/shields.component';
import { SorceriesComponent } from '../equipment/sorceries/sorceries.component';
import { TalismansComponent } from '../equipment/talismans/talismans.component';
import { Build } from '../../models/build';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [WeaponsComponent,ArmorComponent,AshesOfWarComponent,ClassesComponent,IncantationsComponent,ShieldsComponent,SorceriesComponent,TalismansComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  toggleList:number = 0;
  currentBuild:Build = {} as Build;

  showList(num:number){
    this.toggleList = num;
  }

  addtoBuild(item:string){
    this.currentBuild.weapon1 = item;
    console.log(this.currentBuild);
  }

}
