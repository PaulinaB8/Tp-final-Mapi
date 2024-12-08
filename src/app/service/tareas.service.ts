import { Injectable } from '@angular/core';
import { Nota } from '../interfaces/nota';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  // Método que recibe un objeto de tipo Nota (definido en la interfaz Nota) para enviarlo al servidor mediante un POST.
  crearNota( contenido: Nota){
      console.error(contenido)
      return fetch("http://localhost:4000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" 
      },
        body: JSON.stringify(contenido) 
      })
    }

//     Realiza una solicitud GET al servidor para obtener todas las notas.
// y lugo combierte la respuesta ajson apra que pueda ser interpretada por js
   getNotas(){
      return fetch('http://localhost:4000')
      .then(r => r.json());
  }


  // Elimina una nota específica basada en su ID.por eso se incluye en la url del ID de la nota que se desea eliminar.
  borrarNota(id: number){
    return fetch('http://localhost:4000/' + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json" 
        }
    });
    }

//     Busca una nota específica usando su ID.
// Devuelve una promesa que, al resolverse, contiene el objeto Nota.
    getNotaById(id : number): Promise<Nota>{
       return fetch('http://localhost:4000/' + id)
      .then(r => r.json());
      }

//       Edita una nota existente enviando su ID y el nuevo contenido.
// method: "PUT": Especifica que se quiere actualizar un recurso existente.
// body: JSON.stringify(nota): Convierte el objeto actualizado de nota a JSON.

    editarNota(nota : Nota){
      return fetch('http://localhost:4000/' + nota.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(nota) 
    });
    }
  }
    
 
