import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  inicioBoard = false;

  showAdminBoard = false;
  showModeratorBoard = false;

  showDashboard = false;
  showAdministracion = false;
  showOperaciones = false;
  showConsulta = false;
  showIndicadores = false;
  showUsuarios = false;

  showAll = false;
  username?: string;
  rutempresa?: string;
  rutpersona?: string;

  constructor(private tokenStorageService: TokenStorageService,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      console.log('RRRRRRRRRRRRROLES-NAV');
      console.log(user);
      this.roles = user.roles;
      console.log(user.roles);

      // estas condiciones no deben ir, deben ser reeplazadas por lo que responde el server api (this.roles.includes('ROLE_ADMIN');)
      if (user.rutempresa === '123') { // muestra todas las navbar
        this.showDashboard = true;   // this.showDashboard = this.roles.includes('ROLE_ADMIN');
        this.showAdministracion = true; // this.roles.includes('ROLE_ADMIN');
        this.showOperaciones = true; // this.roles.includes('ROLE_ADMIN');
        this.showConsulta = true;    // this.roles.includes('ROLE_ADMIN');
        this.showIndicadores = true; // this.roles.includes('ROLE_ADMIN');
        this.showUsuarios = true;    // this.roles.includes('ROLE_ADMIN');
      }
      if (user.rutempresa === '1234') { // muestra dash y usuarios
        this.showDashboard = true; // this.showDashboard = this.roles.includes('ROLE_ADMIN');
        this.showUsuarios = true;  // this.roles.includes('ROLE_ADMIN');

        this.showAll = true;
      }
      this.showAdminBoard = false; // this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = false; // this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      this.rutempresa = user.rutempresa;
      this.rutpersona = user.rutpersona;
    }
  }

}
