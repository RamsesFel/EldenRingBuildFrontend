import { Component, EventEmitter, Output } from '@angular/core';
import { EldenRingService } from '../../../services/elden-ring.service';
import { AshesOfWarModel } from '../../../models/ashes-of-war';
import { FormsModule } from '@angular/forms';
import { Build } from '../../../models/build';

@Component({
  selector: 'app-ashes-of-war',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ashes-of-war.component.html',
  styleUrl: './ashes-of-war.component.css'
})
export class AshesOfWarComponent {
  constructor(private eldenringService:EldenRingService){};

  currentAshOfWar:AshesOfWarModel = {} as AshesOfWarModel;
  formAshOfWar:string = "";

  @Output() addAshOfWarEvent = new EventEmitter<string>();

  addAshOfWar(id:string){
    this.addAshOfWarEvent.emit(id);
  }

  ngOnInit(){
    this.getAshesOfWarList();
  }

  getAshOfWarByName(){
    this.eldenringService.getAshOfWarByName(this.formAshOfWar).subscribe((response:AshesOfWarModel) => {
      this.currentAshOfWar = response;
      console.log(response);
    })
  }

  getAshesOfWarList(){
    this.eldenringService.getAshesOfWarList().subscribe((response:AshesOfWarModel)=>{
      this.currentAshOfWar = response;
      console.log(response);
    })
  }
}
