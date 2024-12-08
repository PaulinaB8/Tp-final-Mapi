import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TareasService } from '../service/tareas.service';
import { Nota } from '../interfaces/nota';
import { HeaderService } from '../service/header';



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
  header = inject(HeaderService);

  notasExistentes: Nota[] = []; 
  // Una lista vacía que se llenará con las notas obtenidas del servicio.

  ngOnInit(){
      this.getNotas();
      // Aquí se llama a getNotas() para obtener las notas existentes al cargar el componente.
 }

 getNotas(){
  this.notasExistentes = [];
  let r = this.header.getNotas();
    this.notasExistentes = r;
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

  verNota(id: number){
    this.header.verNota(id);
//     Propósito: Manejar la acción de ver una nota específica.
// Llama al método verNota(id) del servicio HeaderService, pasando el ID de la nota como parámetro.
}

}




