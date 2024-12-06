import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../service/tareas.service';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../../header/header.component';
import { Router } from '@angular/router';
import { Nota } from '../../interfaces/nota';
import { HeaderService } from '../../service/header';

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
  header = inject(HeaderService);

  notas: Nota = {
    id: 0,
    assigner_id: null,
    assignee_id: null,
    project_id: 0,
    section_id: null,
    parent_id: null,
    order: 0,
    content: '',
    description: '',
    is_completed: false,
    labels: [],
    priority: 0,
    comment_count: 0,
    creator_id: 0,
    created_at: '',
    due: {
      date: '',
      string: '',
      lang: '',
      is_recurring: false,
    },
    url: '',
    duration: null,
    deadline: null,
    isMarked: false,
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
  this.header.getNotas();
  localStorage.setItem('id', this.notas.id.toString());
  this.router.navigate(['/nota-existente']);

})
}

  }








