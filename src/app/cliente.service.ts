import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { ClienteInterface } from './interfaces/ClienteInterfaces';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseurl: string = 'http://localhost:5000/api/Clientes/';
  constructor(private http: HttpClient){

  }


  getclientes(){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.get(this.baseurl,{headers : headers});
  }

  getcliente(id:number){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.get(this.baseurl+id,{headers : headers});
  }

  crearcliente(cliente:ClienteInterface){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.post(this.baseurl, cliente);

  }

  actualizarCliente (id:number, cliente:ClienteInterface)
  {
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })

    return this.http.put(this.baseurl+id, cliente);
  }

  deletecliente(id:number){
    let aut_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'appliaction/json',
      'Authorization':'Bearer ${auth_token}'
    })
    
    return this.http.delete(this.baseurl+id,{headers : headers});
  }
  
}
