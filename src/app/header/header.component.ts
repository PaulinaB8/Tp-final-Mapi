import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  routes = inject(Router);

  // openSidebar() {
  //    this.getElementById("mySidebar").style.width = "250px";
  // }

}




