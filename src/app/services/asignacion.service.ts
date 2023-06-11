import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { AsignacionInterface } from '../interfaces/AsignacionInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  baseurl: string = 'https://localhost:44397/api/Asignacion/';
  constructor(private http: HttpClient){

  }


  getAsignaciones(){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.get(this.baseurl,{headers : headers});
  }

  getAsignacion(id:number){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.get(this.baseurl+id,{headers : headers});
  }

  crearAsignacion(asignacion:AsignacionInterface){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.post(this.baseurl, asignacion);

  }

  actualizarAsignacion (id:number, asignacion:AsignacionInterface)
  {
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.put(this.baseurl+id, asignacion);
  }

  deleteAsignacion(id:number){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })
    
    return this.http.delete(this.baseurl+id,{headers : headers});
  }
  
}
