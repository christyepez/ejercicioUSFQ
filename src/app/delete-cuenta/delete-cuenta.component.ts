import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuentaService } from '../cuenta.service';

@Component({
  selector: 'app-delete-cuenta',
  templateUrl: './delete-cuenta.component.html',
  styleUrls: ['./delete-cuenta.component.css']
})
export class DeleteCuentaComponent implements OnInit {

  id:any;
  cuenta= {
    clienteid: '',
    numero:'',
    saldo:''
  }

  constructor(
    private service:CuentaService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getcuenta(this.id).subscribe((data:any)=> {
      console.log(data);
      this.cuenta.clienteid = data.result.cuentaId;
      this.cuenta.numero = data.result.numero;
      this.cuenta.saldo = data.result.saldo;
    })
  }

  cancel(){
    this.router.navigate(['/cuentas']);
  };
  confirmar(){
      this.service.deletecCuenta(this.id).subscribe((data:any)=>{
      this.router.navigate(['/cuentas']);
    })
  }

}
