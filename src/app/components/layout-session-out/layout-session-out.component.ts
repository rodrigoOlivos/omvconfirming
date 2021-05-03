// import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
// import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
// import { BsModalService } from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-layout-session-out',
  templateUrl: './layout-session-out.component.html',
  styleUrls: ['./layout-session-out.component.css']
})
export class LayoutSessionOutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // @ts-ignore
  }

  // // @ViewChild('template') templateRef: TemplateRef<any>;
  // @ViewChild('content', {static: false}) private content;
  //
  // constructor(private modalService: NgbModal) {
  // }
  //
  // closeResult = '';
  //
  // private static getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
  //
  // ngOnInit(): void {
  //   this.open(this.content);
  //   // this.open(content);
  // }
  //
  // // ngOnChanges(changes: any) {
  // //   this.open(this.content);
  // // }
  //
  // open(content: any): void {
  //   let options: NgbModalOptions = {
  //     size: 'lg'
  //   };
  //
  //   this.modalService.open(content, options);
  //   console.log(content);
  //   // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //   //   this.closeResult = `Closed with: ${result}`;
  //   //   console.log(this.closeResult);
  //   // }, (reason) => {
  //   //   this.closeResult = `Dismissed ${LayoutSessionOutComponent.getDismissReason(reason)}`;
  //   //   console.log(this.closeResult);
  //   // });
  // }

}
