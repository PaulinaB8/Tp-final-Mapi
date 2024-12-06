import { inject, Injectable } from "@angular/core";
import { TareasService } from "./tareas.service";
import { Nota } from "../interfaces/nota";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
  export class HeaderService {
    notas = inject(TareasService);
    router = inject(Router);



    getNotas(){
        let notasExistentes: Nota[] = [];
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
        notasExistentes.push(nota) 
        }
      });
      return notasExistentes
      }

      verNota(id: number){
        localStorage.setItem('id', id.toString())
        this.router.navigate(['/nota-existente']);
    }
  }