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

  currentSpell: SpellsModel[] = [];
  formSpell: string = '';
  spellCategory: string = 'All';
  isRandom: boolean = false;

  @Output() addSpellEvent = new EventEmitter<string>();

  addSpell(id: string) {
    this.addSpellEvent.emit(id);
  }

  ngOnInit() {
    this.getSpellsList();
  }

  getSpellByName() {
    this.currentSpell = [];
    this.isRandom = false;
    this.eldenringService
      .getSorceryByName(this.formSpell)
      .subscribe((response: SpellsModel) => {
        this.currentSpell.push(response);
      });
    this.eldenringService
      .getIncantationByName(this.formSpell)
      .subscribe((response: SpellsModel) => {
        this.currentSpell.push(response);
        console.log(response);
      });
  }

  getSpellsList() {
    this.currentSpell = [];
    this.eldenringService
      .getIncantationsList()
      .subscribe((response: SpellsModel) => {
        this.currentSpell.push(response);
        console.log(response);
        this.eldenringService
          .getSorceriesList()
          .subscribe((response: SpellsModel) => {
            this.currentSpell.push(response);
            console.log(response);
          });
      });
    }
      getRandomSpell(){
        this.isRandom = true;
        while(true){
          let randomListnum = (Math.round(Math.random() * (this.currentSpell.length - 1  - 0 )+ 0));
          let randomItemnum = (Math.round(Math.random() * (this.currentSpell[randomListnum].data.length -1 - 0 )+ 0));
          let randomItem = this.currentSpell[randomListnum].data[randomItemnum];
          console.log(randomItem.type)
        if(randomItem.type == this.spellCategory || this.spellCategory == "All" && randomItem.type != undefined){
          this.formSpell = randomItem.name;
          break;
        }
        }
        this.getSpellByName();

      }
}
