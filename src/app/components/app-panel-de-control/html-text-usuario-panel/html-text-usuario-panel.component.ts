import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../services/token-storage.service';

@Component({
  selector: 'app-html-text-usuario-panel',
  templateUrl: './html-text-usuario-panel.component.html',
  styleUrls: ['./html-text-usuario-panel.component.css']
})
export class HtmlTextUsuarioPanelComponent implements OnInit {
  isLoggedIn = false;
  rutempresa: any;
  rutpersona: any;

  constructor(private tokenStorageService: TokenStorageService) {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.rutempresa = user.rutempresa;
      this.rutpersona = user.rutpersona;
    }
  }

  ngOnInit(): void {
  }

}
