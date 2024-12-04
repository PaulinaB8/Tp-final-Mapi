import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { TareasService } from '../../service/tareas.service';
import Swal from 'sweetalert2';
=======
import { NotasService } from '../../service/notas.service';
import { HeaderComponent } from '../../header/header.component';
>>>>>>> ed7127af787fea1f6dbb6b867c1b8dd496c5ee82

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
