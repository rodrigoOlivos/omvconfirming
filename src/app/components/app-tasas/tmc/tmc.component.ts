import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgxDataF31Service} from '../../../services/ngx-data-f31.service';
import {NgxDataF32Service} from '../../../services/ngx-data-f32.service';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComboMonedaService} from '../../../services/combo-moneda.service';
import {of} from 'rxjs';
import { NgxDatatableTasasComponent } from '../ngx-datatable-tasas/ngx-datatable-tasas.component';

@Component({
  selector: 'app-tmc',
  templateUrl: './tmc.component.html',
  styleUrls: ['./tmc.component.scss']
})
export class TmcComponent implements OnInit {

  @Output()
  monedaEmitter: EventEmitter<string> = new EventEmitter<string>( false);
  monedaSelect = '1';
  form: FormGroup;
  orders = [{idMoneda: '0', moneda: 'seleccione...'}];

  @Output()
  editCellEmitter: EventEmitter<boolean> = new EventEmitter<boolean>( false);
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

  constructor(private ngxDataF31Service: NgxDataF31Service,
              private ngxDataF32Service: NgxDataF32Service,
              private formBuilder: FormBuilder,
              private comboMonedaService: ComboMonedaService
  ) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    comboMonedaService.getComboMonedaHttp().subscribe(data => {
        this.orders = data.arrayOfMoneda.rowMoneda;

      },
      err => {
        console.log(err);
        // @ts-ignore
        $('#sesionInvalida').modal('show');
      }
    );
    this.loadingIndicator = true;
    let tabla31tmc = ngxDataF31Service.getDataf31(this.idTipoTabla, this.idTipoMoneda).subscribe(data => {
        this.columnaReferencia = data.arrayOfRow311.row311;
        this.encabezadoTabla = data.arrayOfRow312.row312;
      },
      err => {
        console.log(err);
      }
    );
    let tabla32tmc = ngxDataF32Service.getDataf32(this.idTipoTabla, 0, 0, this.idTipoMoneda).subscribe(data => {
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
      },
      err => {
        console.log(err);
      }
    );
    Promise.all([tabla31tmc, tabla32tmc]).then(responses => {
      this.rows = this.cargaRows;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 500);
    });
  }
  updateValue(event: any, cell: any, rowIndex: any): void {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell].tasa = event.target.value;
    this.rows = [...this.rows];
  }

  ngOnInit(): void {
  }
  onSave(): void{
    this.onSubmitButton(false);
    this.editCell = false;
  }
  onEdit(): void{
    this.onSubmitButton(true);
    this.editCell = true;
  }
  onCancel(): void{
    this.onSubmitButton(false);
    this.editCell = false;
  }
  onSubmitButton(estado: boolean): void{
    this.editCellEmitter.emit(estado);
  }



  onChange(value: string): void{
    this.monedaSelect = value;
    this.onSubmit(value);

  }

  onSubmit(value: string): void{
    this.comboMonedaService.sendMoneda();
    this.monedaEmitter.emit(value);
  }

}
