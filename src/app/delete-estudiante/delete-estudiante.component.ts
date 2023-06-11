import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from '../services/estudiante.service';


@Component({
  selector: 'app-delete-estudiante',
  templateUrl: './delete-estudiante.component.html',
  styleUrls: ['./delete-estudiante.component.css']
})
export class DeleteEstudianteComponent implements OnInit {

  id:any;
  estudiante= {
    cedula: '',
    nombre: '',
    apellido:'',
    edad:''
  }

  constructor(
    private service:EstudianteService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getEstudiante(this.id).subscribe((data:any)=> {
      console.log(data);
      this.estudiante.cedula = data.result.cedula;
      this.estudiante.nombre = data.result.nombre;
      this.estudiante.apellido = data.result.apellido;
      this.estudiante.edad = data.result.edad;
    })
  }

  cancel(){
    this.router.navigate(['/estudiantes']);
  };
  confirmar(){
      this.service.deleteEstudiante(this.id).subscribe((data:any)=>{
      this.router.navigate(['/estudiantes']);
    })
    
  };
}
