import { Component } from '@angular/core';
import { EldenRingService } from '../../../services/elden-ring.service';
import { AshesOfWarModel } from '../../../models/ashes-of-war';
import { FormsModule } from '@angular/forms';

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
