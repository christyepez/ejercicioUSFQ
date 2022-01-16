import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActualizarClienteComponent } from '../actualizar-cliente/actualizar-cliente.component';
import { ActualizarCuentaComponent } from '../actualizar-cuenta/actualizar-cuenta.component';
import { CuentaService } from '../cuenta.service';
import { CuentaInterface } from '../interfaces/CuentasInterface';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['clienteId','numero','saldo','Acciones']

  constructor(
    private service: CuentaService,
    private dialog: MatDialog
    ) {   }

  ngOnInit(): void {
    this.service.getcuentas().subscribe((data:any)=> {
      this.dataSource = new MatTableDataSource<CuentaInterface>(data.result as CuentaInterface[]);
      console.log(data);
    });
    }

    aplicarFiltro(filtro:any){
      this.dataSource.filter= filtro.target.value.trim().toLowerCase();
    }

    actualizarCuenta(cuenta:CuentaInterface){
      console.log(cuenta);
      
      this.dialog.open(ActualizarCuentaComponent,{
        data:{
          clienteId: cuenta.clienteId,
          numero: cuenta.numero,
          saldo: cuenta.saldo,
          cuentaid: cuenta.cuentaId
  
        }
      });
    }
  
}
