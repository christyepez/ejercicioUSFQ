import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  form:FormGroup;
  id: number;
  
  constructor(

    private fb:FormBuilder,
    private dialogRef: MatDialogRef<ActualizarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) 
    private data: {nombres: string, direccion: string, telefono: string, clienteId:number},
    private service: ClienteService,
    private router: Router
  ) {
    this.id = data.clienteId;
    this.form = fb.group({
      nombres: [data.nombres, Validators.required],
      direccion: [data.direccion, Validators.required],
      telefono: [data.telefono, Validators.required],
    })
   }

   cerrar(){
     this.dialogRef.close();
   }
   
   guardar(){
     this.form.value.clienteId = this.id;
     this.service.actualizarCliente(this.id,this.form.value).subscribe((data) => {
       this.router.navigate(['/clientes']);
       window.location.reload();
     })
     this.dialogRef.close();
   }

  ngOnInit(): void {
  }

}
