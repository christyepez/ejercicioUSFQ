import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { CursoInterface } from '../interfaces/CursoInterfaces';
@Injectable({
  providedIn: 'root'
})



export class CursoService {
  baseurl: string = 'https://localhost:44397/api/Curso/';
  constructor(private http: HttpClient){

  }


  getCursos(){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.get(this.baseurl,{headers : headers});
  }

  getCurso(id:number){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.get(this.baseurl+id,{headers : headers});
  }

  crearCurso(curso:CursoInterface){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.post(this.baseurl, curso);

  }

  actualizarCurso (id:number, curso:CursoInterface)
  {
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.put(this.baseurl+id, curso);
  }

  deleteCurso(id:number){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })
    
    return this.http.delete(this.baseurl+id,{headers : headers});
  }
  
}
