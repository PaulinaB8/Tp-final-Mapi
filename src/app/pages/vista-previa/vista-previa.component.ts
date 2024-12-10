import { Component, inject, OnInit } from '@angular/core';
import { Nota } from '../../interfaces/nota';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { TareasService } from '../../service/tareas.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




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


  // Un arreglo que almacenará las notas actuales que se obtendrán del servidor.
  notasExistentes : Nota[] = [];
  // Otro arreglo para manejar las notas, pero no parece ser usado en la lógica actual.
  nota: Nota [] = [];


  ngOnInit(){
    this.getNotas()
  }

  // Limpia el arreglo de notas para asegurarse de que no haya datos previos.
  // Llama al método getNotas() del servicio HeaderService. Este debería obtener las notas actuales desde el servidor.
  // Asigna los datos obtenidos al arreglo this.notasExistentes.
  getNotas(){
    this.notasExistentes = [];
        this.notas.getNotas().then(r => {
          let nota: Nota;
          // console.log(r)
          // console.log(r.length);
      for (let item of r) { 
        nota = {
          id: item.id,
          assigner_id: item.assigner_id,
          assignee_id: item.assignee_id,
          project_id: item.project_id,
          section_id: item.section_id,
          parent_id: item.parent_id,
          order: item.order,
          content: item.content,
          description: item.description,
          is_completed: item.is_completed,
          labels: item.labels,
          priority: item.priority,
          comment_count: item.comment_count,
          creator_id: item.creator_id,
          created_at: item.created_at,
          due: {
            date: item?.due?.date, 
            string: item?.due?.string, 
            lang: item?.due?.lang,
            is_recurring: item?.due?.is_recurring,
          },
          url: item.url,
          duration: item.duration,
          deadline: item.deadline,
        }
        // console.log(nota)
        this.notasExistentes.push(nota) 
        }
      });
  }

  }

