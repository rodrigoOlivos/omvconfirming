import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// import { HttpHeaders } from '@angular/common/http';

const AUTH_API = 'http://52.60.210.85:8080/omvagf/api/trae-monedas/';

@Injectable({
  providedIn: 'root'
})

export class ComboMonedaService {

  constructor(private http: HttpClient) { }

  getComboMonedaHttp(): Observable<any> {
    const headerDict = {
      'set-header-api': 'JSESSIONID=742219A4BF35F4EFC667A6FDFF72668F; Path=/agf.ws; Secure; HttpOnly',
      'Set-Header-API': 'JSESSIONID=742219A4BF35F4EFC667A6FDFF72668F; Path=/agf.ws; Secure; HttpOnly',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    const options = {
      headers: new HttpHeaders(headerDict)
    };

    // const headers = new HttpHeaders();
    // headers.set(
    //   'set-header-api', 'JSESSIONID=742219A4BF35F4EFC667A6FDFF72668F; Path=/agf.ws; Secure; HttpOnly'
    // ).set(
    //   'Set-Header-API', 'JSESSIONID=742219A4BF35F4EFC667A6FDFF72668F; Path=/agf.ws; Secure; HttpOnly'
    // );

    const respMoneda = this.http.get(AUTH_API, {
      observe: 'response' as 'body'
    });

    // alert('sddd');
    console.log('respMoneda');
    console.log(respMoneda);
    return respMoneda;

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
