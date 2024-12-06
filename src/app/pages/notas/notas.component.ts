import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../service/tareas.service';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.scss'
})
export class NotasComponent {

  tareas = inject(TareasService);
  router = inject(Router);

  notas: any = {
           content : '',
           description : '',
  };

  guardarNota(){
    this.tareas.crearNota(this.notas).then(r => {
      console.log(r);
      Swal.fire({
        title: '¡Nota guardada!',
        text: 'Tu nota se ha guardado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
  }) 
  localStorage.setItem('id', this.notas.id);
  this.router.navigate(['/nota-existente']);

})
}

  }








