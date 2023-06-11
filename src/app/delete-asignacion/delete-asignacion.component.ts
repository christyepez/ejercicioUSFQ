import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignacionService } from '../services/asignacion.service';

@Component({
  selector: 'app-delete-asignacion',
  templateUrl: './delete-asignacion.component.html',
  styleUrls: ['./delete-asignacion.component.css']
})
export class DeleteAsignacionComponent implements OnInit {

  id:any;
  asignacion= {
    fechaRegistro: '',
    estudianteId:'',
    cursoId: ''
    
  }

  constructor(
    private service:AsignacionService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getAsignacion(this.id).subscribe((data:any)=> {
      console.log(data);
      this.asignacion.fechaRegistro = data.result.fechaRegistro;
      this.asignacion.estudianteId = data.result.estudianteId; 
      this.asignacion.cursoId = data.result.cursoId;
      
    })
  }

  cancel(){
    this.router.navigate(['/asignacion']);
  };
  confirmar(){
      this.service.deleteAsignacion(this.id).subscribe((data:any)=>{
      this.router.navigate(['/asignacion']);
    })
    
  };
}
