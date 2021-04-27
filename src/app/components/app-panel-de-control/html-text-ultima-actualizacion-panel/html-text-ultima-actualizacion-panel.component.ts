import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-text-ultima-actualizacion-panel',
  templateUrl: './html-text-ultima-actualizacion-panel.component.html',
  styleUrls: ['./html-text-ultima-actualizacion-panel.component.css']
})
export class HtmlTextUltimaActualizacionPanelComponent implements OnInit {
  curdate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
