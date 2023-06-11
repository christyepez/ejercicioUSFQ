import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";  
import { LoginComponent } from "./login/login.component"; 
import { RegisterComponent } from "./register/register.component";

import {EstudianteComponent} from './estudiante/estudiante.component';
import { DeleteEstudianteComponent } from './delete-estudiante/delete-estudiante.component';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';

import {CursoComponent} from './curso/curso.component';
import { DeleteCursoComponent } from './delete-curso/delete-curso.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';

import {AsignacionComponent} from './asignacion/asignacion.component';
import { DeleteAsignacionComponent } from './delete-asignacion/delete-asignacion.component';
import { CrearAsignacionComponent } from './crear-asignacion/crear-asignacion.component';



const routes:Routes=[

    {path:'', component: LoginComponent},


    {path:'estudiantes', component: EstudianteComponent},
    {path:'crear-estudiantes', component: CrearEstudianteComponent},
    {path:'estudiantes/delete-estudiante/:id', component: DeleteEstudianteComponent},

    {path:'cursos', component: CursoComponent},
    {path:'crear-cursos', component: CrearCursoComponent},
    {path:'cursos/delete-curso/:id', component: DeleteCursoComponent},

    {path:'asignacion', component: AsignacionComponent},
    {path:'crear-asignaciones', component: CrearAsignacionComponent},
    {path:'asignacion/delete-asignacion/:id', component: DeleteAsignacionComponent},
      

    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
]

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}
