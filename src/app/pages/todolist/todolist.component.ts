import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../service/tareas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {

  tareas = inject(TareasService);
  cantInputs: string[] = [];

  tarea: any = {
           content : '',
           description : '',
           
  };

  agregarInputs(){
    this.cantInputs.push ("");
  }


  agregarTarea(tarea: string){
    this.tarea.description = this.tarea.descripcion + tarea + ",";
  }

  getTareas(){

  }

  guardarTarea(){
    this.tareas.crearNota(this.tarea).then(r => {
      console.log(r);
      this.tarea = { content: '', description: '' };
      Swal.fire({
        title: '¡Tarea enviada!',
        text: 'Tu tarea se ha enviado exitosamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
  })
})
}
}