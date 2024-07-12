import { Component, EventEmitter, Output } from '@angular/core';
import { EldenRingService } from '../../../services/elden-ring.service';
import { FormsModule } from '@angular/forms';
import { SpellsModel } from '../../../models/spells';

@Component({
  selector: 'app-spells',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css',
})
export class SpellsComponent {
  constructor(private eldenringService: EldenRingService) {}

  spellList: SpellsModel[] = [];
  formSpell: string = '';
  spellCategory: string = 'All';
  isRandom: boolean = false;
  singleSpell: SpellsModel [] = [];

  @Output() addSpellEvent = new EventEmitter<string>();

  addSpell(id: string) {
    this.addSpellEvent.emit(id);
  }

  ngOnInit() {
    this.getSpellsList();
  }

  getSpellByName() {
    this.singleSpell = [];
    this.isRandom = false;
    if(this.spellCategory == "Sorcery" || this.spellCategory == "Sorceries") {
      this.eldenringService.getSorceryByName(this.formSpell).subscribe((response: SpellsModel) => {
          this.singleSpell.push(response);
        });
    } else if(this.spellCategory == "Incantation" || this.spellCategory == "Incantations") {
      this.eldenringService.getIncantationByName(this.formSpell).subscribe((response: SpellsModel) => {
          this.singleSpell.push(response);
          console.log(response);
        });
    } else {
      this.eldenringService.getSorceryByName(this.formSpell).subscribe((response: SpellsModel) => {
        this.singleSpell.push(response);
      });
      this.eldenringService.getIncantationByName(this.formSpell).subscribe((response: SpellsModel) => {
        this.singleSpell.push(response);
        console.log(response);
      });
    }
  }

  getSpellsList() {
    this.eldenringService.getIncantationsList().subscribe((response: SpellsModel) => {
        this.spellList.push(response);
        console.log(response);
        this.eldenringService.getSorceriesList().subscribe((response: SpellsModel) => {
            this.spellList.push(response);
            console.log(response);
          });
      });
  }
  
  getRandomSpell(){
    this.isRandom = true;
    console.log(this.spellList);
    while(true){
      let randomListnum = (Math.round(Math.random() * (this.spellList.length - 1  - 0 )+ 0));
      console.log(randomListnum);
      let randomItemnum = (Math.round(Math.random() * (this.spellList[randomListnum].data.length -1 - 0 )+ 0));
      let randomItem = this.spellList[randomListnum].data[randomItemnum];
      console.log(randomItem.type)
      if(randomItem.type.includes(this.spellCategory) || this.spellCategory == "All" && randomItem.type != undefined){
        this.formSpell = randomItem.name;
        break;
      }
      console.log(this.spellList);
    }
    this.getSpellByName();
  }
}
