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
    idComprador: 0,
    idProveedor: 0
  };
  arrayCostoFondo: {} | undefined;

  @Output()
  editCellEmitter: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  editCell = false;

  editing: any = {};
  @Input()
  rows: any[] = [];
  val = {};
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

    ngxDataF31Service.getDataf31(this.idTipoTabla, Number(this.idTipoMoneda)).toPromise().then(data => {
        this.columnaReferencia = data.arrayOfRow311.row311;
        this.encabezadoTabla = data.arrayOfRow312.row312;
        console.log('datatable');
        console.log(data);
        this.columnaReferencia.forEach((value) => {
          this.ordenColums[value.idRangoMonto] = '>' + value.montoDesde + ', <= ' + value.montoHasta;
        });
        ngxDataF32Service.getDataf32(this.idTipoTabla, 0, 0, Number(this.idTipoMoneda)).toPromise().then(data => {
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
                this.itemsRows[1] = this.ordenColums[value.idRangoMonto];
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
            console.log(this.rows);
          },
          err => {
            console.log(err);
            // @ts-ignore
            $('#sesionInvalida').modal('show');
          }
        );
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
        console.log(data);
      },
      err => {
        console.log(err);
        // @ts-ignore
        $('#sesionInvalida').modal('show');
      }
    );

  }

  parseMatrizF33(myCostoFondoArray: any[]): {} {
    // @ts-ignore
    const objetoF33: {
      Tasa: number;
      IdRangoMonto: any;
      IdRangoPlazo: any;
    } = {};
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < myCostoFondoArray.length; i++) {
      for (let j = 2; j <= Object.keys(myCostoFondoArray[i]).length; j++) {
        if (typeof myCostoFondoArray[i][j].tasa === 'string') {
          objetoF33.Tasa = Number(myCostoFondoArray[i][j].tasa);
          objetoF33.IdRangoMonto = myCostoFondoArray[i][j].idRangoMonto;
          objetoF33.IdRangoPlazo = myCostoFondoArray[i][j].idRangoPlazo;
        }
      }
    }
    console.log('resultado');
    return objetoF33;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  updateValue(event: any, cell: any, rowIndex: any): void {
    this.editing[rowIndex + '-' + cell] = false;
    // @ts-ignore
    this.rows[rowIndex][cell].tasa = event.target.value;
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
