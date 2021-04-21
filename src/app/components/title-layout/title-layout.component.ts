import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-title-layout',
  templateUrl: './title-layout.component.html',
  styleUrls: ['./title-layout.component.css']
})
export class TitleLayoutComponent implements OnInit {
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
      console.log('RRRRRRRRRRRRROLES-TITLE');
      console.log(user);
      this.roles = user.roles;
      console.log(user.roles);

      if (user.rutempresa === '123') {
        this.showDashboard = true;
      }
      if (user.rutempresa === '1234') {
        this.showAll = true;
      }
      this.showAdminBoard = false; // this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = false; // this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      this.rutempresa = user.rutempresa;
      this.rutpersona = user.rutpersona;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.cookieService.delete('token_access');
  }
}
