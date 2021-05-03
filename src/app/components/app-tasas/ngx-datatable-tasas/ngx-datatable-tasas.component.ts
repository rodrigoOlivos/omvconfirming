import {Component, EventEmitter, Input, AfterViewInit, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {ComboMonedaService} from '../../../services/combo-moneda.service';
import {NgxDataF31Service} from '../../../services/ngx-data-f31.service';
import {NgxDataF32Service} from '../../../services/ngx-data-f32.service';
import {DatatableComponent} from '@swimlane/ngx-datatable/';
import {NgxDataF33Service} from '../../../services/ngx-data-f33.service';

@Component({
  selector: 'app-tabla-tasas',
  templateUrl: './ngx-datatable-tasas.component.html',
  styleUrls: ['./ngx-datatable-tasas.component.scss'],
})
export class NgxDatatableTasasComponent implements OnInit, AfterViewInit {
  formF33: any = {
    idTipoMat: 12,
    idTipoMoneda: 1,
    idComprador: 99541470,
    idProveedor: 96930940
  };
  arrayCostoFondo: any[][] | undefined;

  @Output()
  editCellEmitter: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  editCell = false;

  editing: any = {};
  @Input()
  rows: any[] = [];
  rowsInedit: any[] = [];
  idTipoTabla = 12;
  encabezadoTabla: any[] = [];
  columnaReferencia: any[] = [];
  preCargaRows: any[] = [];
  cargaRows: any[] = [];
  ordenColums: any[] = [];
  itemsRows = {};
  @Input()
  idTipoMoneda = '1';
  @Input()
  tasaEdit = false;


  ColumnMode = ColumnMode;
  columns: any;

  constructor(private ngxDataF31Service: NgxDataF31Service,
              private ngxDataF32Service: NgxDataF32Service,
              private ngxDataF33Service: NgxDataF33Service
  ) {

    ngxDataF31Service.getDataf31(this.idTipoTabla, Number(this.idTipoMoneda)).subscribe(data => {
        this.columnaReferencia = data.arrayOfRow311.row311;
        this.encabezadoTabla = data.arrayOfRow312.row312;
        console.log('datatable');
        console.log(data);
        this.columnaReferencia.forEach((value) => {
          this.ordenColums[value.idRangoMonto] = '>' + value.montoDesde + ', <= ' + value.montoHasta;
        });
      },
      err => {
        console.log(err);
        // @ts-ignore
        $('#sesionInvalida').modal('show');
      }
    );
    ngxDataF32Service.getDataf32(this.idTipoTabla, 0, 0, Number(this.idTipoMoneda)).subscribe(data => {
        console.log('datatable');
        this.preCargaRows = data.arrayOfRow32.row32;
        let columnaref = 0;
        let columncount = 0;
        let rowcount = 2;
        let ciclo = 0;
        this.preCargaRows.forEach((value) => {

          if (columncount === 0) {
            columncount = value.idRangoMonto;
            rowcount = 2;
            // @ts-ignore
            this.itemsRows[1] = this.ordenColums[value.idRangoMonto];
            columnaref++;
          }
          if (columncount === value.idRangoMonto) {
            // @ts-ignore
            this.itemsRows[rowcount] = value.tasa;
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
            this.itemsRows[1] = this.ordenColums[value.idRangoMonto];
            columnaref++;
            // @ts-ignore
            this.itemsRows[rowcount] = value.tasa;
            rowcount++;
            ciclo++;
          }
        });
        this.rows = this.cargaRows;
        console.log(this.rows);
      },
      err => {
        console.log(err);
        // @ts-ignore
        $('#sesionInvalida').modal('show');
      }
    );
  }

  @ViewChild(DatatableComponent)
  myCostoFondo!: DatatableComponent;

  onSave(): void {
    this.onSubmitButton(false);
    this.editCell = false;

    const {idTipoMat, idTipoMoneda, idComprador, idProveedor} = this.formF33;
    this.arrayCostoFondo = this.parseMatrizF33(this.myCostoFondo.bodyComponent.rows);
    console.log(this.arrayCostoFondo);
    this.ngxDataF33Service.getDataf33(idTipoMat, idTipoMoneda, idComprador, idProveedor, this.arrayCostoFondo).subscribe(
      data => {
        // this.tokenStorage.saveToken(data.accessToken);
        console.log(data);
      },
      err => {
        console.log(err);
        // @ts-ignore
        $('#sesionInvalida').modal('show');
      }
    );

  }

  parseMatrizF33(myCostoFondoArray: any[]): any[] {
    // tslint:disable-next-line:only-arrow-functions typedef
    const resultado = myCostoFondoArray.map(function(elemento: any[]) {
      const arr: any[] = [];
      for (let i = 2; i <= Object.keys(elemento).length; i++) {
        arr.push(Number(elemento[i]));
      }
      return arr;
    });
    console.log('resultado');
    return resultado;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log('aaaa2');
    // console.log(this.myCostoFondo.bodyComponent.rows);
  }

  updateValue(event: any, cell: any, rowIndex: any): void {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  onEdit(): void {
    this.onSubmitButton(true);
    this.editCell = true;
  }

  onCancel(): void {
    this.onSubmitButton(false);
    this.editCell = false;
  }

  onSubmitButton(estado: boolean): void {
    this.editCellEmitter.emit(estado);
  }

}
