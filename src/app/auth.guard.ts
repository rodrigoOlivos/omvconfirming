import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {TokenStorageService} from './services/token-storage.service';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private tokenStorageService: TokenStorageService,
              private cookieService: CookieService,
              private router: Router) {
  }

  redirect(flag: boolean): any {
    if (!flag) {
      // alert(3);
      this.router.navigate(['/', 'login']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie = this.cookieService.check('token_access'); // si existe token_access
    const user = this.tokenStorageService.getUser();
    // alert(cookie);

    // esto no deben ir, deben ser reeplazado por lo que responde el server api (this.roles.includes('ROLE_ADMIN');)

      // const array1 = [
      //   '/inicio',
      //   '/dashboard',
      //   '/tasas',
      //   '/panel',
      //   '/alta',
      //   '/nominas',
      //   '/recaudacion-cobranza',
      //   '/ofertas-rechazadas',
      //   '/ofertas-pendientes',
      //   '/ofertas-por-proveedor',
      //   '/tipo-cambio',
      //   '/admin-usuarios'
      // ];

    if (user.role === 'ROL_USER') { // perfil muestra dash y usuarios
      const array1 = [
        '/inicio', // inicio redirige a dashboard
        '/dashboard',
        '/admin-usuarios'
      ];
      if (array1.indexOf(state.url) < 0) {
        this.redirect(false);
        return false;
      } else {
        this.redirect(true);
        return true;
      }
    } else {
      // return this.checkUserLogin(route, state.url);
      this.redirect(cookie); // genera la redirección
      return cookie;
    }

  }

  // checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
  //   if (this.authService.isLoggedIn()) {
  //     const userRole = this.authService.getRole();
  //     if (route.data.role && route.data.role.indexOf(userRole) === -1) {
  //       this.router.navigate(['/home']);
  //       return false;
  //     }
  //     return true;
  //   }
  //
  //   this.router.navigate(['/home']);
  //   return false;
  // }

}
