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
  username?: string;

  constructor(private tokenStorageService: TokenStorageService,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.cookieService.delete('token_access');
  }
}
