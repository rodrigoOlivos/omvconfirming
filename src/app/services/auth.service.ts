import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'https://app.fakejson.com/q';
// const AUTH_API = 'https://jsonplaceholder.typicode.com/todos';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(rute: string, rutp: string, pass2: string): Observable<any> {
    // return this.http.post(AUTH_API + 'signin', {

    // el siguiente if no debe ir, debe ser la respuesta del api-server
    if (rute === '123' && rutp === '123' && pass2 === '123') {
      return this.http.post(AUTH_API, {
        token: 'vmFlsNbNcd-k1d7pv916uA',
        data: {
          nombre: 'algo',
          rutempresa: rute,
          rutpersona: rutp,
          pass: pass2,
          auth: '1',
          role: 'ROL_ADMIN'
        }
      }, httpOptions);
    } else if (rute === '1234' && rutp === '1234' && pass2 === '1234') {
      return this.http.post(AUTH_API, {
        token: 'vmFlsNbNcd-k1d7pv916uA',
        data: {
          nombre: 'algo',
          rutempresa: rute,
          rutpersona: rutp,
          pass: pass2,
          auth: '1',
          role: 'ROL_USER'
        }
      }, httpOptions);
    } else {
      return this.http.post(AUTH_API, {
        token: 'vmFlsNbNcd-k1d7pv916uA',
        data: {
          nombre: 'algo',
          rutempresa: rute,
          rutpersona: rutp,
          pass: pass2,
          auth: '0',
          role: null
        }
      }, httpOptions);
    }
  }

  register(rutempresa: string, rutpersona: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      rutempresa,
      rutpersona,
      password
    }, httpOptions);
  }
}
