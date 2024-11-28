
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGoogleService } from '../../service/auth.google.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})



export class LoginComponent {

  auth = inject (AuthGoogleService);

  logIn(){
    this.auth.loginGoogle();
    console.log("login")
  }



}





  