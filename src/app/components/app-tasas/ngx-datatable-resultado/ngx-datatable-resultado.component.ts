import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-ngx-datatable-resultado',
  templateUrl: './ngx-datatable-resultado.component.html',
  styleUrls: ['./ngx-datatable-resultado.component.css']
})
export class NgxDatatableResultadoComponent {
  editing: any = {};
  rows: any[] = [];
  rowsInedit: any[] = [];
  editCell = false;
  loadingIndicator = false;
  ColumnMode = ColumnMode;
  columns: any;

  constructor() {
    this.rows = [ { 1: '' , 2: '' },
                 { 1: '',    2 : '' },
                  { 1: '',   2: '' },
                  { 1: '',   2: '' }
                ];
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



