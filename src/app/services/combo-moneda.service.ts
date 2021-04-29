import {HTTP_INTERCEPTORS, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthInterceptor} from '../helpers/auth.interceptor';
import {TokenStorageService} from './token-storage.service';

import {CookieService} from 'ngx-cookie-service';

const API_TRAE_MONEDAS = 'http://52.60.210.85:8080/omvagf/api/trae-monedas/';

@Injectable({
  providedIn: 'root'
})

export class ComboMonedaService {

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

}
