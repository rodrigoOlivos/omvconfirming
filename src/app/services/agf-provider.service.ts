import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

const API_AGF = 'http://52.60.210.85:8080/omvagf';

@Injectable({
  providedIn: 'root'
})
export class AgfProviderService {

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  getDataf29(
    idTipoTabla: number,
    idTipoMoneda: number
  ): Observable<any> {
    const cookieToken = this.cookieService.get('token_access');
    return this.http.get(API_AGF + '/api/f29/' + idTipoTabla + '/' + idTipoMoneda, {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
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
    const bodyF30 = {
      idTipoMatriz: idTipoMat,
      idRol: idRoll,
      cantidadRangosMontos: cantRangoMontos,
      cantidadRangosPlazos: cantRangoPlazos,
      moneda: idTipoMoneda,
      arrayOfRow301: {
        row301: arrayRangoMontos
      },
      arrayOfRow302: {
        row302: arrayRangoPlazos
      }
    };
    console.log('bodyF30');
    console.log(bodyF30);
    console.log(JSON.stringify(bodyF30));
    const cookieToken = this.cookieService.get('token_access');
    return this.http.post(API_AGF + '/api/f30/', bodyF30, {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
  }

  getDataf31(
    idTipoTabla: number,
    idTipoMoneda: number
  ): Observable<any> {
    const cookieToken = this.cookieService.get('token_access');
    return this.http.get(API_AGF + '/api/f31/' + idTipoTabla + '/' + idTipoMoneda, {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
  }

  getDataf32(
    idTipoTabla: number,
    idComprador: number,
    idProveedor: number,
    idTipoMoneda: number
  ): Observable<any> {
    const cookieToken = this.cookieService.get('token_access');
    return this.http.get(API_AGF + '/api/f32/' + idTipoTabla + '/' + idComprador + '/' + idProveedor + '/' + idTipoMoneda, {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
  }

  getDataf33(
    idTipoMat: number,
    idTipoMoneda: number,
    idComprador: number,
    idProveedor: number,
    arrayCostoFondo: any[]
  ): Observable<any> {
    const cookieToken = this.cookieService.get('token_access');
    const bodyF33 = {
      idTipoMatriz: idTipoMat,
      moneda: idTipoMoneda,
      idCmp: idComprador,
      idPrv: idProveedor,
      arrayOfRow33: {
        row33: arrayCostoFondo
      }
    };
    return this.http.post(API_AGF + '/api/f33/', bodyF33, {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
  }

  getDataF58():Observable<any> {
    const cookieToken = this.cookieService.get('token_access');
    return this.http.post(API_AGF + '/api/f58/', null, {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
  }

  getDataf71( ): Observable<any> {
    const cookieToken = this.cookieService.get('token_access');
    return this.http.get(API_AGF + '/api/f71/', {
      headers: {
        'Set-Header-Api': cookieToken
      }, observe: 'body'
    });
  }

}
