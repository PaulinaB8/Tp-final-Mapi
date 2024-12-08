import { Component, inject, OnInit } from '@angular/core';
import { Nota } from '../../interfaces/nota';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { TareasService } from '../../service/tareas.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderService } from '../../service/header';



@Component({
  selector: 'app-vista-previa',
  standalone: true,
  imports: [HeaderComponent, RouterModule,MatDatepickerModule, MatNativeDateModule],
  templateUrl: './vista-previa.component.html',
  styleUrl: './vista-previa.component.scss'
})
export class VistaPreviaComponent implements OnInit{

  router = inject(Router);
  notas = inject(TareasService);
  header = inject (HeaderService);

  // Un arreglo que almacenará las notas actuales que se obtendrán del servidor.
  notasExistentes : Nota[] = [];
  // Otro arreglo para manejar las notas, pero no parece ser usado en la lógica actual.
  nota: Nota [] = [];

// no entendi para que sirve esto lol
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

  // Limpia el arreglo de notas para asegurarse de que no haya datos previos.
  // Llama al método getNotas() del servicio HeaderService. Este debería obtener las notas actuales desde el servidor.
  // Asigna los datos obtenidos al arreglo this.notasExistentes.
  getNotas(){
    this.notasExistentes = [];
    let r = this.header.getNotas();
    this.notasExistentes = r;
  }

  verNota(id:number){
    this.header.verNota(id);
    }
  }

