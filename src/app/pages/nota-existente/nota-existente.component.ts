import { Component, inject, OnChanges, OnInit } from '@angular/core';
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

  nota: Nota[] = [{
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
  id = '';

  ngOnInit(){
      const id = localStorage.getItem('id');
      console.log(id);
    if(id != null){
      this.id = id;
      this.verNota(id)
    }
  }
  

  editarNota(){
    this.tareas.editarNota(this.nota[0])
  }

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
    if (result.isConfirmed) {
      this.tareas.borrarNota(parseInt(this.id,10)).then(() => {
        Swal.fire({
          title: "Tarea eliminada",
          text: "La tarea ha sido eliminada correctamente",
          icon: "success"
        });
      }).then(() => this.router.navigate(['/vista-previa']));
    }
  });
}
  verNota(id: string){
    this.nota = [];
    const num = parseInt(id, 10)
    this.tareas.getNotaById(num).then(r =>{
      if(this.nota != null) {
        this.nota.push(r) ;
      console.log(this.nota)
      }
    })
    }

  }




