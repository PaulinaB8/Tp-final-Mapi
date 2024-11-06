import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { VistaPreviaComponent } from './pages/vista-previa/vista-previa.component';

export const routes: Routes = [
    {
        path: "login", 
        component: LoginComponent,
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
    },
    {
        path: "vista-previa", 
        component: VistaPreviaComponent,
    },
];
