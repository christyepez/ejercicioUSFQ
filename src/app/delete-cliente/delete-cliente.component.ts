import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.css']
})
export class DeleteClienteComponent implements OnInit {

  id:any;
  cliente= {
    nombre: '',
    direccion:'',
    telefono:''
  }

  constructor(
    private service:ClienteService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getcliente(this.id).subscribe((data:any)=> {
      console.log(data);
      this.cliente.nombre = data.result.nombres;
      this.cliente.direccion = data.result.direccion;
      this.cliente.telefono = data.result.telefono;
    })
  }

  cancel(){
    this.router.navigate(['/clientes']);
  };
  confirmar(){
      this.service.deletecliente(this.id).subscribe((data:any)=>{
      this.router.navigate(['/clientes']);
    })
    
  };
}
