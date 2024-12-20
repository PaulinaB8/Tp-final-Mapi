import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TareasService } from '../../service/tareas.service';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../../header/header.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../../interfaces/nota';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-nota-existente',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './nota-existente.component.html',
  styleUrl: './nota-existente.component.scss'
})
export class NotaExistenteComponent implements OnInit, OnDestroy{
  tareas = inject(TareasService);
  router = inject(Router);
  route = inject(ActivatedRoute)
  // permite acceder a informacion sobre la ruta activa (parámetros, fragmentos, etc.)

  private routeSub!: Subscription;
// es una variable que guarda  una referencia a la suscripción a un observable. En este caso sirve para escuchar los cambios en la suscripcion de los parametros

  id = 0;
  

  nota: Nota|undefined;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = +params['id'];  // + lo convierte en número
      this.verNota(this.id);   // Llama a la función para cargar los datos de la nota
  });     
      }
// 57. Observable que emite un objeto con los parámetros dinámicos de la ruta cada vez que cambian.
    

// Este id se utiliza para cargar la nota específica en la vista.
// Solo si el ID existe, ejecuta la función verNota(id).
// this.verNota(id):Llama a la función para obtener los detalles de la nota con ese id de la base de datos.
  


  editarNota(){
    if(this.nota != undefined){
      this.tareas.editarNota(this.nota).then(r => {
        if (r.ok) {
          Swal.fire({
                  title: '¡Nota actualizada!',
                  text: 'Tu nota se ha actualizado correctamente',
                  icon: 'success',
                  confirmButtonText: 'Aceptar'
          })
          }else{
            Swal.fire({
              icon: "error",
              title: "Error al actualizar",
              text: "Por favor, vuelva a actualizar su nota",
              confirmButtonText: 'Volver a intentar'
            });
          }
  
  })
}
}
  // Propósito: Editar la nota actual en la base de datos utilizando la información contenida en el primer índice del array nota.
  // this.tareas.editarNota(this.nota[0]): Llama al servicio editarNota() definido en TareasService. Se envía la nota actual como parámetro.



borrarNota(){
  Swal.fire({
    title: "¿Quieres borrar la nota?",
    text: "Una vez borrada ya no podrás acceder a ella",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed && this.id != undefined) {
      this.tareas.borrarNota(this.id).then(r => {
        if(r.ok){
          Swal.fire({
          title: "Tarea eliminada",
          text: "La tarea ha sido eliminada correctamente",
          icon: "success"
        }).then(() => this.router.navigate(['/vista-previa']))
        }else{
          Swal.fire({
          icon: "error",
          title: "Error al borrar",
          text: "Por favor, vuelva a borrar su nota",
          confirmButtonText: 'Volver a intentar'
        });
        }
      })
      }
  }).catch(error => {
          console.error('Error al borrar la nota:', error);
   })

}
// Si el usuario confirma la eliminación:Llama a this.tareas.borrarNota(parseInt(this.id, 10)). 
// Se convierte el id de string a número.Luego, al completarse la operación, muestra otra alerta de confirmación con Swal.fire.
// Redirige a la vista previa (vista-previa):Después de confirmar el borrado, el usuario es redirigido a otra ruta mediante this.router.navigate()




  verNota(id: number){
    this.tareas.getNotaById(id).then(r =>{
        this.nota = r;
    }).catch(error => {
      console.error('Error al obtener la nota:', error);
    })
  }

ngOnDestroy(){
  if (this.routeSub) {
    this.routeSub.unsubscribe();
  }

  }
}

// Propósito: Liberar recursos, cancelar suscripciones y prevenir fugas de memoria.
// En este caso: ngOnDestroy cancela la suscripción a los cambios en los parámetros de la URL (this.route.params).