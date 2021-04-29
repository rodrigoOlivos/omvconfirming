import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

// const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'http://52.60.210.85:8080/omvagf/usuarios/f01/';
// const AUTH_API = 'https://app.fakejson.com/q';
// const AUTH_API = 'https://jsonplaceholder.typicode.com/todos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(rutEmp: string, rutPer: string, pass: string): Observable<any> {
    // return this.http.post(AUTH_API + 'signin', {

    // el siguiente if no debe ir, debe ser la respuesta del api-server
    if (rutEmp === '123' && rutPer === '123' && pass === '123') {

      // this.http
      //   .get('/data.json', {observe: 'response'})
      //   .subscribe(resp => {
      //     // Here, resp is of type HttpResponse<MyJsonData>.
      //     // You can inspect its headers:
      //     console.log(resp.headers.get('X-Custom-Header'));
      //     // And access the body directly, which is typed as MyJsonData as requested.
      //     console.log(resp.body.someField);
      //   });


      return this.http
        .post<any>(AUTH_API, {
          empresa: '966558601', // empresa ok
          usuario: '19',
          password: 'cat1501'
          // auth: '1', // 0
          // role: 'ROL_ADMIN' // 'ROL_USER'
        }, httpOptions)
      //
      //   // .subscribe(data => {
      //   //   this.postId = data.id;
      //   // })
        ;
      // this.http
      //   .get<any>('url', {observe: 'response'})
      //   .subscribe(resp => {
      //     console.log(resp.headers.get('X-Token'));
      //   });

    } else if (rutEmp === '1234' && rutPer === '1234' && pass === '1234') {
      return this.http.post(AUTH_API, {
        empresa: '966558601', // empresa ok
        usuario: '19',
        password: 'cat1501'
        // auth: '1', // 0
        // role: 'ROL_ADMIN' // 'ROL_USER'
      }, httpOptions);
    } else {
      return this.http.post(AUTH_API, {
        empresa: '19', // empresa NO ok
        usuario: '19',
        password: 'cat1501'
        // auth: '1', // 0
        // role: 'ROL_ADMIN' // 'ROL_USER'
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
