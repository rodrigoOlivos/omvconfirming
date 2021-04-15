import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    }
    console.log('this.isLoggedIn');
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      this.router.navigate(['inicio']);
    }
  }

  onSubmit(): void {
    const { rutempresa, rutpersona, password } = this.form;
    this.authService.login(rutempresa, rutpersona, password).subscribe(
      data => {
        // this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveToken(data.id);
        this.tokenStorage.saveUser(data);

        this.cookieService.set('token_access', data.id, 4, '/');

        console.log('login2 OK');
        console.log(data.id);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
        this.router.navigate(['inicio']);
      },
      err => {
        this.errorMessage = err.error.message;
        console.log('login2 NO OK');
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
