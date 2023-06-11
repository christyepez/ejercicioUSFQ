 
import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CursoService } from '../services/curso.service';
import {MatDatepickerModule} from '@angular/material/datepicker'


@Component({
  selector: 'app-actualizar-curso',
  templateUrl: './actualizar-curso.component.html',
  styleUrls: ['./actualizar-curso.component.css']
})
export class ActualizarCursoComponent implements OnInit {
  form:FormGroup;
  id: number;
  
  constructor(

    private fb:FormBuilder,
    private dialogRef: MatDialogRef<ActualizarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) 
    private data: {nombreCurso: string, horaInicio: number, horaFinal: number, numeroCreditos: number, cursoId:number},
    private service: CursoService,
    private router: Router
  ) {
    this.id = data.cursoId;
    this.form = fb.group({
      nombreCurso: [data.nombreCurso, Validators.required],
      horaInicio: [data.horaInicio, Validators.required],
      horaFinal: [data.horaFinal, Validators.required],
      numeroCreditos: [data.numeroCreditos, Validators.required],
    })
   }

   cerrar(){
     this.dialogRef.close();
   }
   
   guardar(){
     this.form.value.cursoId = this.id;
     this.service.actualizarCurso(this.id,this.form.value).subscribe((data) => {
       this.router.navigate(['/cursos']);
       window.location.reload();
     })
     this.dialogRef.close();
   }

  ngOnInit(): void {
  }

}
