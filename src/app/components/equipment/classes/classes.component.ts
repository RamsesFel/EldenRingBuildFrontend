import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EldenRingService } from '../../../services/elden-ring.service';
import { ClassesModel } from '../../../models/classes';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  constructor(private eldenringService:EldenRingService){};

  currentClass:ClassesModel = {} as ClassesModel;
  isRandom:boolean = false;
  formClass:string = "";
  
  @Output() addClassEvent = new EventEmitter<string>();

  addClass(id:string){
    this.addClassEvent.emit(id);
  }


  ngOnInit(){
    this.getClassesList();
  }

  getClassByName(){
    this.eldenringService.getClassByName(this.formClass).subscribe((response:ClassesModel) => {
      this.currentClass = response;
      console.log(response);
    })
  }

  getClassesList(){
    this.eldenringService.getClassesList().subscribe((response:ClassesModel)=>{
      this.currentClass = response;
      this.currentClass.data = this.currentClass.data.filter(x=>x.name);
      if(this.isRandom){
        this.formClass = this.currentClass.data[Math.round(Math.random() * (this.currentClass.data.length - 1  - 0 )+ 0)].name;
        this.getClassByName();
      }
      console.log(response);
    })
  }

  getRandomClass(){
    this.isRandom = true;
    this.getClassesList();
  }
}
