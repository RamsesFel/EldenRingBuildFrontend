import { Component } from '@angular/core';
import { EquipmentComponent } from '../equipment/equipment.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [EquipmentComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

}
