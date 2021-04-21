import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showErrorCredenciales = false;
  form: any = {
    rutempresa: null,
    rutpersona: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private cookieService: CookieService,
              private router: Router
  ) { }

  ngOnInit(): void {
    console.log('this.tokenStorage.getToken()');
    console.log(this.tokenStorage.getToken());
    if (this.tokenStorage.getToken()) { // token 201
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      console.log('this.tokenStorage.getUser().roles');
      console.log(this.tokenStorage.getUser().roles);
    }
    console.log('this.isLoggedIn');
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      console.log('entra');
      this.router.navigate(['inicio']);
    }
    // alert(1);
  }

  onSubmit(): void {
    const { rutempresa, rutpersona, password } = this.form;
    // esta condición debe no debe ir, debe ser la respuesta del servicio api, si es que este usuario puede ingresar o no a la plataforma
    if ((
      rutempresa === '123' &&
      rutpersona === '123' &&
      password === '123'
    ) || (
      rutempresa === '1234' &&
      rutpersona === '1234' &&
      password === '1234'
    )) {
      console.log(rutempresa);
      console.log('valida pass 123');
      this.authService.login(rutempresa, rutpersona, password).subscribe(
        data => {
          // this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveToken(data.id);
          this.tokenStorage.saveUser(data);

          this.cookieService.set('token_access', data.id, 4, '/');

          console.log('login OK');
          console.log(data.id);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          // this.roles = this.tokenStorage.getUser().roles;
          this.roles = this.tokenStorage.getUser().rutempresa;
          console.log('this.tokenStorage.getUser().roles');
          console.log(this.roles);
          // alert(1);
          // this.reloadPage();
          this.router.navigate(['inicio']);
        },
        err => {
          this.errorMessage = err.error.message;
          console.log('login NO OK');
          this.isLoginFailed = true;
        }
      );
    } else {
      console.log(rutempresa);
      console.log(rutpersona);
      console.log(password);
      this.showErrorCredenciales = true;
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
