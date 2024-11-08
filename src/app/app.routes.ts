import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { VistaPreviaComponent } from './pages/vista-previa/vista-previa.component';
import { NotasComponent } from './pages/notas/notas.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { MenuComponent } from './menu/menu.component';


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
    {
        path: "notas", 
        component: NotasComponent,
    },
    {
        path: "todolist", 
        component: TodolistComponent,
    },
    {
        path: "calendario", 
        component: CalendarioComponent,
    },
    {
        path: "menu",
        component: MenuComponent,
    }
];
