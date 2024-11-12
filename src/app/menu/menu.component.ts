import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() isMenuComponentCollapsed = false;

  constructor(private location: Location) {}

  toggleSidebar() {
    this.isMenuComponentCollapsed = !this.isMenuComponentCollapsed;
  }

  goBack() {
    this.location.back(); // Navega a la página anterior
  }
}

