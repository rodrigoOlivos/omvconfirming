// import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
// import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
// import { BsModalService } from 'ngx-bootstrap/modal';

import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-layout-session-out',
  templateUrl: './layout-session-out.component.html',
  styleUrls: ['./layout-session-out.component.css']
})
export class LayoutSessionOutComponent implements OnInit {

  nombreLabelDefecto = 'Advertencia';
  nombreTextoDefecto = 'Sesión Inválida: Su sesión ha sido invalidada, ingrese nuevamente.';

  // $('#modalLabel').text('show1');
  // $('#modalTexto').text('texto');

  constructor() {
  }

  ngOnInit(): void {
  }

}
