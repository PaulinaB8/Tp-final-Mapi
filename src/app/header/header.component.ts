import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TareasService } from '../service/tareas.service';
import { Nota } from '../interfaces/nota';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent implements OnInit{
  router = inject(Router);
  notas = inject(TareasService);

  notasExistentes: Nota[] = []; 
  // Una lista vacía que se llenará con las notas obtenidas del servicio.

  ngOnInit(){
      this.getNotas();
      // Aquí se llama a getNotas() para obtener las notas existentes al cargar el componente.
 }

 getNotas(){
  this.notasExistentes = [];
        this.notas.getNotas().then(r => {
          let nota: Nota;
      for (let item of r) { 
        nota = {
          id: item.id,
          assigner_id: item.assigner_id,
          assignee_id: item.assignee_id,
          project_id: item.project_id,
          section_id: item.section_id,
          parent_id: item.parent_id,
          order: item.order,
          content: item.content,
          description: item.description,
          is_completed: item.is_completed,
          labels: item.labels,
          priority: item.priority,
          comment_count: item.comment_count,
          creator_id: item.creator_id,
          created_at: item.created_at,
          due: {
            date: item?.due?.date, 
            string: item?.due?.string, 
            lang: item?.due?.lang,
            is_recurring: item?.due?.is_recurring,
          },
          url: item.url,
          duration: item.duration,
          deadline: item.deadline,
        }
        // console.log(nota)
        this.notasExistentes.push(nota) 
        }
      });
}
// Obtener las notas desde el servicio HeaderService.
// Limpia la lista notasExistentes inicializándola como un array vacío.
// Llama al método getNotas() del servicio HeaderService y almacena el resultado en this.notasExistentes.


 // Propiedad para controlar si el sidebar está abierto
 isSidebarOpen = false;


// Estos métodos se vinculan con eventos (click) en el HTML para abrir/cerrar el menú lateral.
 // Función para abrir el sidebar
 openSidebar() {
   this.isSidebarOpen = true; // Abrimos el sidebar
 }

 // Función para cerrar el sidebar
 closeSidebar() {
   this.isSidebarOpen = false; // Cerramos el sidebar
 }

 addNotes() {
  console.log('Agregar tarea clickeado');
  this.router.navigate(['/notas']);
//   Propósito: Manejar el clic en el botón "Agregar notas".
// Muestra un mensaje en la consola.
// Navega a la ruta /notas usando router.navigate().
}


}




