import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { EstudianteInterface } from '../interfaces/EstudianteInterfaces';
@Injectable({
  providedIn: 'root'
})


export class EstudianteService {
  baseurl: string = 'https://localhost:44397/api/Estudiante/';
  constructor(private http: HttpClient){

  }


  getEstudiantes(){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.get(this.baseurl,{headers : headers});
  }

  getEstudiante(id:number){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.get(this.baseurl+id,{headers : headers});
  }

  crearEstudiante(estudiante:EstudianteInterface){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.post(this.baseurl, estudiante);

  }

  actualizarEstudiante (id:number, estudiante:EstudianteInterface)
  {
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.put(this.baseurl+id, estudiante);
  }

  deleteEstudiante(id:number){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })
    
    return this.http.delete(this.baseurl+id,{headers : headers});
  }
  
}
