import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-tabla-tasas',
  templateUrl: './ngx-datatable-tasas.component.html',
  styleUrls: ['./ngx-datatable-tasas.component.scss'],
})
export class NgxDatatableTasasComponent {
  editing: any = {};
  rows: any[] = [];
  rowsInedit: any[] = [];
  editCell = false;

  ColumnMode = ColumnMode;
  columns: any;

  constructor() {
    this.rows = [ { 1: '>0, <=3.000.000',  2: '0.4', 3: '0.5', 4: '0.7' },
      { 1: '>123, <=3.000',    2 : '0.4', 3: '0.6', 4: '0.7' },
      { 1: '>3.000.000, <=30.000.000',   2: '0.4', 3: '0.6', 4: '0.7' },
      { 1: '>30.000.000, <=300.000.000',   2: '0.4', 3: '0.6', 4: '0.7' }
    ];
    this.columns = [{  name:  '$/dias' }, { name: '>60,<=180' }, { name: '>60,<=180' }, { name: '>60,<=180' }];
  }
  updateValue(event: any, cell: any, rowIndex: any): void {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
  onSave(): void{
    this.editCell = false;
  }
  onEdit(): void{
    this.editCell = true;
  }
  onCancel(): void{
    this.editCell = false;
  }
}

