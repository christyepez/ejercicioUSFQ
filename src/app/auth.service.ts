import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from './interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl: string = 'http://localhost:5000/api/Users/';
  constructor(
    private http: HttpClient,
    private route: Router

  ) { }

  register(user:UserInterface){
    return this.http.post(this.baseurl+'Register',user);
  }

  login(user:UserInterface){
    return this.http.post(this.baseurl+'Login',user);
  }

  get getUserName(){
    return localStorage.getItem('userName');
  }

  get isAutenticado(){
    return !!localStorage.getItem('token_value');
  }

  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
    this.route.navigate(['/login']);
    window.location.reload();
  }
}
