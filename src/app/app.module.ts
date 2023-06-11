import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {MatListModule} from '@angular/material/list';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRouterModule } from './app-router.module';
 
import {EstudianteComponent} from './estudiante/estudiante.component';
import { ActualizarEstudianteComponent } from './actualizar-estudiante/actualizar-estudiante.component';
import { DeleteEstudianteComponent } from './delete-estudiante/delete-estudiante.component';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';

import {CursoComponent} from './curso/curso.component';
import { ActualizarCursoComponent } from './actualizar-curso/actualizar-curso.component';
import { DeleteCursoComponent } from './delete-curso/delete-curso.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';

import {AsignacionComponent} from './asignacion/asignacion.component';
import { DeleteAsignacionComponent } from './delete-asignacion/delete-asignacion.component';
import { ActualizarAsignacionComponent } from './actualizar-asignacion/actualizar-asignacion.component';
import { CrearAsignacionComponent } from './crear-asignacion/crear-asignacion.component';

 

import { EstudianteService } from './services/estudiante.service';
import { CursoService } from './services/curso.service';
import { AsignacionService } from './services/asignacion.service';

import {MatDatepickerModule} from '@angular/material/datepicker'


 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
  
    EstudianteComponent,
    CrearEstudianteComponent,
    ActualizarEstudianteComponent,
    DeleteEstudianteComponent,    
 

    CursoComponent,
    CrearCursoComponent,
    ActualizarCursoComponent,
    DeleteCursoComponent,
    
    AsignacionComponent,
    CrearAsignacionComponent,
    ActualizarAsignacionComponent,
    DeleteAsignacionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    FormsModule,
    MatDatepickerModule

    
  ],
  entryComponents:[ActualizarEstudianteComponent, ActualizarCursoComponent, ActualizarAsignacionComponent],
  providers: [
    EstudianteService,
    CursoService,
    AsignacionService,

    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
