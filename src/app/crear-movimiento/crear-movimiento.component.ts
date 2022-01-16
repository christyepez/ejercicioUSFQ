import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovimientoService } from '../movimiento.service';

@Component({
  selector: 'app-crear-movimiento',
  templateUrl: './crear-movimiento.component.html',
  styleUrls: ['./crear-movimiento.component.css']
})
export class CrearMovimientoComponent   {

  constructor(
    private service:MovimientoService,
    private router: Router
    ) { }
 
  movimientoForm = new FormGroup({

    cuentaId: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
    saldo: new FormControl('', Validators.required),
  })

  
  onSubmit(){
    console.log(this.movimientoForm.value);
   
  this.service.crearmovimiento(this.movimientoForm.value).subscribe((data:any) =>{
    alert("Movimiento Creado");
    this.router.navigate(['/movimientos']);
  })
}
}
