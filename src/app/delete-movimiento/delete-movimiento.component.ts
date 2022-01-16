import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovimientoService } from '../movimiento.service';

@Component({
  selector: 'app-delete-movimiento',
  templateUrl: './delete-movimiento.component.html',
  styleUrls: ['./delete-movimiento.component.css']
})
export class DeleteMovimientoComponent implements OnInit {

  id:any;
  movimiento= {
    cuentaid: '',
    tipo:'',
    fecha:'',
    valor:'',
    saldo:''
  }


  constructor(
    private service:MovimientoService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getmovimiento(this.id).subscribe((data:any)=> {
      console.log(data);
      
      this.movimiento.cuentaid = data.result.cuentaid;
      this.movimiento.tipo = data.result.tipo;
      this.movimiento.fecha = data.result.fecha;
      this.movimiento.valor = data.result.valor;
      this.movimiento.saldo = data.result.saldo;
    })
  }

  cancel(){
    this.router.navigate(['/movimientos']);
  };
  confirmar(){
      this.service.deleteMovimiento(this.id).subscribe((data:any)=>{
      this.router.navigate(['/movimientos']);
    })
    
  };
}
