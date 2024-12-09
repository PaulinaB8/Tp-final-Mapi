import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { TareasService } from '../../service/tareas.service';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../../interfaces/nota';


@Component({
  selector: 'app-nota-existente',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './nota-existente.component.html',
  styleUrl: './nota-existente.component.scss'
})
export class NotaExistenteComponent implements OnInit{
  tareas = inject(TareasService);
  router = inject(Router);
  route = inject(ActivatedRoute)

  // id : number|undefined;
  @Input() id = 0;

  nota: Nota[]|undefined = [{
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
    labels: [''],
    priority: 0,
    comment_count: 0,
    creator_id: 0,
    created_at: '',
    due : {
      date: '',
      string: '',
      lang: '',
      is_recurring: false,
    } ,
    url: '',
    duration: null,
    deadline: null,
    isMarked: false}];

  ngOnInit(){
    if (this.id != undefined){
      this.verNota(this.id);
      console.log (this.id)
    }
      
  }
//   Obtiene el id de la nota que se está intentando mostrar desde localStorage.
// Este id se utiliza para cargar la nota específica en la vista.
// Solo si el ID existe, ejecuta la función verNota(id).
// this.verNota(id):Llama a la función para obtener los detalles de la nota con ese id de la base de datos.
  


  editarNota(){
    if(this.nota != undefined){
      this.tareas.editarNota(this.nota[0])
    Swal.fire({
      title: '¡Nota actualizada!',
      text: 'Los cambios realizados se han guardado con éxito',
      icon: 'success',
      confirmButtonText: 'Aceptar'
}) 
    }
    
  }
  // Propósito: Editar la nota actual en la base de datos utilizando la información contenida en el primer índice del array nota.
  // this.tareas.editarNota(this.nota[0]): Llama al servicio editarNota() definido en TareasService. Se envía la nota actual como parámetro.



borrarNota(){
  Swal.fire({
    title: "Quieres borrar la nota?",
    text: "Una vez borrada ya no podrás acceder a ella",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed && this.id != undefined) {
      this.tareas.borrarNota(this.id).then(() => {
        Swal.fire({
          title: "Tarea eliminada",
          text: "La tarea ha sido eliminada correctamente",
          icon: "success"
        });
      }).then(() => this.router.navigate(['/vista-previa']));
    }
  });
}
// Si el usuario confirma la eliminación:Llama a this.tareas.borrarNota(parseInt(this.id, 10)). 
// Se convierte el id de string a número.Luego, al completarse la operación, muestra otra alerta de confirmación con Swal.fire.
// Redirige a la vista previa (vista-previa):Después de confirmar el borrado, el usuario es redirigido a otra ruta mediante this.router.navigate()




  verNota(id: number){
    this.nota = [];
    this.tareas.getNotaById(id).then(r =>{
      if(this.nota != null) {
        this.nota.push(r) ;
      console.log(this.nota)
      }
    })
    }

  }
  // Se vacía el contenido anterior para asegurarse de que la nota actual se carga de manera limpia.
  // Convierte el ID del almacenamiento (localStorage) en un número para enviar correctamente la solicitud.
  // Llama al servicio para obtener la información de una nota por su id.
  // La respuesta (r) se añade al array this.nota.





