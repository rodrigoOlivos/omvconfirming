import {HTTP_INTERCEPTORS, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import {TokenStorageService} from '../services/token-storage.service';
import {Observable} from 'rxjs';

import {CookieService} from 'ngx-cookie-service';

const TOKEN_HEADER_KEY = 'set-header-api';
// const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end
// const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService,
              private cookieService: CookieService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('auth.interceptor');
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      // for Spring Boot back-end
      const cookieToken = this.cookieService.get('token_access');
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, cookieToken)});

      // for Node.js Express back-end
      // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
