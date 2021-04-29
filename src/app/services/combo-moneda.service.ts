import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://52.60.210.85:8080/omvagf/api/trae-monedas/';

@Injectable({
  providedIn: 'root'
})

export class ComboMonedaService {

  constructor(private http: HttpClient) { }

  getComboMonedaHttp(): Observable<any> {
    const ssss = this.http
      .get(AUTH_API, {

      });
    return ssss;
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
