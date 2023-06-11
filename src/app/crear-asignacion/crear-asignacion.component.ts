import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AsignacionService } from '../services/asignacion.service';

@Component({
  selector: 'app-crear-asignacion',
  templateUrl: './crear-asignacion.component.html',
  styleUrls: ['./crear-asignacion.component.css']
})
export class CrearAsignacionComponent  {

  constructor(
    private service: AsignacionService,
    private router: Router
  ) { }
  
  asignacionForm = new FormGroup({
  fechaRegistro: new FormControl('', Validators.required),
  estudianteId: new FormControl('', Validators.required),
  cursoId: new FormControl('', Validators.required),
})

onSubmit(){
console.log(this.asignacionForm.value);

this.service.crearAsignacion(this.asignacionForm.value).subscribe((data:any) =>{
  alert("Asignacion Creado");
  this.router.navigate(['/asignaciones']);
})
}

}

 

