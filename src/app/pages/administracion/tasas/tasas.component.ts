import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
@Component({
  selector: 'app-tasas',
  templateUrl: './tasas.component.html',
  styleUrls: ['./tasas.component.css']
})
export class TasasComponent implements OnInit {
  dtOptions: any;
  dtEditor: any;
  edicionTabla = false;

  constructor() { }

  ngOnInit(): void {
  }

}
