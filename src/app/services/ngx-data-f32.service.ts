import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

const API_F32 = 'http://52.60.210.85:8080/omvagf/api/f32/';

@Injectable({
  providedIn: 'root'
})

export class NgxDataF32Service {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  // http://${servidor}/api/f32/12/0/0/1
  getDataf32(idTipoTabla: number, idComprador: number, idProveedor: number, idTipoMoneda: number ): Observable<any> {
    const cookieToken = this.cookieService.get('token_access');
    return this.http.get(API_F32 + '/' + idTipoTabla + '/' + idComprador + '/' + idProveedor + '/' + idTipoMoneda, {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
  }

}
