import { Component, inject } from '@angular/core';
import { Nota, NotaCreada } from '../../interfaces/nota';
import { FormsModule } from '@angular/forms';
import { NotasService } from '../../service/notas.service';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.scss'
})
export class NotasComponent {

  nota = inject(NotasService)

  notas: Nota ={
    titulo:'',
    texto:''
  };

  notasCreadas : NotaCreada[]=[];

  crearNota(){
    this.nota.crearNota(this.notas).then((res)=>{
      console.log("funciono " + res)
      }).then(()=>{
        this.notasCreadas.push({titulo : this.notas.titulo})
      })
  }

  retornarInformacionNotas(){
    localStorage.setItem('lista', JSON.stringify(this.notasCreadas))
  }

}
