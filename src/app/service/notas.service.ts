import { Injectable } from '@angular/core';
import { Nota } from '../interfaces/nota';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  crearNota(contenidoNota: Nota){
    return fetch ('https://keep.googleapis.com/v1/notes', {
      method: 'POST',
      headers:{
        'Content-Type': "application/json",
        'Authorization' : `Bearer src/app/service/auth.google.service.ts`
      },
      body: JSON.stringify({
          "name": contenidoNota.titulo,
          "createTime": new Date(),
          "updateTime": '',
          "trashTime": '',
          "trashed": false,
          "attachments": [
            {}
          ],
          "permissions": [
            {}
          ],
          "title": contenidoNota.titulo,
          "text": {
            contenidoNota
          }
        })
      })
  }
}
