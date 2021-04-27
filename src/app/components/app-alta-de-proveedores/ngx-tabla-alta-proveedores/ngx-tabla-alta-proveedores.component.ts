import {Component, Input} from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-ngx-tabla-alta-proveedores',
  templateUrl: './ngx-tabla-alta-proveedores.component.html',
  styleUrls: ['./ngx-tabla-alta-proveedores.component.scss']
})
export class NgxTablaAltaProveedoresComponent {
  editing: any = {};
  rows: any[] = [];
  rowsInedit: any[] = [];
  @Input()
  tasaEdit = false;

  ColumnMode = ColumnMode;
  columns: any;

  constructor() {
    this.rows = [ { 1: '',  2: '', 3: '', 4: '', 5: '' , 6: ''  },
                { 1: '',  2: '', 3: '', 4: '', 5: '' , 6: ''  },
                { 1: '',  2: '', 3: '', 4: '', 5: '' , 6: ''  },
                { 1: '',  2: '', 3: '', 4: '', 5: '' , 6: ''  },
                { 1: '',  2: '', 3: '', 4: '', 5: '' , 6: ''  },
                { 1: '',  2: '', 3: '', 4: '', 5: '' , 6: ''  },
                { 1: '',  2: '', 3: '', 4: '', 5: '' , 6: ''  },
                { 1: '',  2: '', 3: '', 4: '', 5: '' , 6: ''  },
                { 1: '',  2: '', 3: '', 4: '', 5: '' , 6: ''  }
                ];
  }
  updateValue(event: any, cell: any, rowIndex: any): void {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}

