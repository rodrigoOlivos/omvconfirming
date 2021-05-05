import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../services/token-storage.service';

@Component({
  selector: 'app-html-label-fechaactualizacion',
  templateUrl: './html-label-fechaactualizacion.component.html',
  styleUrls: ['./html-label-fechaactualizacion.component.css']
})
export class HtmlLabelFechaactualizacionComponent implements OnInit {
  curdate = new Date();
  isLoggedIn = false;
  timestamp: any;

  constructor(private tokenStorageService: TokenStorageService) {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser().body;
      this.timestamp = user.timestamp;
    }
  }

  ngOnInit(): void {
  }

}
