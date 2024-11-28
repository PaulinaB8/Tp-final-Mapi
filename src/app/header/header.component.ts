import { Component, inject, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { getAuth, signOut } from "firebase/auth";



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);
  auth = getAuth();

  logOut() {
    signOut(this.auth)
      .then(() => {
        console.log('Sesión cerrada con éxito.');
        setTimeout(() => {
          this.router.navigate(['/login']); 
        }, 800); 
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }

}




