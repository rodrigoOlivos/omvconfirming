import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

// const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'http://52.60.210.85:8080/omvagf/usuarios/f01/';
// const AUTH_API = 'https://app.fakejson.com/q';
// const AUTH_API = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(rutEmp: string, rutPer: string, pass: string): Observable<any> {
    // return this.http.post(AUTH_API + 'signin', {

    return this.http
      .post(AUTH_API, {
        empresa: rutEmp,
        usuario: rutPer,
        password: pass
        // auth: '1', // 0
        // role: 'ROL_ADMIN' // 'ROL_USER'
      }, {
        observe: 'response'
      });
  }

  register(rutempresa: string, rutpersona: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      rutempresa,
      rutpersona,
      password
    });
  }
}
