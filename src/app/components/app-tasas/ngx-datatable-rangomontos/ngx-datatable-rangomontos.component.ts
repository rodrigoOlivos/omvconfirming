import {Component, Input} from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import {NgxDataF29Service} from '../../../services/ngx-data-f29.service';

@Component({
  selector: 'app-ngx-datatable-rangomontos',
  templateUrl: './ngx-datatable-rangomontos.component.html',
  styleUrls: ['./ngx-datatable-rangomontos.component.scss']
})
export class NgxDatatableRangomontosComponent {

  editing: any = {};
  rows: any[] = [];
  idTipoTabla = 12;
  preCargaRows: any[] = [];
  cargaRows: any[] = [];
  itemsRows = {};
  @Input()
  idTipoMoneda = 1;
  @Input()
  tasaEdit = false;
  loadingIndicator = false;
  ColumnMode = ColumnMode;
  columns: any;

  constructor(private ngxDataF29Service: NgxDataF29Service) {
    this.loadingIndicator = true;
    ngxDataF29Service.getDataf29(this.idTipoTabla, this.idTipoMoneda).toPromise().then(data => {
        this.preCargaRows = data.arrayOfRow291.row291;
        this.preCargaRows.forEach((value) => {
          // @ts-ignore
          this.itemsRows[1] = value.montoDesde;
          // @ts-ignore
          this.itemsRows[2] = value.montoHasta;
          this.cargaRows.push(this.itemsRows);
          this.itemsRows = {};
        });
        this.rows = this.cargaRows;
        setTimeout(() => {
          this.loadingIndicator = false;
        }, 1500);
      },
      err => {
        console.log(err);
        // @ts-ignore
        $('#sesionInvalida').modal('show');
      }
    );

  }

  updateValue(event: any, cell: any, rowIndex: any): void {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
