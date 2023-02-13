import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { map } from 'rxjs/operators';
import { LoginResponse } from './login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  errorMessage: string | undefined;
  successMessage: string | undefined ;


  username: string | undefined;
  password: string | undefined;

  constructor(private http: HttpClient) {}

  login() {
    const body = { username: this.username, password: this.password };
  //  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<LoginResponse>('http://localhost:5000/api/usuario/login', body)
    .subscribe(response => {
      console.log(response.success);
      console.log(response.message);
      alert(response.message);
    });

  /* constructor(private loginService:LoginService ){}

  ngOnInit(): void{
    this.loginService.cargarUsers().subscribe(resp => {
       console.log(resp);
    });
  } */
 
}

}