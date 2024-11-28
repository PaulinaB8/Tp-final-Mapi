import { inject, Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { environment } from '../environment/environment.firebase';
import { initializeApp } from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

   router = inject(Router);

  loginGoogle(){
    let provider = new GoogleAuthProvider();
    let firebaseApp = initializeApp(environment); 
    let auth = getAuth(firebaseApp);

    return signInWithPopup(auth, provider)
      .then((result) => {
        this.router.navigate(['/vista-previa']);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        return token
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential)
        return null

      });
  }

  loginisTrue(){
    this.loginGoogle().then(res => {
      if (res !== null ){
        return res
      }else{
        return null
      }
    })
   
    }

  }
  
 
