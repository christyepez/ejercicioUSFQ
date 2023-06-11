import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AsignacionService } from '../services/asignacion.service';


@Component({
  selector: 'app-actualizar-asignacion',
  templateUrl: './actualizar-asignacion.component.html',
  styleUrls: ['./actualizar-asignacion.component.css']
})
export class ActualizarAsignacionComponent implements OnInit {
  form:FormGroup;
  id: number;
  
  constructor(

    private fb:FormBuilder,
    private dialogRef: MatDialogRef<ActualizarAsignacionComponent>,
    @Inject(MAT_DIALOG_DATA) 
    private data: {fechaRegistro: string, cursoId: number, estudianteId: number,   asignacionId:number},
    private service: AsignacionService,
    private router: Router
  ) {
    this.id = data.asignacionId;
    this.form = fb.group({
      fechaRegistro: [data.fechaRegistro, Validators.required],
      cursoId: [data.cursoId, Validators.required],
      estudianteId: [data.estudianteId, Validators.required], 
    })
   }

   cerrar(){
     this.dialogRef.close();
   }
   
   guardar(){
     this.form.value.asignacionId = this.id;
     this.service.actualizarAsignacion(this.id,this.form.value).subscribe((data) => {
       this.router.navigate(['/asignaciones']);
       window.location.reload();
     })
     this.dialogRef.close();
   }

  ngOnInit(): void {
  }

}

