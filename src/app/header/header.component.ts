import { Component, inject, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);

  

  // openSidebar() {
  //    this.getElementById("mySidebar").style.width = "250px";
  // }
  // Referencia al elemento con el id `mySidebar`
  @ViewChild('mySidebar') mySidebar!: ElementRef;

  constructor(private renderer: Renderer2) {}

  // Función para abrir la barra lateral
  openSidebar() {
    this.renderer.setStyle(this.mySidebar.nativeElement, 'width', '250px');
  }

  // Función para cerrar la barra lateral
  closeSidebar() {
    this.renderer.setStyle(this.mySidebar.nativeElement, 'width', '0');
  }

}




