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

  ngOnInit(){
      this.getNotas();
    
 }

 getNotas(){
  this.notasExistentes = [];
  let r = this.header.getNotas();
    this.notasExistentes = r;
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
  this.router.navigate(['/notas']);
  // Agrega la funcionalidad aquí (navegación, abrir modal, etc.)
}

  verNota(id: number){
    this.header.verNota(id);
}

}




