
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { Router, RouterModule } from '@angular/router';

 declare var gapi: any;
declare var google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})



export class LoginComponent  implements OnInit{

  router = inject(Router);


  CLIENT_ID = 'tu-client-id';
  API_KEY = 'tu-api-key';
  DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
  SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';
  gapiInited = false;
  gisInited = false;
  tokenClient: any;

  ngOnInit() {
    this.loadScripts();
  }

  loadScripts() {
    const gapiScript = document.createElement('script');
    gapiScript.src = "https://apis.google.com/js/api.js";
    gapiScript.onload = () => this.gapiLoaded();
    document.body.appendChild(gapiScript);

    const gisScript = document.createElement('script');
    gisScript.src = "https://accounts.google.com/gsi/client";
    gisScript.onload = () => this.gisLoaded();
    document.body.appendChild(gisScript);
  }

  gapiLoaded() {
    gapi.load('client', this.initializeGapiClient.bind(this));
  }

  async initializeGapiClient() {
    await gapi.client.init({
      apiKey: this.API_KEY,
      discoveryDocs: [this.DISCOVERY_DOC],
    });
    this.gapiInited = true;
    this.maybeEnableButtons();
  }

  gisLoaded() {
    this.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: this.CLIENT_ID,
      scope: this.SCOPES,
      callback: '', 
    });
    this.gisInited = true;
    this.maybeEnableButtons();
  }

  maybeEnableButtons() {
    if (this.gapiInited && this.gisInited) {
      document.getElementById('authorize_button')!.style.visibility = 'visible';
    }
  }

  async handleAuthClick() {
    this.tokenClient.callback = async (resp: any) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      document.getElementById('signout_button')!.style.visibility = 'visible';
      await this.listMajors();
    };
    if (gapi.client.getToken() === null) {
      this.tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      this.tokenClient.requestAccessToken({ prompt: '' });
    }
  }

  handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken('');
      document.getElementById('content')!.innerText = '';
      document.getElementById('authorize_button')!.innerText = 'Authorize';
      document.getElementById('signout_button')!.style.visibility = 'hidden';
    }
  }

   async listMajors() {
     let response;
     try {
      response = await gapi.client.sheets.spreadsheets.values.get({
         spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
         range: 'Class Data!A2:E',
       });
     } catch (err:any) {
       document.getElementById('content')!.innerText = err.message;
       return;
     }
     const range = response.result;
     if (!range || !range.values || range.values.length == 0) {
       document.getElementById('content')!.innerText = 'No values found.';
       return;
     }
     const output = range.values.reduce((str: string, row: string[]) => `${str}${row[0]}, ${row[4]}\n`, 'Name, Major:\n');
     document.getElementById('content')!.innerText = output;
   }


    logIn(){
      this.router.navigate(['/vista-previa']);
    }

}





  