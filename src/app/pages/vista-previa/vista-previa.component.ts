import { Component } from '@angular/core';
import { Nota } from '../../interfaces/nota';

@Component({
  selector: 'app-vista-previa',
  standalone: true,
  imports: [],
  templateUrl: './vista-previa.component.html',
  styleUrl: './vista-previa.component.scss'
})
export class VistaPreviaComponent {

  

  notes : Nota[] = []


}
