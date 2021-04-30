import {Component, Input} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {ComboMonedaService} from '../../../services/combo-moneda.service';
import {NgxDataF31Service} from '../../../services/ngx-data-f31.service';
import {NgxDataF32Service} from '../../../services/ngx-data-f32.service';

@Component({
  selector: 'app-tabla-tasas',
  templateUrl: './ngx-datatable-tasas.component.html',
  styleUrls: ['./ngx-datatable-tasas.component.scss'],
})
export class NgxDatatableTasasComponent {
  editing: any = {};
  rows: any[] = [];
  rowsInedit: any[] = [];
  idTipoTabla = 12;
  encabezadoTabla: any[] = [];
  columnaReferencia: any[] = [];
  @Input()
  idTipoMoneda = 1;
  @Input()
  tasaEdit = false;

  ColumnMode = ColumnMode;
  columns: any;

  constructor(private ngxDataF31Service: NgxDataF31Service, private ngxDataF32Service: NgxDataF32Service) {

    ngxDataF31Service.getDataf31(this.idTipoTabla, this.idTipoMoneda).subscribe(data => {
        this.columnaReferencia = data.arrayOfRow311.row311;
        this.encabezadoTabla = data.arrayOfRow312.row312;
        console.log('datatable');
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
    ngxDataF32Service.getDataf32(this.idTipoTabla, 0, 0, this.idTipoMoneda).subscribe(data => {
        console.log('datatable');
        console.log(data.arrayOfRow32.row32);
      },
      err => {
        console.log(err);
      }
    );

    this.rows = [{1: '>0, <=3.000.000', 2: '0.4', 3: '0.5', 4: '0.7'},
      {1: '>123, <=3.000', 2: '0.4', 3: '0.6', 4: '0.7'},
      {1: '>3.000.000, <=30.000.000', 2: '0.4', 3: '0.6', 4: '0.7'},
      {1: '>30.000.000, <=300.000.000', 2: '0.4', 3: '0.6', 4: '0.7'}
    ];
    this.columns = [{name: '$/dias'}, {name: '>60,<=180'}, {name: '>60,<=180'}, {name: '>60,<=180'}];
  }

  updateValue(event: any, cell: any, rowIndex: any): void {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

}

