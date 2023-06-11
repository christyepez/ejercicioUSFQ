import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { ActualizarCursoComponent } from '../actualizar-curso/actualizar-curso.component';
import { CursoService } from '../services/curso.service';
import { CursoInterface } from '../interfaces/CursoInterfaces';



@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['nombreCurso', 'horaInicio', 'horaFinal', 'numeroCreditos','Acciones']



  constructor(
    private service: CursoService,
    private dialog: MatDialog,
    private router:Router
    ) {   }

  ngOnInit(): void {
    this.service.getCursos().subscribe((data:any)=> {
      this.dataSource = new MatTableDataSource<CursoInterface>(data.result as CursoInterface[]);
      console.log(data);
    },
    (error) => alert("usuario no autorizado")
    );
      
  }

  aplicarFiltro(filtro:any){
    this.dataSource.filter= filtro.target.value.trim().toLowerCase();
  }

  actualizarCurso(curso:CursoInterface){
    console.log(curso);

    this.dialog.open(ActualizarCursoComponent,{
      data:{
        nombreCurso: curso.nombreCurso,
        horaInicio: curso.horaInicio,
        horaFinal: curso.horaFinal,
        numeroCreditos: curso.numeroCreditos,
        cursoId: curso.cursoId

      }
    }); 

  }
}


