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
  preCargaRows: any[] = [];
  cargaRows: any[] = [];
  itemsRows = {
  };
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
        this.preCargaRows = data.arrayOfRow32.row32;
        let columnaref  = 0 ;
        let columncount  = 0;
        let rowcount = 2;
        let ciclo = 0;
        this.preCargaRows.forEach((value) => {

          if (columncount === 0){
            columncount = value.idRangoMonto;
            rowcount = 2;
            // @ts-ignore
            this.itemsRows[1] = '>' + this.columnaReferencia[columnaref].montoDesde
              + ', <= ' + this.columnaReferencia[columnaref].montoHasta;
            console.log(this.columnaReferencia);
            columnaref++;
          }
          if (columncount === value.idRangoMonto)
          {
            // @ts-ignore
            this.itemsRows[rowcount] = value.tasa;
            rowcount++;
            ciclo++;
            if (ciclo === this.preCargaRows.length){
              this.cargaRows.push(this.itemsRows);
            }
          }else{
            columncount = value.idRangoMonto;
            rowcount = 2;
            this.cargaRows.push(this.itemsRows);
            this.itemsRows = {};
            // @ts-ignore
            this.itemsRows[1] = '>' + this.columnaReferencia[columnaref].montoDesde + ', <= '
              + this.columnaReferencia[columnaref].montoHasta;
            columnaref++;
            // @ts-ignore
            this.itemsRows[rowcount] = value.tasa;
            rowcount++;
            ciclo++;
          }
        });
        this.rows = this.cargaRows;
      },
      err => {
        console.log(err);
      }
    );

    /*his.rows = [{1: '>0, <=3.000.000', 2: '0.4', 3: '0.5', 4: '0.7'},
      {1: '>123, <=3.000', 2: '0.4', 3: '0.6', 4: '0.7'},
      {1: '>3.000.000, <=30.000.000', 2: '0.4', 3: '0.6', 4: '0.7'},
      {1: '>30.000.000, <=300.000.000', 2: '0.4', 3: '0.6', 4: '0.7'}
    ];*/
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

