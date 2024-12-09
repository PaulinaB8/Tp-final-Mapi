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


    // Este método obtiene una lista de notas desde el servicio TareasService y las convierte en objetos de tipo Nota.
    // Se inicializa un array vacío donde se almacenarán las notas formateadas.
    // Llama al método getNotas del servicio TareasService, que hace una solicitud GET al backend y devuelve todas las notas.
    // Se recorre la respuesta (r) usando un bucle for (let item of r).
// Para cada item, se crea un nuevo objeto nota de tipo Nota que se ajusta al formato definido en la interfaz Nota. 
// La nota formateada se agrega al array notasExistentes con notasExistentes.push(nota).
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
      // Devuelve el array de notas procesadas.
      // Nota: Esto devuelve inmediatamente un array vacío, ya que la operación de fetch es asíncrona. 


      // Este método se utiliza para navegar a una vista que muestra una nota específica.
      // Almacena el ID de la nota en el almacenamiento local del navegador (clave: id). 
      // Esto permite que otros componentes puedan acceder a este ID sin pasarlo directamente entre ellos.
      verNota(id: number){
        this.router.navigate(['/notas:', id]);
    }
  }
