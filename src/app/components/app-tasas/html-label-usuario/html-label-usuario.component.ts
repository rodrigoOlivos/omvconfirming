import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../services/token-storage.service';

@Component({
  selector: 'app-html-label-usuario',
  templateUrl: './html-label-usuario.component.html',
  styleUrls: ['./html-label-usuario.component.css']
})
export class HtmlLabelUsuarioComponent implements OnInit {
  isLoggedIn = false;
   rutempresa: any;
   rutpersona: any;

  constructor(private tokenStorageService: TokenStorageService) {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser().body;
      this.rutempresa = user.rutEmpresa;
      this.rutpersona = user.rutUsuario;
    }
  }

  ngOnInit(): void {
  }

}
