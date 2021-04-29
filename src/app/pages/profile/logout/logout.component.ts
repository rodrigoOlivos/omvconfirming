import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../services/token-storage.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,
              private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.cookieService.delete('token_access');
  }

}
