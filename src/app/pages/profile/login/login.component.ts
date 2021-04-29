import {CookieService} from 'ngx-cookie-service';
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {TokenStorageService} from '../../../services/token-storage.service';
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
  role = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private cookieService: CookieService,
              private router: Router,
              // private formBuilder: FormBuilder
  ) {
    // rutempresa: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    // rutpersona: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    // clave:      new FormControl(null, [Validators.required, Validators.minLength(3)]),
  }

  ngOnInit(): void {
    console.log('this.tokenStorage.getToken()');
    console.log(this.tokenStorage.getToken());
    if (this.tokenStorage.getToken()) { // token 201
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
      this.roles = this.tokenStorage.getUser().roles;
      console.log('this.tokenStorage.getUser().role');
      console.log(this.tokenStorage.getUser().role);
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
    const {rutempresa, rutpersona, password} = this.form;
    this.authService.login(rutempresa, rutpersona, password).subscribe(
      data => {
        // this.tokenStorage.saveToken(data.accessToken);
        console.log(data);
        const setHeaderApi = data.headers.get('set-header-api');

        this.tokenStorage.saveToken(data.idPersona);
        this.tokenStorage.saveUser(data);

        this.cookieService.set('token_access', setHeaderApi, 1, '/');

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().role;
        this.router.navigate(['inicio']);
      },
      err => {
        this.showErrorCredenciales = true;
        this.errorMessage = err.error.message;
        console.log('login NO OK');
        this.isLoginFailed = true;
      }
    );
    // this.submitted = true;
    // if (this.reactiveForm.invalid) {
    //   return;
    // }
    //
    // if (this.reactiveForm.value.rutempresa === '123' &&
    //   this.reactiveForm.value.rutpersona === '123' &&
    //   this.reactiveForm.value.clave === '123'
    // ) {
    //   this.router.navigate(['/inicio']);
    // }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
