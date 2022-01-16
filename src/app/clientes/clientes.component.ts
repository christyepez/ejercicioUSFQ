import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ActualizarClienteComponent } from '../actualizar-cliente/actualizar-cliente.component';
import { ClienteService } from '../cliente.service';
import { ClienteInterface } from '../interfaces/ClienteInterfaces';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['nombres','direccion','telefono','Acciones']

  constructor(
    private service: ClienteService,
    private dialog: MatDialog,
    private router:Router
    ) {   }

  ngOnInit(): void {
    this.service.getclientes().subscribe((data:any)=> {
      this.dataSource = new MatTableDataSource<ClienteInterface>(data.result as ClienteInterface[]);
      console.log(data);
    },
    (error) => alert("usuario no autorizado")
    );
      
  }

  aplicarFiltro(filtro:any){
    this.dataSource.filter= filtro.target.value.trim().toLowerCase();
  }

  actualizarCliente(cliente:ClienteInterface){
    console.log(cliente);

    this.dialog.open(ActualizarClienteComponent,{
      data:{
        nombres: cliente.nombres,
        direccion: cliente.direccion,
        telefono: cliente.telefono,
        clienteId: cliente.clienteId

      }
    });
    //return this.http.post(this.baseurl, cliente);

  }
}


