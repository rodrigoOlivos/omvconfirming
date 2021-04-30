import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

const API_F31 = 'http://52.60.210.85:8080/omvagf/api/f31/';

@Injectable({
  providedIn: 'root'
})

export class NgxDataF31Service {
  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  getDataf31(idTipoTabla: number, idTipoMoneda: number ): Observable<any> {
    const cookieToken = this.cookieService.get('token_access');
    return this.http.get(API_F31 + idTipoTabla + '/' + idTipoMoneda, {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
  }

}
