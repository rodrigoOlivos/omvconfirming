import {Component, Input} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {ComboMonedaService} from '../../../services/combo-moneda.service';
import {NgxDataF31Service} from '../../../services/ngx-data-f31.service';
import {NgxDataF32Service} from '../../../services/ngx-data-f32.service';

@Component({
  selector: 'app-ngx-datatable-tmc',
  templateUrl: './ngx-datatable-tmc.component.html',
  styleUrls: ['./ngx-datatable-tmc.component.scss']
})
export class NgxDatatableTmcComponent {

  editing: any = {};
  rows: any[] = [];
  rowsInedit: any[] = [];
  idTipoTabla = 11;
  encabezadoTabla: any[] = [];
  columnaReferencia: any[] = [];
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
  val = {};

  constructor(private ngxDataF31Service: NgxDataF31Service, private ngxDataF32Service: NgxDataF32Service) {
    this.loadingIndicator = true;
    ngxDataF31Service.getDataf31(this.idTipoTabla, this.idTipoMoneda).toPromise().then(data => {
        this.columnaReferencia = data.arrayOfRow311.row311;
        this.encabezadoTabla = data.arrayOfRow312.row312;
        ngxDataF32Service.getDataf32(this.idTipoTabla, 0, 0, this.idTipoMoneda).toPromise().then(data2 => {
            this.preCargaRows = data2.arrayOfRow32.row32;
            let columnaref = 0;
            let columncount = 0;
            let rowcount = 2;
            let ciclo = 0;
            this.preCargaRows.forEach((value) => {

              if (columncount === 0) {
                columncount = value.idRangoMonto;
                rowcount = 2;
                // @ts-ignore
                this.itemsRows[1] = '>' + this.columnaReferencia[columnaref].montoDesde
                  + ', <= ' + this.columnaReferencia[columnaref].montoHasta;
                console.log(this.columnaReferencia);
                columnaref++;
              }
              if (columncount === value.idRangoMonto) {
                // @ts-ignore
                this.val.idRangoMonto = value.idRangoMonto;
                // @ts-ignore
                this.val.idRangoPlazo = value.idRangoPlazo;
                // @ts-ignore
                this.val.tasa = value.tasa;
                // @ts-ignore
                this.itemsRows[rowcount] = this.val;
                this.val = {};
                rowcount++;
                ciclo++;
                if (ciclo === this.preCargaRows.length) {
                  this.cargaRows.push(this.itemsRows);
                }
              } else {
                columncount = value.idRangoMonto;
                rowcount = 2;
                this.cargaRows.push(this.itemsRows);
                this.itemsRows = {};
                // @ts-ignore
                this.itemsRows[1] = '>' + this.columnaReferencia[columnaref].montoDesde + ', <= '
                  + this.columnaReferencia[columnaref].montoHasta;
                columnaref++;
                // @ts-ignore
                this.val.idRangoMonto = value.idRangoMonto;
                // @ts-ignore
                this.val.idRangoPlazo = value.idRangoPlazo;
                // @ts-ignore
                this.val.tasa = value.tasa;
                // @ts-ignore
                this.itemsRows[rowcount] = this.val;
                this.val = {};
                rowcount++;
                ciclo++;
              }
            });
            this.rows = this.cargaRows;
            setTimeout(() => {
              this.loadingIndicator = false;
            }, 1500);
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }

  updateValue(event: any, cell: any, rowIndex: any): void {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell].tasa = event.target.value;
    this.rows = [...this.rows];
  }

}
