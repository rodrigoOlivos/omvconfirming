import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComboMonedaService} from '../../../services/combo-moneda.service';
import {of} from 'rxjs';
import {NgxDatatableTasasComponent} from '../ngx-datatable-tasas/ngx-datatable-tasas.component';
import {ColumnMode, SelectionType} from '@swimlane/ngx-datatable';
import {any} from 'codelyzer/util/function';
import {TokenStorageService} from '../../../services/token-storage.service';
import {OfflineServicesService} from '../../../services/offline-services.service';
import {AgfProviderService} from '../../../services/agf-provider.service';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.scss']
})
export class MatrizComponent implements OnInit {

  formTipoMatriz: FormGroup;
  formMoneda: FormGroup;
  selectTipoMatriz = [{id: '0', name: 'Seleccione...'}];
  selectMoneda = [{idMoneda: '0', moneda: 'Seleccione...'}];

  editingMontos: any = {};
  editingPlazos: any = {};
  rowsMontos: any[] = [];
  rowsPlazos: any[] = [];
  preCargaRowsMontos: any[] = [];
  preCargaRowsPlazos: any[] = [];
  cargaRowsMontos: any[] = [];
  cargaRowsPlazos: any[] = [];
  itemsRowsMontos = {};
  itemsRowsPlazos = {};

  idTipoTabla = 12;
  @Input()
  idTipoMoneda = 1;
  @Input()
  tasaEdit = true;
  loadingIndicator = false;
  ColumnMode = ColumnMode;
  columns: any;

  selectedPlazos = [];
  selectedMontos = [];
  SelectionType = SelectionType;

  @Output()
  monedaEmitter: EventEmitter<string> = new EventEmitter<string>(false);
  monedaSelect = '1';

  constructor(private formBuilder: FormBuilder,
              private comboMonedaService: ComboMonedaService,
              private agfProviderService: AgfProviderService,
              private offlineServicesService: OfflineServicesService
  ) {
    this.formTipoMatriz = this.formBuilder.group({
      orders: ['']
    });

    this.formMoneda = this.formBuilder.group({
      ordersMoneda: ['']
    });

    // async orders
    of(offlineServicesService.getComboTipoMatriz()).subscribe(orders => {
      this.selectTipoMatriz = orders;
    });

    comboMonedaService.getComboMonedaHttp().subscribe(data => {
        this.selectMoneda = data.arrayOfMoneda.rowMoneda;
      },
      err => {
        console.log(err);
        // @ts-ignore
        $('#sesionInvalida').modal('show');
      }
    );
    this.getDataf29();
  }

  getDataf29(): void {
    this.loadingIndicator = true;
    this.agfProviderService.getDataf29(this.idTipoTabla, this.idTipoMoneda).toPromise().then(data => {
        this.preCargaRowsPlazos = data.arrayOfRow292.row292; // rangos plazos
        this.preCargaRowsMontos = data.arrayOfRow291.row291; // rangos montos
        let contadorFilasPlazos = 0;
        let contadorFilasMontos = 0;
        this.preCargaRowsPlazos.forEach((value) => {
          // Plazos
          // @ts-ignore
          this.itemsRowsPlazos['1'] = {
            nroFila: contadorFilasPlazos,
            valor: value.diasDesde
          };
          // @ts-ignore
          this.itemsRowsPlazos['2'] = {
            nroFila: contadorFilasPlazos,
            valor: value.diasHasta
          };
          this.cargaRowsPlazos.push(this.itemsRowsPlazos);
          this.itemsRowsPlazos = {};
          contadorFilasPlazos++;

          // Montos
          // @ts-ignore
          this.itemsRowsMontos['1'] = {
            nroFila: contadorFilasMontos,
            valor: value.montoDesde
          };
          // @ts-ignore
          this.itemsRowsMontos['2'] = {
            nroFila: contadorFilasMontos,
            valor: value.montoHasta
          };
          this.cargaRowsMontos.push(this.itemsRowsMontos);
          this.itemsRowsMontos = {};
          contadorFilasMontos++;


          // this.itemsRowsMontos[1] = value.montoDesde;
          // // @ts-ignore
          // this.itemsRowsMontos[2] = value.montoHasta;
          // this.cargaRowsMontos.push(this.itemsRowsMontos);
          // this.itemsRowsMontos = {};
        });
        this.rowsPlazos = this.cargaRowsPlazos;
        this.rowsMontos = this.cargaRowsMontos;
        console.log('this.rows');
        console.log(this.rowsPlazos);
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

  onChangeMoneda(value: string): void {
    this.onSubmitMoneda(value);
  }

  onSubmitMoneda(value: string): void {
    this.monedaEmitter.emit(value);
  }

  ngOnInit(): void {
  }

  updateValuePlazos(event: any, cell: any, rowIndex: any): void {
    this.rowsPlazos.push();
    console.log('inline editing rowIndex', rowIndex);
    this.editingPlazos[rowIndex + '-' + cell] = false;
    this.rowsPlazos[rowIndex][cell].value = event.target.value;
    this.rowsPlazos = [...this.rowsPlazos];
    console.log('UPDATED!', this.rowsPlazos[rowIndex][cell]);
  }

  updateValueMontos(event: any, cell: any, rowIndex: any): void {
    this.rowsMontos.push();
    console.log('inline editing rowIndex', rowIndex);
    this.editingMontos[rowIndex + '-' + cell] = false;
    this.rowsMontos[rowIndex][cell].value = event.target.value;
    this.rowsMontos = [...this.rowsMontos];
    console.log('UPDATED!', this.rowsMontos[rowIndex][cell]);
  }

  newRowPlazos(): void {
    const filaNueva = {
      1: 0,
      2: 0
    }; // inicializado
    this.rowsPlazos.push(filaNueva);
    this.rowsPlazos = [...this.rowsPlazos];
    console.log('btn agregar');
    console.log(this.rowsPlazos);
  }

  newRowMontos(): void {
    const filaNueva = {
      1: 0,
      2: 0
    }; // inicializado
    this.rowsMontos.push(filaNueva);
    this.rowsMontos = [...this.rowsMontos];
    console.log('btn agregar');
    console.log(this.rowsMontos);
  }

  onRemoveRowPlazos(): void {
    console.log('onRemoveRow');
    this.selectedPlazos.forEach(childObj => {
      // @ts-ignore
      this.rowsPlazos.splice(childObj[1].nroFila, 1);
      this.rowsPlazos = [...this.rowsPlazos];
    });
  }

  onRemoveRowMontos(): void {
    console.log('onRemoveRow');
    this.selectedMontos.forEach(childObj => {
      // @ts-ignore
      this.rowsMontos.splice(childObj[1].nroFila, 1);
      this.rowsMontos = [...this.rowsMontos];
    });
  }

  onSelectMontos({selected}: any): void {
    console.log('Select Event', selected, this.selectedMontos);
    this.selectedMontos.splice(0, this.selectedMontos.length);
    // @ts-ignore
    this.selectedMontos.push(...selected);
  }

  onSelectPlazos({selected}: any): void {
    console.log('Select Event', selected, this.selectedPlazos);
    this.selectedPlazos.splice(0, this.selectedPlazos.length);
    // @ts-ignore
    this.selectedPlazos.push(...selected);
  }

  displayCheckMontos(row: any): boolean {
    return row.name !== 'Ethel Price';
  }

  displayCheckPlazos(row: any): boolean {
    return row.name !== 'Ethel Price';
  }

  refresh(): void {
    this.getDataf29();
  }

}
