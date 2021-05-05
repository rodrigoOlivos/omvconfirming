import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costo-fondo',
  templateUrl: './costo-fondo.component.html',
  styleUrls: ['./costo-fondo.component.css']
})
export class CostoFondoComponent implements OnInit {
  dtOptions: any;
  dtEditor: any;
  edicionTabla = false;
  monedaActual = '1';

  constructor() { }

  ngOnInit(): void {
  }

}
