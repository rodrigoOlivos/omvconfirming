import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComboMonedaService} from '../../../services/combo-moneda.service';
import {AgfProviderService} from '../../../services/agf-provider.service';
import {TokenStorageService} from '../../../services/token-storage.service';

@Component({
  selector: 'app-tmc',
  templateUrl: './tmc.component.html',
  styleUrls: ['./tmc.component.scss']
})
export class TmcComponent {

  constructor(private formBuilder: FormBuilder,
              private comboMonedaService: ComboMonedaService,
              private agfProvider: AgfProviderService
  ) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    comboMonedaService.getComboMonedaHttp().subscribe(data => {
        this.orders = data.arrayOfMoneda.rowMoneda;
      },
      err => {
        // @ts-ignore
        $('#sesionInvalida').modal('show');
      }
    );
    this.onChangeTable();
  }

  isLoggedIn = false;
  rutempresa: any;
  rutpersona: any;
  nombreUsuario: any;

  curdate = new Date();
  timestamp: any;

  @Output()
  monedaEmitter: EventEmitter<string> = new EventEmitter<string>(false);
  monedaSelect = '1';
  form: FormGroup;
  orders = [{idMoneda: '0', moneda: 'seleccione...'}];
  formF33: any = {
    idTipoMat: 11,
    idComprador: 0,
    idProveedor: 0
  };
  @Output()
  editCellEmitter: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  editCell = false;
  @Input()
  databaseData: any;

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
  arrayCostoFondo: any[][] | undefined;

  @ViewChild(DatatableComponent)
  myCostoFondo!: DatatableComponent;

  updateValue(event: any, cell: any, rowIndex: any): void {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell].tasa = event.target.value;
    this.rows = [...this.rows];
  }


  onEdit(): void {
    this.tasaEdit = true;
  }

  onCancel(): void {
    this.tasaEdit = false;
  }

  onChange(value: string): void {
    this.idTipoMoneda = Number(value);
    this.onChangeTable();
  }

  onSave(): void {
    this.tasaEdit = false;

    const {idTipoMat, idComprador, idProveedor} = this.formF33;
    this.arrayCostoFondo = this.parseMatrizF33(this.myCostoFondo.bodyComponent.rows);
    console.log(this.arrayCostoFondo);
    this.agfProvider.getDataf33(idTipoMat, Number(this.idTipoMoneda), idComprador, idProveedor, this.arrayCostoFondo).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
        // @ts-ignore
        // $('#sesionInvalida').modal('show');
      }
    );
  }


  parseMatrizF33(myCostoFondoArray: any[]): any[] {
    const arr: any[] = [];
    myCostoFondoArray.forEach(item => {
      for (let j = 2; j <= Object.keys(item).length; j++) {
        // @ts-ignore
        const objetoF33: {
          tasa: number;
          idRangoMonto: any;
          idRangoPlazo: any;
        } = {};
        objetoF33.tasa = Number(item[j].tasa);
        objetoF33.idRangoMonto = item[j].idRangoMonto;
        objetoF33.idRangoPlazo = item[j].idRangoPlazo;
        arr.push(objetoF33);
      }
    });
    console.log('resultado');
    return arr;
  }

  onChangeTable(): void {
    this.cargaRows = [];
    this.columnaReferencia = [];
    this.encabezadoTabla = [];
    this.loadingIndicator = true;
    this.agfProvider.getDataf31(this.idTipoTabla, this.idTipoMoneda).toPromise().then(data => {
        this.columnaReferencia = data.arrayOfRow311.row311;
        this.encabezadoTabla = data.arrayOfRow312.row312;
        this.agfProvider.getDataf32(this.idTipoTabla, 0, 0, this.idTipoMoneda).toPromise().then(data => {
            this.preCargaRows = data.arrayOfRow32.row32;
            this.timestamp = data.timestampUpdate;
            this.nombreUsuario = data.userUpdate;
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
              }
            );
            this.rows = this.cargaRows;
            setTimeout(() => {
              this.loadingIndicator = false;
            }, 500);
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

}
