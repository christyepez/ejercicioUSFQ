import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { ActualizarAsignacionComponent } from '../actualizar-asignacion/actualizar-asignacion.component';
import { AsignacionService } from '../services/asignacion.service';
import { AsignacionInterface } from '../interfaces/AsignacionInterfaces';

import { EstudianteService } from '../services/estudiante.service';
import { EstudianteInterface } from '../interfaces/EstudianteInterfaces';



@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css']
})
export class AsignacionComponent implements OnInit {
  dataSource: any = [];
  dataSourceE: any = [];
  displayedColumns: string[] = ['fechaRegistro','estudianteId','cursoId','Acciones']

  constructor(
    private service: AsignacionService,
    private serviceE: EstudianteService,
    private dialog: MatDialog,
    private router:Router
    ) {   }

  ngOnInit(): void {
    this.service.getAsignaciones().subscribe((data:any)=> {
      this.dataSource = new MatTableDataSource<AsignacionInterface>(data.result as AsignacionInterface[]);
      console.log(data);
    },
    (error) => alert("usuario no autorizado")
    );

    this.serviceE.getEstudiantes().subscribe((data:any)=> {
      this.dataSourceE = new MatTableDataSource<EstudianteInterface>(data.result as EstudianteInterface[]);
      console.log(data);
    },
    (error) => alert("usuario no autorizado")
    );
      
  }

  aplicarFiltro(filtro:any){
    this.dataSource.filter= filtro.target.value.trim().toLowerCase();
  }

  actualizarAsignacion(asignacion:AsignacionInterface){
    console.log(asignacion);

    this.dialog.open(ActualizarAsignacionComponent,{
      data:{
        fechaRegistro: asignacion.fechaRegistro,
        estudianteId: asignacion.estudianteId, 
        cursoId: asignacion.cursoId,
        asignacionId: asignacion.asignacionId


        
      }
    }); 

  }


  
}



