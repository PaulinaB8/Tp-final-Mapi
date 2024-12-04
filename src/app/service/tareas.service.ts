import { Injectable } from '@angular/core';
import { Nota } from '../interfaces/nota';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

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

   getNotas(){
      return fetch('http://localhost:4000').then(r => r.json());
  }

  borrarNotas(id: number){
    return fetch('http://localhost:4000/' + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json" 
        }
    });
    }

  }
    
 
