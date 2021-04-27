import {Component, Input} from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-ngx-datatable-rangomontos',
  templateUrl: './ngx-datatable-rangomontos.component.html',
  styleUrls: ['./ngx-datatable-rangomontos.component.css']
})
export class NgxDatatableRangomontosComponent {

  editing: any = {};
  rows: any[] = [];
  rowsInedit: any[] = [];
  @Input()
  tasaEdit = false;

  ColumnMode = ColumnMode;
  columns: any;

  constructor() {
    this.rows = [ { 1: '0',  2: '0'},
      { 1: '0',  2: '0'},
      { 1: '0',  2: '0'},
      { 1: '0',  2: '0'},
      { 1: '0',  2: '0'},
      { 1: '0',  2: '0'},
      { 1: '0',  2: '0'},
      { 1: '0',  2: '0'},
      { 1: '0',  2: '0'},
      { 1: '0',  2: '0'},
      { 1: '0',  2: '0'},
    ];
    this.columns = [{  name:  '$/dias' }, { name: '>0,<=180' }];
  }
  updateValue(event: any, cell: any, rowIndex: any): void {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
