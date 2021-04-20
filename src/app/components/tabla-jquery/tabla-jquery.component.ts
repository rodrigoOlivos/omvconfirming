import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-jquery',
  templateUrl: './tabla-jquery.component.html',
  styleUrls: ['./tabla-jquery.component.css']
})
export class TablaJqueryComponent implements OnInit {
  dtOptions: any;
  dtEditor: any;

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      info: false,
      search: false,
      paging: false,
      language: {
        emptyTable: '',
        zeroRecords: 'No hay coincidencias',
        lengthMenu: 'Mostrar _MENU_ elementos',
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
