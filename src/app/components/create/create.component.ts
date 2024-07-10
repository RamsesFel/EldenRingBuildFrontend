import { Component } from '@angular/core';
import { WeaponsComponent } from '../equipment/weapons/weapons.component';
import { ArmorComponent } from '../equipment/armor/armor.component';
import { AshesOfWarComponent } from '../equipment/ashes-of-war/ashes-of-war.component';
import { ClassesComponent } from '../equipment/classes/classes.component';
import { TalismansComponent } from '../equipment/talismans/talismans.component';
import { Build } from '../../models/build';
import { DatabaseService } from '../../services/database.service';
import { SpellsComponent } from '../equipment/spells/spells.component';
import { FormsModule } from '@angular/forms';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import {RouterLink} from '@angular/router';
import { Created } from '../../models/created';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    WeaponsComponent,
    ArmorComponent,
    AshesOfWarComponent,
    ClassesComponent,
    TalismansComponent,
    SpellsComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(
    private _databaseService: DatabaseService,
    private socialAuthServiceConfig: SocialAuthService
  ) {}

  toggleList: number = 0;
  currentBuild: Build = {} as Build;
  buildWeapons: string[] = [];
  buildArmor: string[] = [];
  buildAOF: string = '';
  buildTalisman: string[] = [];
  buildSpells: string[] = [];
  buildClass: string = '';
  buildName: string = '';

  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;

  ngOnInit() {
    //authState is a custom observable that will run again any time changes are noticed.
    this.socialAuthServiceConfig.authState.subscribe(
      (userResponse: SocialUser) => {
        this.user = userResponse;
        //if login fails, it will return null.
        this.loggedIn = userResponse != null;
      }
    );
  }

  showList(num: number) {
    this.toggleList = num;
  }

  addArmortoBuild(item: string[]) {
    console.log(item[0]);
    if (
      this.buildArmor.length < 8 &&
      !this.buildArmor.includes(item[0]) &&
      !this.buildArmor.includes(item[1])
    ) {
      this.buildArmor = this.buildArmor.concat([...item]);
    }
    console.log(this.buildArmor.indexOf('Chest') - 1);
    console.log(this.buildArmor);
  }
  GetAllBuilds() {}

  addtoBuild(item: string) {
    // console.log(this.currentBuild);
    //THANKS VICTORIA
    switch (this.toggleList) {
      case 1: {
        if (this.buildWeapons.length < 2) {
          this.buildWeapons.push(item);
        }
        console.log(this.buildWeapons);
        break;
      }
      case 3: {
        if (this.buildAOF == '') {
          this.buildAOF = item;
        }
        console.log(this.buildAOF);
        break;
      }
      case 4: {
        if (this.buildClass == '') {
          this.buildClass = item;
        }
        console.log(this.buildClass);
        break;
      }
      case 5: {
        if (this.buildSpells.length < 12 && !this.buildSpells.includes(item)) {
          this.buildSpells.push(item);
        }
        console.log(this.buildSpells);
        break;
      }
      case 6: {
        if (
          this.buildTalisman.length < 4 &&
          !this.buildTalisman.includes(item)
        ) {
          this.buildTalisman.push(item);
        }
        console.log(this.buildTalisman);
        break;
      }
    }
  }

  createBuild() {
    this.currentBuild.userId = this.user.id;
    this.currentBuild.buildName = this.buildName;
    this.currentBuild.weapon1 = this.buildWeapons[0];
    this.currentBuild.weapon2 = this.buildWeapons[1];
    this.currentBuild.armorHead =
      this.buildArmor[this.buildArmor.indexOf('Helm') - 1];
    this.currentBuild.armorBody =
      this.buildArmor[this.buildArmor.indexOf('Chest Armor') - 1];
    this.currentBuild.armorHands =
      this.buildArmor[this.buildArmor.indexOf('Gauntlets') - 1];
    this.currentBuild.armorLegs =
      this.buildArmor[this.buildArmor.indexOf('Leg Armor') - 1];
    this.currentBuild.ashOfWar = this.buildAOF;
    this.currentBuild.talisman1 = this.buildTalisman[0];
    this.currentBuild.talisman2 = this.buildTalisman[1];
    this.currentBuild.talisman3 = this.buildTalisman[2];
    this.currentBuild.talisman4 = this.buildTalisman[3];
    this.currentBuild.spell1 = this.buildSpells[0];
    this.currentBuild.spell2 = this.buildSpells[1];
    this.currentBuild.spell3 = this.buildSpells[2];
    this.currentBuild.spell4 = this.buildSpells[3];
    this.currentBuild.spell5 = this.buildSpells[4];
    this.currentBuild.spell6 = this.buildSpells[5];
    this.currentBuild.spell7 = this.buildSpells[6];
    this.currentBuild.spell8 = this.buildSpells[7];
    this.currentBuild.spell9 = this.buildSpells[8];
    this.currentBuild.spell10 = this.buildSpells[9];
    this.currentBuild.spell11 = this.buildSpells[10];
    this.currentBuild.spell12 = this.buildSpells[11];
    this.currentBuild.class = this.buildClass;
    console.log(this.currentBuild);

    this._databaseService.addBuild(this.currentBuild).subscribe((Response: Build) =>{ 
      let createdBuild: Created = {} as Created;
      createdBuild.userId = this.user.id;
      createdBuild.buildId = Response.id;
        this._databaseService.addCreated(createdBuild).subscribe((Response: Created) => {})
      });
  }
}
