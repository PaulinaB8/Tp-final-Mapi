import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

  export class MenuComponent {
    isMenuComponentCollapsed= input.required<boolean>();
  changeIsMenuComponentCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'vista-previa',
      icon: 'fal fa-home',
      label: 'VistaPrevia',
    },
    {
      routeLink: 'todolist',
      icon: 'fal fa-box-open',
      label: 'Todolist',
    },
    {
      routeLink: 'notas',
      icon: 'fal fa-file',
      label: 'Notas',
    },
    {
      routeLink: 'calendario',
      icon: 'fal fa-cog',
      label: 'Calendario',
    },
  ];

  toggleCollapse(): void {
    this.changeIsMenuComponentCollapsed.emit(!this.isMenuComponentCollapsed());
  }

  closeSidenav(): void {
    this.changeIsMenuComponentCollapsed.emit(true);
  }
    
  }
