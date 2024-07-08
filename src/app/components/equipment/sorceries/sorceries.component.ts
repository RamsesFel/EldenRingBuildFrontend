import { Component } from '@angular/core';
import { EldenRingService } from '../../../services/elden-ring.service';
import { FormsModule } from '@angular/forms';
import { SorceriesModel } from '../../../models/sorceries';

@Component({
  selector: 'app-sorceries',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sorceries.component.html',
  styleUrl: './sorceries.component.css'
})
export class SorceriesComponent {
  constructor(private eldenringService:EldenRingService){};

  currentSorcery:SorceriesModel = {} as SorceriesModel;
  formSorcery:string = "";

  ngOnInit(){
    this.getSorceriesList();
  }

  getSorceryByName(){
    this.eldenringService.getSorceryByName(this.formSorcery).subscribe((response:SorceriesModel) => {
      this.currentSorcery = response;
      console.log(response);
    })
  }

  getSorceriesList(){
    this.eldenringService.getSorceriesList().subscribe((response:SorceriesModel)=>{
      this.currentSorcery = response;
      console.log(response);
    })
  }
}
