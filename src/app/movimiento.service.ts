import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { MovimientoInterface } from './interfaces/MovimientoInterface';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {
     baseurl: string = 'http://localhost:5000/api/Movimientos/';
    constructor(private http: HttpClient){
  
    }
  
  
    getmovimientos(){
      return this.http.get(this.baseurl);
    }

    
    getmovimiento(id:number){
      return this.http.get(this.baseurl+id);
    }

    crearmovimiento(movimiento:MovimientoInterface){

      return this.http.post(this.baseurl, movimiento);
  
    }

    
  deleteMovimiento(id:number){
    return this.http.delete(this.baseurl+id);
  }
    
  actualizarMovimiento (id:number, movimiento:MovimientoInterface)
  {
    return this.http.put(this.baseurl+id, movimiento);
  }
   
  }
  