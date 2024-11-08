import { Component, inject, OnInit } from '@angular/core';
import { Nota } from '../../interfaces/nota';
import { Lista } from '../../interfaces/lista';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';



@Component({
  selector: 'app-vista-previa',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './vista-previa.component.html',
  styleUrl: './vista-previa.component.scss'
})
export class VistaPreviaComponent implements OnInit{

  router = inject(Router);

  notes : Nota[] = [];

  lists : Lista[] = [];


  mes = "";

  ngOnInit(){
    let fecha : Date = new Date();
    let mes = fecha.toLocaleDateString("es-Cl", {
      day:"numeric",
      month: "long",
      year:"numeric",
    })
    this.mes = mes;

    this.getNotas()
  }

  goNotas(){
    this.router.navigate(['/notas']);
  }

  goListas(){
    this.router.navigate(['/todolist']);
  }

  goCalendar(){
    this.router.navigate(['/calendario']);
  }

  crearNuevaNota(){
    this.router.navigate(['/notas']);
  }



  getNotas(){
     let notas =  localStorage.getItem('lista')
     console.log(notas)
  }
}
