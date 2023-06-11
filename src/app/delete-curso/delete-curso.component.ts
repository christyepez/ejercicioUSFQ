import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-delete-curso',
  templateUrl: './delete-curso.component.html',
  styleUrls: ['./delete-curso.component.css']
})
export class DeleteCursoComponent implements OnInit {

  id:any;
  curso= {
    nombreCurso:'',
    horaInicio: '',
    horaFinal: '',
    numeroCreditos:''
  
  }

  constructor(
    private service:CursoService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getCurso(this.id).subscribe((data:any)=> {
      console.log(data);
      this.curso.nombreCurso = data.result.nombreCurso;
      this.curso.horaInicio = data.result.horaInicio;
      this.curso.horaFinal = data.result.horaFinal;
      this.curso.numeroCreditos = data.result.numeroCreditos;
    })
  }

  cancel(){
    this.router.navigate(['/cursos']);
  };
  confirmar(){
      this.service.deleteCurso(this.id).subscribe((data:any)=>{
      this.router.navigate(['/cursos']);
    })
    
  };
}
