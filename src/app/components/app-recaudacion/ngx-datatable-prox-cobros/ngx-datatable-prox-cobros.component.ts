import {Component} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-ngx-datatable-prox-cobros',
  templateUrl: './ngx-datatable-prox-cobros.component.html',
  styleUrls: ['./ngx-datatable-prox-cobros.component.scss']
})
export class NgxDatatableProxCobrosComponent {
  editing: any = {};
  rows: any[] = [];
  rowsInedit: any[] = [];
  editCell = false;

  ColumnMode = ColumnMode;
  columns: any;

  constructor() {
    this.rows = [
      {1: '0', 2: '1'},
      {1: '0', 2: '1'},
      {1: '0', 2: '1'},
      {1: '0', 2: '1'}
    ];
  }

  updateValue(event: any, cell: any, rowIndex: any): void {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  onSave(): void {
    this.editCell = false;
  }

  onEdit(): void {
    this.editCell = true;
  }

  onCancel(): void {
    this.editCell = false;
  }
}
