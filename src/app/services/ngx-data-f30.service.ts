import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

const API_F30 = 'http://52.60.210.85:8080/omvagf/api/f30/';

@Injectable({
  providedIn: 'root'
})
export class NgxDataF30Service {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  getDataf30(
    idTipoMat: number,
    idRoll: number,
    cantRangoMontos: number,
    cantRangoPlazos: number,
    idTipoMoneda: number,
    arrayRangoPlazos: any[],
    arrayRangoMontos: any[]
  ): Observable<any> {
    console.log('consumo getDataf30');
    const bodyF30 = {
      idTipoMatriz: idTipoMat,
      idRol: idRoll,
      cantidadRangosMontos: cantRangoMontos,
      cantidadRangosPlazos: cantRangoPlazos,
      moneda: idTipoMoneda,
      arrayOfRow301: {
        row301: arrayRangoPlazos
      },
      arrayOfRow302: {
        row302: arrayRangoMontos
      }
    };
    const cookieToken = this.cookieService.get('token_access');
    return this.http.post(API_F30, bodyF30, {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
  }

}
