import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuentaService } from '../cuenta.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent   {

  constructor(
    private service: CuentaService,
    private router: Router

  ) { }

  
  cuentaForm = new FormGroup({

    clienteId: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    saldo: new FormControl('', Validators.required),
  })

  onSubmit(){
    console.log(this.cuentaForm.value);
    
  this.service.crearcuenta(this.cuentaForm.value).subscribe((data:any) =>{
    alert("Cuenta Creado");
    this.router.navigate(['/cuentas']);
  })
}

}
