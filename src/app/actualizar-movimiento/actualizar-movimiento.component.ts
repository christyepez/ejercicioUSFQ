import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MovimientoService } from '../movimiento.service';

@Component({
  selector: 'app-actualizar-movimiento',
  templateUrl: './actualizar-movimiento.component.html',
  styleUrls: ['./actualizar-movimiento.component.css']
})
export class ActualizarMovimientoComponent implements OnInit {

  form:FormGroup;
  id: number;
  
  constructor(

    private fb:FormBuilder,
    private dialogRef: MatDialogRef<ActualizarMovimientoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {cuentaId: number, tipo: string, fecha:Date, valor:number,saldo: number, movimientoId: number}
    , private service: MovimientoService,
    private router: Router
  ) {
    this.id = data.movimientoId
    this.form = fb.group({
      cuentaId: [data.cuentaId, Validators.required],
      tipo: [data.tipo, Validators.required],
      fecha: [data.fecha, Validators.required],
      valor: [data.valor, Validators.required],
      saldo: [data.saldo, Validators.required],
     
    })
   }

   cerrar(){
     this.dialogRef.close();
   }
   guardar(){

    this.form.value.movimientoId = this.id;
     this.service.actualizarMovimiento(this.id,this.form.value).subscribe((data) => {
       this.router.navigate(['/movimientos']);
       window.location.reload();
     })
     this.dialogRef.close();
   }
   
  ngOnInit(): void {
  }

}
