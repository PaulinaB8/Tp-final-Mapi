import { Component, inject, OnInit } from '@angular/core';
import { Nota } from '../../interfaces/nota';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { TareasService } from '../../service/tareas.service';



@Component({
  selector: 'app-vista-previa',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './vista-previa.component.html',
  styleUrl: './vista-previa.component.scss'
})
export class VistaPreviaComponent implements OnInit{

  router = inject(Router);
  tareas = inject(TareasService);

  notes : Nota[] = [];


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
     this.notes = [];
     this.tareas.getNotas().then(r => {
      let nota: Nota;
      console.log(r)
      console.log(r.length);
  for (let item of r) { //r es array
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
        date: item?.due?.date, //el punto accede a la propiedad del objeto
        string: item?.due?.string, //ponemos ? porque no sabemos si viene definido el dato. puede venir null/undefined
        lang: item?.due?.lang,
        is_recurring: item?.due?.is_recurring,
      },
      url: item.url,
      duration: item.duration,
      deadline: item.deadline,
    }
    this.notes.push(nota) //todo es objeto. llena el array
    console.log (this.notes)
  }
});
}


}