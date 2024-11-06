import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
<<<<<<< HEAD
  router = inject(Router);
=======

  routes = inject(Router);

  // openSidebar() {
  //    this.getElementById("mySidebar").style.width = "250px";
  // }

>>>>>>> bb2c3a90f455ec56edc04b4aee2bace73f0d350a
}




