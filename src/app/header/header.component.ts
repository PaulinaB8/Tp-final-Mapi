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
navigateToVistaPrevia() {
 throw new Error('Method not implemented.');
 }
  router = inject(Router);
  notas = inject(TareasService);

  notasExistentes: Nota[] = [];

  ngOnInit(){
      this.notasExistentes = [];
      this.notas.getNotas().then(r => {
       let nota: Nota;
       console.log(r)
       console.log(r.length);
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
     console.log(nota)
     this.notasExistentes.push(nota) 
   }
 });
 }


 // Propiedad para controlar si el sidebar está abierto
 isSidebarOpen = false;

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
  // Agrega la funcionalidad aquí (navegación, abrir modal, etc.)
}

  verNota(id : number){
    this.router.navigate(['/notas', id]);

}

}




