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

  constructor() { }

  ngOnInit(): void {
    const tableM: any = ($.fn.dataTable as any);

    $('#tablatasas tbody').on('click', 'tr', () => {
      let data: any;
      data = tableM.row(this).data();
      alert( 'You clicked on ' + data[0] + '\'s row' );
    } );
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      info: false,
      search: false,
      paging: false,
      filter: false,
      language: {
        emptyTable: '',
        zeroRecords: 'No hay coincidencias',
        lengthMenu: 'Mostrar _MENU_ elementos',
        search: 'Buscar:',
        info: 'De _START_ a _END_ de _TOTAL_ elementos',
        infoEmpty: 'De 0 a 0 de 0 elementos',
        infoFiltered: '(filtrados de _MAX_ elementos totales)',
        paginate: {
          first: 'Prim.',
          last: 'Últ.',
          next: 'Sig.',
          previous: 'Ant.'
        },
      },
    };
  }



}
