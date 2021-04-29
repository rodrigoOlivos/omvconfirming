import {Component, OnInit, Output} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-title-layout',
  templateUrl: './title-layout.component.html',
  styleUrls: ['./title-layout.component.css']
})
export class TitleLayoutComponent implements OnInit {
  role = '';
  private roles: string[] = [];
  isLoggedIn = false;
  inicioBoard = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showDashboard = false;
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
      this.role = user.role;
      this.roles = user.roles;

      if (user.role === 'ROL_ADMIN') {
        this.showDashboard = true;
      }
      if (user.role === 'ROL_USER') {
        this.showAll = true;
      }
      this.showAdminBoard = false; // this.role.includes('ROLE_ADMIN');
      this.showModeratorBoard = false; // this.role.includes('ROLE_MODERATOR');

      // this.username = user.username;
      this.rutempresa = user.rutEmpresa;
      this.rutpersona = user.rutUsuario;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.cookieService.delete('token_access');
  }
}
