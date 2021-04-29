import {HTTP_INTERCEPTORS, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthInterceptor} from '../helpers/auth.interceptor';

const TRAE_MONEDAS_API = 'http://52.60.210.85:8080/omvagf/api/trae-monedas/';

@Injectable({
  providedIn: 'root'
})

export class ComboMonedaService {

  constructor(private http: HttpClient) {
  }

  getComboMonedaHttp(): Observable<any> {
    const ssss = this.http
      .get(TRAE_MONEDAS_API, {

      });
    console.log('hola2');
    // console.log(ssss);

    return ssss;

    // const headerDict = {
    //   'set-header-api': 'JSESSIONID=742219A4BF35F4EFC667A6FDFF72668F; Path=/agf.ws; Secure; HttpOnly',
    //   'Set-Header-API': 'JSESSIONID=742219A4BF35F4EFC667A6FDFF72668F; Path=/agf.ws; Secure; HttpOnly',
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    // };
    //
    // const options = {
    //   headers: new HttpHeaders(headerDict)
    // };

    ///////////////////////////////////////////////////

    // const headers = new HttpHeaders();
    // headers.set(
    //   'set-header-api', 'JSESSIONID=742219A4BF35F4EFC667A6FDFF72668F; Path=/agf.ws; Secure; HttpOnly'
    // ).set(
    //   'Set-Header-API', 'JSESSIONID=742219A4BF35F4EFC667A6FDFF72668F; Path=/agf.ws; Secure; HttpOnly'
    // );

    // const respMoneda = this.http.get(AUTH_API, {
    //   observe: 'response' as 'body'
    // });
    //
    // console.log('respMoneda');
    // console.log(respMoneda);
    // return respMoneda;

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'set-header-api': 'JSESSIONID=742219A4BF35F4EFC667A6FDFF72668F; Path=/agf.ws; Secure; HttpOnly'
  //     })
  //   };
  //
  //   const respMoneda = this.http
  //     .get(AUTH_API, {
  //     }, httpOptions);
  //   console.log(respMoneda);
  //   return respMoneda;
  }

  getComboMoneda(): any {
    return [
      {id: '1', name: 'Cl Peso'},
      {id: '2', name: 'US Dolar'},
      {id: '3', name: 'Aus Dolar'},
      {id: '4', name: 'Mx Peso'}
    ];
  }

}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
