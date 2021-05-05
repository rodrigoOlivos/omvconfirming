import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComboMonedaService} from '../../../services/combo-moneda.service';
import {of} from 'rxjs';
import { NgxDatatableTasasComponent } from '../ngx-datatable-tasas/ngx-datatable-tasas.component';
import {NgxDataF29Service} from '../../../services/ngx-data-f29.service';
import {ColumnMode, SelectionType} from '@swimlane/ngx-datatable';
import {any} from 'codelyzer/util/function';
import {TokenStorageService} from '../../../services/token-storage.service';
import {OfflineServicesService} from '../../../services/offline-services.service';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.scss']
})
export class MatrizComponent implements OnInit {

  form: FormGroup;
  orders =  [{ id: '0', name: 'seleccione...' }];
  ordersMoneda = [{idMoneda: '0', moneda: 'seleccione...'}];

  editing: any = {};
  rows: any[] = [];
  idTipoTabla = 12;
  preCargaRows: any[] = [];
  cargaRows: any[] = [];
  itemsRows = {};
  @Input()
  idTipoMoneda = 1;
  @Input()
  tasaEdit = true;
  loadingIndicator = false;
  ColumnMode = ColumnMode;
  columns: any;

  // editing: any = {};
  // rows: any[] = [];
  // idTipoTabla = 12;
  public val1 = {};
  public val2 = { };
  // preCargaRows: any[] = [];
  // cargaRows: any = [];
  // itemsRows = {};
  @Input()
  // idTipoMoneda = 1;
  @Input()
  // tasaEdit = true;
  // loadingIndicator = false;
  // columns: any;

  selected = [];
  // ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  @Output()
  monedaEmitter: EventEmitter<string> = new EventEmitter<string>( false);
  monedaSelect = '1';

  constructor(private formBuilder: FormBuilder,
              private comboMonedaService: ComboMonedaService,
              private ngxDataF29Service: NgxDataF29Service,
              private offlineServicesService: OfflineServicesService
  ) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    this.form = this.formBuilder.group({
      ordersMoneda: ['']
    });

    // async orders
    of(offlineServicesService.getComboTipoMatriz()).subscribe(orders => {
      this.orders = orders;
    });

    comboMonedaService.getComboMonedaHttp().subscribe(data => {
        this.ordersMoneda = data.arrayOfMoneda.rowMoneda;

      },
      err => {
        console.log(err);
        // @ts-ignore
        $('#sesionInvalida').modal('show');
      }
    );

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

    this.loadingIndicator = true;
    ngxDataF29Service.getDataf29(this.idTipoTabla, this.idTipoMoneda).toPromise().then(data => {
        this.preCargaRows = data.arrayOfRow292.row292;
        let contadorFilas = 0;
        this.preCargaRows.forEach((value) => {
          // @ts-ignore
          this.itemsRows['1'] = {
            nroFila: contadorFilas,
            valor: value.diasDesde
          };
          // @ts-ignore
          this.itemsRows['2'] = {
            nroFila: contadorFilas,
            valor: value.diasHasta
          };
          this.cargaRows.push(this.itemsRows);
          this.itemsRows = {};
          contadorFilas++;
        });
        this.rows = this.cargaRows;
        console.log('this.rows');
        console.log(this.rows);
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

  onChange(value: string): void{
    this.monedaSelect = value;
    this.onSubmit(value);

  }

  onSubmit(value: string): void{
    this.comboMonedaService.sendMoneda();
    this.monedaEmitter.emit(value);
  }

  ngOnInit(): void {
  }

  updateValue(event: any, cell: any, rowIndex: any): void {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  updateValueValue(event: any, cell: any, rowIndex: any): void {
    this.rows.push();
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell].value = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  newRow(): void {
    const filaNueva = {
      1: 0,
      2: 0
    }; // inicializado
    this.rows.push(filaNueva);
    this.rows = [...this.rows];
    console.log('btn agregar');
    console.log(this.rows);
  }

  onRemoveRow(index: number): void {
    console.log('onRemoveRow');
    this.selected.forEach(childObj => {
      // @ts-ignore
      this.rows.splice(childObj[1].nroFila, 1);
      this.rows = [...this.rows];
    });
  }

  onSelect({selected}: any): void {
    console.log('Select Event', selected, this.selected);
    this.selected.splice(0, this.selected.length);
    // @ts-ignore
    this.selected.push(...selected);
  }

  displayCheck(row: any): boolean {
    return row.name !== 'Ethel Price';
  }

}
