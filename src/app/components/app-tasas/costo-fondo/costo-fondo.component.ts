import {Component, EventEmitter, Input, AfterViewInit, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {of, Subscription} from 'rxjs';
import {ComboMonedaService} from '../../../services/combo-moneda.service';
import {AgfProviderService} from '../../../services/agf-provider.service';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {ColumnMode} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-costo-fondo',
  templateUrl: './costo-fondo.component.html',
  styleUrls: ['./costo-fondo.component.scss']
})
export class CostoFondoComponent implements OnInit {
  // combomoneda
  monedaSelect = '1';
  form: FormGroup;
  monedaServicio = [{idMoneda: '0', moneda: 'seleccione...'}];
  // tabla costofondo
  formF33: any = {
    idTipoMat: 12,
    idComprador: 0,
    idProveedor: 0
  };
  arrayCostoFondo: any[][] | undefined;

  @Output()

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
  idTipoMoneda = 1;
  @Input()
  tasaEdit = false;
  ColumnMode = ColumnMode;
  columns: any;
  loadingIndicator = false;

  resultadosrows = [{1: '', 2: ''}];

  constructor(
    private formBuilder: FormBuilder,
    private comboMonedaService: ComboMonedaService,
    private AgfProvider: AgfProviderService,
  ) {
    this.form = this.formBuilder.group({orders: ['']});
    comboMonedaService.getComboMonedaHttp().subscribe(
      data => {
        this.monedaServicio = data.arrayOfMoneda.rowMoneda;
      },
      err => {
        // $('#sesionInvalida').modal('show');
      });
    this.cargaTabla();
  }

  onChangeCombo(value: string): void {
    this.idTipoMoneda = Number(value);
    this.cargaTabla();
  }

  @ViewChild(DatatableComponent)
  myCostoFondo!: DatatableComponent;

  onSave(): void {
    this.tasaEdit = false;

    const {idTipoMat, idComprador, idProveedor} = this.formF33;
    this.arrayCostoFondo = this.parseMatrizF33(this.myCostoFondo.bodyComponent.rows);
    console.log(this.arrayCostoFondo);
    this.AgfProvider.getDataf33(idTipoMat, Number(this.idTipoMoneda), idComprador, idProveedor, this.arrayCostoFondo).subscribe(
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

  ngOnInit(): void {
  }

  updateValue(event: any, cell: any, rowIndex: any): void {
    this.editing[rowIndex + '-' + cell] = false;
    // @ts-ignore
    this.rows[rowIndex][cell].tasa = event.target.value;
    this.rows = [...this.rows];
  }

  onEdit(): void {
    this.tasaEdit = true;
  }

  onCancel(): void {
    this.tasaEdit = false;
  }

  cargaTabla(): void {
    this.cargaRows = [];
    this.columnaReferencia = [];
    this.encabezadoTabla = [];
    this.loadingIndicator = true;
    this.AgfProvider.getDataf31(this.idTipoTabla, this.idTipoMoneda).toPromise().then(data => {
        this.columnaReferencia = data.arrayOfRow311.row311;
        this.encabezadoTabla = data.arrayOfRow312.row312;
        this.columnaReferencia.forEach((value) => {
          this.ordenColums[value.idRangoMonto] = '>' + value.montoDesde + ', <= ' + value.montoHasta;
        });
        this.AgfProvider.getDataf32(this.idTipoTabla, 0, 0, this.idTipoMoneda).toPromise().then(data => {
            this.preCargaRows = data.arrayOfRow32.row32;
            const orden = this.ordenColums;
            let columnaref = 0;
            let columncount = 0;
            let rowcount = 2;
            let ciclo = 0;
            this.preCargaRows.forEach((value) => {
              if (columncount === 0) {
                columncount = value.idRangoMonto;
                rowcount = 2;
                // @ts-ignore
                this.itemsRows[1] = orden[value.idRangoMonto];
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
              this.rows = this.cargaRows;
              this.rows = [...this.rows];
              setTimeout(() => {
                this.loadingIndicator = false;
              }, 500);

            });
          },
          err => {
            console.log(err);
            // @ts-ignore
            // $('#sesionInvalida').modal('show');
          });
      },
      err => {
        console.log(err);
        // @ts-ignore
        // $('#sesionInvalida').modal('show');
      }
    );
  }

}
