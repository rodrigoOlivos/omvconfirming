import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

const API_F33 = 'http://52.60.210.85:8080/omvagf/api/f33/';

@Injectable({
  providedIn: 'root'
})
export class NgxDataF33Service {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  getDataf33(idTipoMat: number, idTipoMoneda: number, idComprador: number, idProveedor: number, arrayCostoFondo: any[]): Observable<any> {
    const cookieToken = this.cookieService.get('token_access');
    return this.http.post(API_F33, {
      IdTipoMatriz: idTipoMat,
      Moneda: idTipoMoneda,
      IdCmp: idComprador,
      IdPrv: idProveedor,
      ArrayOfRow33: arrayCostoFondo
    }, {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
  }

}
