import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { ActualizarEstudianteComponent } from '../actualizar-estudiante/actualizar-estudiante.component';
import { EstudianteService } from '../services/estudiante.service';
import { EstudianteInterface } from '../interfaces/EstudianteInterfaces';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['cedula','nombre','apellido','edad','Acciones']

  constructor(
    private service: EstudianteService,
    private dialog: MatDialog,
    private router:Router
    ) {   }

  ngOnInit(): void {
    this.service.getEstudiantes().subscribe((data:any)=> {
      this.dataSource = new MatTableDataSource<EstudianteInterface>(data.result as EstudianteInterface[]);
      console.log(data);
    },
    (error) => alert("usuario no autorizado")
    );
      
  }

  aplicarFiltro(filtro:any){
    this.dataSource.filter= filtro.target.value.trim().toLowerCase();
  }

  actualizarEstudiante(estudiante:EstudianteInterface){
    console.log(estudiante);

    this.dialog.open(ActualizarEstudianteComponent,{
      data:{
        cedula: estudiante.cedula,
        nombre: estudiante.nombre,
        apellido: estudiante.apellido,
        edad: estudiante.edad,
        estudianteId: estudiante.estudianteId

      }
    }); 

  }
}


