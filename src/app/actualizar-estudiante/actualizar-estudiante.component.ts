 
import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EstudianteService } from '../services/estudiante.service';


@Component({
  selector: 'app-actualizar-estudiante',
  templateUrl: './actualizar-estudiante.component.html',
  styleUrls: ['./actualizar-estudiante.component.css']
})
export class ActualizarEstudianteComponent implements OnInit {
  form:FormGroup;
  id: number;
  
  constructor(

    private fb:FormBuilder,
    private dialogRef: MatDialogRef<ActualizarEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) 
    private data: {cedula: string, nombre: string, apellido: string, edad: number, estudianteId:number},
    private service: EstudianteService,
    private router: Router
  ) {
    this.id = data.estudianteId;
    this.form = fb.group({
      cedula: [data.cedula, Validators.required],
      nombre: [data.nombre, Validators.required],
      apellido: [data.apellido, Validators.required],
      edad: [data.edad, Validators.required],
    })
   }

   cerrar(){
     this.dialogRef.close();
   }
   
   guardar(){
     this.form.value.estudianteId = this.id;
     this.service.actualizarEstudiante(this.id,this.form.value).subscribe((data) => {
       this.router.navigate(['/estudiantes']);
       window.location.reload();
     })
     this.dialogRef.close();
   }

  ngOnInit(): void {
  }

}
