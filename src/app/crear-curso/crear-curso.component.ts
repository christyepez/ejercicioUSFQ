import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoService } from '../services/curso.service'; 

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css'],

 
})
export class CrearCursoComponent  {
 
  constructor(
    private service: CursoService,
    private router: Router
  ) { }
  
    cursoForm = new FormGroup({
    nombreCurso: new FormControl('', Validators.required),
    horaInicio: new FormControl('', Validators.required),
    horaFinal: new FormControl('', Validators.required),
    numeroCreditos: new FormControl('', Validators.required),

  
})

onSubmit(){
console.log(this.cursoForm.value);

this.service.crearCurso(this.cursoForm.value).subscribe((data:any) =>{
  alert("Curso Creado");
  this.router.navigate(['/cursos']);
})
}

}

 

  