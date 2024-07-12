import { Component, EventEmitter, Output } from '@angular/core';
import { EldenRingService } from '../../../services/elden-ring.service';
import { TalismansModel } from '../../../models/talismans';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-talismans',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './talismans.component.html',
  styleUrl: './talismans.component.css',
})
export class TalismansComponent {
  constructor(private eldenringService: EldenRingService) {}

  currentTalisman: TalismansModel = {} as TalismansModel;
  formTalisman: string = '';
  isRandom: boolean = false;

  @Output() addTalismanEvent = new EventEmitter<string>();

  addTailisman(id: string) {
    this.addTalismanEvent.emit(id);
  }

  ngOnInit() {
    this.getTalismanList();
  }

  getTalismanByName() {
    this.eldenringService
      .getTalismanByName(this.formTalisman)
      .subscribe((response: TalismansModel) => {
        this.currentTalisman = response;
        this.isRandom = false;
        console.log(response);
      });
  }

  getTalismanList() {
    this.eldenringService
      .getTalismansList()
      .subscribe((response: TalismansModel) => {
        this.currentTalisman = response;
        if (this.isRandom) {
          this.formTalisman =
            this.currentTalisman.data[
              Math.round(
                Math.random() * (this.currentTalisman.data.length - 1 - 0) + 0
              )
            ].name;
          this.getTalismanByName();
        }

        console.log(response);
      });
  }

  getRandomTalisman() {
    this.isRandom = true;
    this.getTalismanList();
  }
}
