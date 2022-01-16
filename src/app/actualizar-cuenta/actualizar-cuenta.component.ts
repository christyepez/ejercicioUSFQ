import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { CuentaService } from '../cuenta.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-cuenta',
  templateUrl: './actualizar-cuenta.component.html',
  styleUrls: ['./actualizar-cuenta.component.css']
})
export class ActualizarCuentaComponent implements OnInit {

  form:FormGroup;
  id: number;
  
  constructor(

    private fb:FormBuilder,
    private dialogRef: MatDialogRef<ActualizarCuentaComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {clienteId: number, numero: string, saldo: number, cuentaId: number}, 
    private service: CuentaService,
    private router: Router
  ) {
    this.id = data.cuentaId
    this.form = fb.group({
      clienteId: [data.clienteId, Validators.required],
      numero: [data.numero, Validators.required],
      saldo: [data.saldo, Validators.required],
     
    })
   }

   
   cerrar(){
     this.dialogRef.close();
   }
   guardar(){
    this.form.value.cuentaId = this.id;
    this.service.actualizarCuenta(this.id,this.form.value).subscribe((data) => {
      this.router.navigate(['/cuentas']);
      window.location.reload();
    })
    this.dialogRef.close();
   }
   
  ngOnInit(): void { 
  }

}
