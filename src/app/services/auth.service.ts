import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

// const API_AUTH = 'http://localhost:8080/api/auth/';
const API_AUTH = 'http://52.60.210.85:8080/omvagf/usuarios/f01/';
// const API_AUTH = 'https://app.fakejson.com/q';
// const API_AUTH = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(rutEmp: string, rutPer: string, pass: string): Observable<any> {
    // return this.http.post(API_AUTH + 'signin', {

    return this.http
      .post(API_AUTH, {
        empresa: 966558601,
        usuario: rutPer,
        password: pass
        // auth: '1', // 0
        // role: 'ROL_ADMIN' // 'ROL_USER'
      }, {
        observe: 'response'
      });
  }

  register(rutempresa: string, rutpersona: string, password: string): Observable<any> {
    return this.http.post(API_AUTH + 'signup', {
      rutempresa,
      rutpersona,
      password
    });
  }
}
