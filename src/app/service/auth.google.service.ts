import { Injectable } from '@angular/core';
 import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

   constructor(private oAuthService: OAuthService) { 
     this.inItLogin();
   }

   inItLogin(){
     const config : AuthConfig = {
       issuer:'htts://accounts.google.com',
       strictDiscoveryDocumentValidation: false,
       clientId: '800748931276-v28h6nujof68335vcs1bhjjmgkcvkobs.apps.googleusercontent.com',
       redirectUri: window.location.origin + '/vista-previa',
       scope: 'openid profile emial',
     }

     this.oAuthService.configure(config);
     this.oAuthService.setupAutomaticSilentRefresh();
     this.oAuthService.loadDiscoveryDocumentAndTryLogin();
   }

   login(){
     this.oAuthService.initLoginFlow();
   }

   logout(){
     this.oAuthService.logOut();
   }

   getProfile(){
     return this.oAuthService.getIdentityClaims;
   }
 }
