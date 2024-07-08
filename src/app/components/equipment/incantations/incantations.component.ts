import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EldenRingService } from '../../../services/elden-ring.service';
import { IncantationsModel } from '../../../models/incantations';

@Component({
  selector: 'app-incantations',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './incantations.component.html',
  styleUrl: './incantations.component.css'
})
export class IncantationsComponent {
  constructor(private eldenringService:EldenRingService){};

  currentIncantation:IncantationsModel = {} as IncantationsModel;
  formIncantation:string = "";

  @Output() addIncantationEvent = new EventEmitter<string>();

  addIncantation(id:string){
    this.addIncantationEvent.emit(id);
  }

  ngOnInit(){
    this.getIncantationsList();
  }

  getIncantationByName(){
    this.eldenringService.getIncantationByName(this.formIncantation).subscribe((response:IncantationsModel) => {
      this.currentIncantation = response;
      console.log(response);
    })
  }

  getIncantationsList(){
    this.eldenringService.getIncantationsList().subscribe((response:IncantationsModel)=>{
      this.currentIncantation = response;
      console.log(response);
    })
  }
}
