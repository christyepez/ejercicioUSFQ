import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
loginData= {
  userName:'',
  password:''

}
  constructor(
    private service:AuthService,
    private route:Router
  ) { }

  login(){
    this.service.login(this.loginData).subscribe((data: any) => {
      localStorage.setItem('userName',data.result.userName);
      localStorage.setItem('token_value',data.result.token);
      this.route.navigate(['/estudiantes'])
    },
    (errorData)=> alert(errorData.error.displayMessage)
    );
  }

}
