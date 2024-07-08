import { Component, EventEmitter, Output } from '@angular/core';
import { EldenRingService } from '../../../services/elden-ring.service';
import { ShieldsModel } from '../../../models/shields';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shields',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shields.component.html',
  styleUrl: './shields.component.css'
})
export class ShieldsComponent {
  constructor(private eldenringService:EldenRingService){};

  currentShield:ShieldsModel = {} as ShieldsModel;
  formShield:string = "";

  @Output() addShieldEvent = new EventEmitter<string>();

  addShield(id:string){
    this.addShieldEvent.emit(id);
  }

  ngOnInit(){
    this.getShieldsList();
  }

  getShieldByName(){
    this.eldenringService.getShieldByName(this.formShield).subscribe((response:ShieldsModel) => {
      this.currentShield = response;
      console.log(response);
    })
  }

  getShieldsList(){
    this.eldenringService.getShieldsList().subscribe((response:ShieldsModel)=>{
      this.currentShield = response;
      console.log(response);
    })
  }
}
