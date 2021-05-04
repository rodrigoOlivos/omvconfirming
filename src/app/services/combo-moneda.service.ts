import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import {CookieService} from 'ngx-cookie-service';

const API_TRAE_MONEDAS = 'http://52.60.210.85:8080/omvagf/api/trae-monedas/';

@Injectable({
  providedIn: 'root'
})

export class ComboMonedaService {
  private moneda = new Subject<any>();
  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  getComboMonedaHttp(): Observable<any> {
    const cookieToken = this.cookieService.get('token_access');
    return this.http.get(API_TRAE_MONEDAS, {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
  }

  getComboMoneda(): any {
    return [
      {id: '1', name: 'Cl Peso'},
      {id: '2', name: 'US Dolar'},
      {id: '3', name: 'Aus Dolar'},
      {id: '4', name: 'Mx Peso'}
    ];
  }

  sendMoneda(){
    this.moneda.next();
  }
  getMonedaEvent():Observable<any>{
    return this.moneda.asObservable();
  }
}
