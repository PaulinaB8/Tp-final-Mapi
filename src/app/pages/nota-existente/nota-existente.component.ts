import { Component, inject, OnInit } from '@angular/core';
import { TareasService } from '../../service/tareas.service';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


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

  nota: any = {
           content : '',
           description : '',
           creator_id: 1,
  };
  id = 0;

  ngOnInit(){
    this.route.params.subscribe(params => { //suscribrise a los parametros de la ruta activa: cada vez que la ruta cambia (por ejemplo, el id en /tarea/:id), esta función se ejecutará. 
    const id = params['id'];
    this.id = id;
    this.verNota(id)})
  }
  

  guardarNota(){
    this.tareas.crearNota(this.nota).then(r => {
      console.log(r);
      Swal.fire({
        title: '¡Nota enviada!',
        text: 'Tu nota se ha guardado',
        icon: 'success',
        confirmButtonText: 'Aceptar'
  })
  this.tareas.getNotas();
})
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
      this.tareas.borrarNota(this.id).then(() => {
        Swal.fire({
          title: "Tarea eliminada",
          text: "La tarea ha sido eliminada correctamente",
          icon: "success"
        });
      });
    }
  });
}
  verNota(id: number){
    this.nota = [] 
    this.tareas.getNotaById(id).then(r =>{
      this.nota = r
      console.log(this.nota)
    })
  }
}
