import { ArmorModel } from "./armors";
import { AshesOfWarModel } from "./ashes-of-war";
import { ClassesModel } from "./classes";
import { IncantationsModel } from "./incantations";
import { ShieldsModel } from "./shields";
import { SorceriesModel } from "./sorceries";
import { TalismansModel } from "./talismans";
import { WeaponsModel } from "./weapons";

export interface Build {
    weapons:WeaponsModel[],
    armor:ArmorModel[],
    tailismans:TalismansModel[],
    ashOfWar:AshesOfWarModel,
    shield:ShieldsModel,
    sorceries:SorceriesModel[],
    incantations:IncantationsModel[],
    class:ClassesModel
}
