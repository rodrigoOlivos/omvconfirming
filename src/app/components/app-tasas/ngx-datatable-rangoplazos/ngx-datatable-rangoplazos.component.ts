import {Component, Input} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {NgxDataF29Service} from '../../../services/ngx-data-f29.service';

@Component({
  selector: 'app-ngx-datatable-rangoplazos',
  templateUrl: './ngx-datatable-rangoplazos.component.html',
  styleUrls: ['./ngx-datatable-rangoplazos.component.scss']
})
export class NgxDatatableRangoplazosComponent {

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
        this.preCargaRows = data.arrayOfRow292.row292;
        this.preCargaRows.forEach((value) => {
          // @ts-ignore
          this.itemsRows[1] = value.diasDesde;
          // @ts-ignore
          this.itemsRows[2] = value.diasHasta;
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
