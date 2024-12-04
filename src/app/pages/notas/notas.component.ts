import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../service/tareas.service';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.scss'
})
export class NotasComponent {

  tareas = inject(TareasService);

  notas: any = {
           content : '',
           description : '',
           creator_id: 1,
  };

  nueva = true;


  getNotas(){

  }

  guardarNota(){
    this.tareas.crearNota(this.notas).then(r => {
      console.log(r);
      Swal.fire({
        title: '¡Nota enviada!',
        text: 'Tu nota se ha guardado',
        icon: 'success',
        confirmButtonText: 'Aceptar'
  })
})
}







}
