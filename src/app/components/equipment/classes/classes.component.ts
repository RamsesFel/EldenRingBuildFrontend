import { Component } from '@angular/core';
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
  formClass:string = "";

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
      console.log(response);
    })
  }
}
