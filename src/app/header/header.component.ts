import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
navigateToVistaPrevia() {
 throw new Error('Method not implemented.');
 }
  router = inject(Router);


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

}






