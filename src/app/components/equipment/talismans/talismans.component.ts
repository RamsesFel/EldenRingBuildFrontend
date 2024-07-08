import { Component } from '@angular/core';
import { EldenRingService } from '../../../services/elden-ring.service';
import { TalismansModel } from '../../../models/talismans';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-talismans',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './talismans.component.html',
  styleUrl: './talismans.component.css'
})
export class TalismansComponent {
  constructor(private eldenringService:EldenRingService){};

  currentTalisman:TalismansModel = {} as TalismansModel;
  formTalisman:string = "";

  ngOnInit(){
    this.getTalismanList();
  }

  getTalismanByName(){
    this.eldenringService.getTalismanByName(this.formTalisman).subscribe((response:TalismansModel) => {
      this.currentTalisman = response;
      console.log(response);
    })
  }

  getTalismanList(){
    this.eldenringService.getTalismansList().subscribe((response:TalismansModel)=>{
      this.currentTalisman = response;
      console.log(response);
    })
  }
}
