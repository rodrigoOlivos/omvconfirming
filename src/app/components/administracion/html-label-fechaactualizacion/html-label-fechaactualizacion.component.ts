import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-label-fechaactualizacion',
  templateUrl: './html-label-fechaactualizacion.component.html',
  styleUrls: ['./html-label-fechaactualizacion.component.css']
})
export class HtmlLabelFechaactualizacionComponent implements OnInit {
  curdate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
