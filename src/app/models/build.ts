import { ArmorModel } from './armors';
import { AshesOfWarModel } from './ashes-of-war';
import { ClassesModel } from './classes';
import { IncantationsModel } from './incantations';
import { ShieldsModel } from './shields';
import { SorceriesModel } from './sorceries';
import { TalismansModel } from './talismans';
import { WeaponsModel } from './weapons';

export interface Build {
  buildName: string;
  weapon1: string;
  weapon2: string;
  armorHead: string;
  armorBody: string;
  armorHands: string;
  armorLegs: string;
  ashOfWar: string;
  shield: string;
  talisman1: string;
  talisman2: string;
  talisman3: string;
  talisman4: string;
  spell1: string;
  spell2: string;
  spell3: string;
  spell4: string;
  spell5: string;
  spell6: string;
  spell7: string;
  spell8: string;
  spell9: string;
  spell10: string;
  spell11: string;
  spell12: string;
  class: string;
}
