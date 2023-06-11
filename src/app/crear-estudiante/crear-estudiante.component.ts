import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteService } from '../services/estudiante.service';


@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})

export class CrearEstudianteComponent  {


  constructor(
    private service: EstudianteService,
    private router: Router
  ) { }
  
  estudianteForm = new FormGroup({
  cedula: new FormControl('', Validators.required),
  nombre: new FormControl('', Validators.required),
  apellido: new FormControl('', Validators.required),
  edad: new FormControl('', Validators.required),
})

onSubmit(){
console.log(this.estudianteForm.value);

this.service.crearEstudiante(this.estudianteForm.value).subscribe((data:any) =>{
  alert("estudiante Creado");
  this.router.navigate(['/estudiantes']);
})
}

}

 

  