import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) {}
  

  cargarUsers(){
    const url='http://localhost:5000/api/usuario/';
    return this.http.get(url);
  }
}
