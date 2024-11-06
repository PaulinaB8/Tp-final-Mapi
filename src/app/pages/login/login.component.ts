import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  router = inject(Router);

datosLogin = {
  usuario: "",
  password : "",
}

  login(){
    localStorage.setItem('usuario', "admin");
    localStorage.setItem('contraseña', "admin");

    console.log(this.datosLogin.usuario);

    if(this.datosLogin.usuario === localStorage.getItem('usuario') && 
    this.datosLogin.password === localStorage.getItem('contraseña')){
      this.router.navigate(['/vista-previa']);
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Credenciales incorrectas. Por favor, vuelva a intentar",
      });
    }


  }
}
