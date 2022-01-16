import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MovimientoService } from '../movimiento.service';
import { MovimientoInterface } from '../interfaces/MovimientoInterface';
import { MatDialog } from '@angular/material/dialog';
import { ActualizarMovimientoComponent } from '../actualizar-movimiento/actualizar-movimiento.component';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})

export class MovimientosComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['cuentaId','tipo','fecha','valor','saldo','Acciones']
  
  constructor(
    private service: MovimientoService,
    private dialog: MatDialog
    ) { }
    
  ngOnInit(): void {
    this.service.getmovimientos().subscribe((data:any)=> {
      this.dataSource = new MatTableDataSource<MovimientoInterface>(data.result as MovimientoInterface[]);
      console.log(data);
    })
  }
  aplicarFiltro(filtro:any){
    this.dataSource.filter= filtro.target.value.trim().toLowerCase();
  }
 
  actualizarMovimiento(movimiento:MovimientoInterface){
    console.log(movimiento);
    //return this.http.post(this.baseurl, movimiento);
    this.dialog.open(ActualizarMovimientoComponent,{
      data:{
        cuentaId: movimiento.cuentaId,
        tipo: movimiento.tipo,
        fecha: movimiento.fecha,
        valor: movimiento.valor,
        saldo: movimiento.saldo,
        movimientoId: movimiento.movimientoId
        

      }
    });
  }


}
