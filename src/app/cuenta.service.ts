import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CuentaInterface } from './interfaces/CuentasInterface';
@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  baseurl: string = 'http://localhost:5000/api/Cuentas/';
  constructor(private http: HttpClient){

  }


  getcuentas(){
    return this.http.get(this.baseurl);
  }


  getcuenta(id:number){
    return this.http.get(this.baseurl+id);
  }

  crearcuenta(cuenta:CuentaInterface){

    return this.http.post(this.baseurl, cuenta);

  }

  actualizarCuenta (id:number, cuenta:CuentaInterface)
  {
    return this.http.put(this.baseurl+id, cuenta);
  }

  
  deletecCuenta(id:number){
    return this.http.delete(this.baseurl+id);
  }
 
}
