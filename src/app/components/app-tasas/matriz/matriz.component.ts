import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComboMonedaService} from '../../../services/combo-moneda.service';
import {of} from 'rxjs';
import {NgxDatatableTasasComponent} from '../ngx-datatable-tasas/ngx-datatable-tasas.component';
import {ColumnMode, DatatableComponent, SelectionType} from '@swimlane/ngx-datatable';
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

    // // async orders
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

    // this.getDataf29();
  }

  formF30: any = {
    idRol: 0
  };
  arrayRangoPlazos: any[][] | undefined;
  arrayRangoMontos: any[][] | undefined;
  // cantRangoMontos = 0;
  // cantRangoPlazos = 0;

  formTipoMatriz: FormGroup;
  formMoneda: FormGroup;
  selectTipoMatriz = [{id: '0', name: 'Seleccione...'}];
  selectMoneda = [{idMoneda: '0', moneda: 'Seleccione...'}];

  nombreUsuario = '';
  timestamp = '';
  contadorFilasMontos = 0;
  contadorFilasPlazos = 0;
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
  idRangoPlazoActual = 99; // TODO: revisar esto, debería ser ultimo valor+1
  idRangoMontoActual = 99;

  idTipoTabla = 0; // valor inicial para esta vista
  idTipoMoneda = 1; // valor inicial para esta vista

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

  @ViewChild('myDataPlazos')
  myDataPlazos!: DatatableComponent;
  @ViewChild('myDataMontos')
  myDataMontos!: DatatableComponent;

  getDataf29(): void {
    this.cargaRowsMontos = [];
    this.cargaRowsPlazos = [];
    this.loadingIndicator = true;
    this.agfProviderService.getDataf29(this.idTipoTabla, this.idTipoMoneda).toPromise().then(data => {
        this.nombreUsuario = data.userUpdate;
        this.timestamp = data.timestamp;

        this.contadorFilasPlazos = 0;
        this.preCargaRowsPlazos = data.arrayOfRow292.row292; // rangos plazos
        this.preCargaRowsPlazos.forEach((valuePlazos) => {
          // @ts-ignore
          this.itemsRowsPlazos['1'] = {
            nroFila: this.contadorFilasPlazos,
            idRangoPlazo: valuePlazos.idRangoPlazo,
            valor: valuePlazos.diasDesde
          };
          // @ts-ignore
          this.itemsRowsPlazos['2'] = {
            nroFila: this.contadorFilasPlazos,
            idRangoPlazo: valuePlazos.idRangoPlazo,
            valor: valuePlazos.diasHasta
          };
          this.cargaRowsPlazos.push(this.itemsRowsPlazos);
          this.itemsRowsPlazos = {};
          this.contadorFilasPlazos++;
        });
        this.rowsPlazos = this.cargaRowsPlazos;
        console.log('fin ciclo each plazos');
        console.log(this.rowsPlazos);

        this.contadorFilasMontos = 0;
        this.preCargaRowsMontos = data.arrayOfRow291.row291; // rangos montos
        this.preCargaRowsMontos.forEach((valueMontos) => {
          // @ts-ignore
          this.itemsRowsMontos['1'] = {
            nroFila: this.contadorFilasMontos,
            idRangoMonto: valueMontos.idRangoMonto,
            valor: valueMontos.montoDesde
          };
          // @ts-ignore
          this.itemsRowsMontos['2'] = {
            nroFila: this.contadorFilasMontos,
            idRangoMonto: valueMontos.idRangoMonto,
            valor: valueMontos.montoHasta
          };
          this.cargaRowsMontos.push(this.itemsRowsMontos);
          this.itemsRowsMontos = {};
          this.contadorFilasMontos++;
        });
        this.rowsMontos = this.cargaRowsMontos;
        console.log('fin ciclo each montos');
        console.log(this.rowsMontos);
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

  onSubmitMoneda(value: string): void {
    this.monedaEmitter.emit(value);
  }

  onChangeMoneda(value: string): void {
    this.idTipoMoneda = Number(value);
    this.getDataf29();
  }

  onChangeTipoMatriz(value: string): void {
    this.idTipoTabla = Number(value);
    this.getDataf29();
  }

  ngOnInit(): void {
  }

  updateValuePlazos(event: any, cell: any, rowIndex: any): void {
    // this.rowsPlazos.push();
    // console.log('inline editing rowIndex', rowIndex);
    this.editingPlazos[rowIndex + '-' + cell] = false;
    this.rowsPlazos[rowIndex][cell].valor = event.target.value;
    this.rowsPlazos = [...this.rowsPlazos];
    // console.log('UPDATED!', this.rowsPlazos[rowIndex][cell]);
  }

  updateValueMontos(event: any, cell: any, rowIndex: any): void {
    // this.rowsMontos.push();
    // console.log('inline editing rowIndex', rowIndex);
    this.editingMontos[rowIndex + '-' + cell] = false;
    this.rowsMontos[rowIndex][cell].valor = event.target.value;
    this.rowsMontos = [...this.rowsMontos];
    // console.log('UPDATED!', this.rowsMontos[rowIndex][cell]);
  }

  newRowPlazos(): void {
    const filaNuevaPlazos = {
      1: {
        nroFila: this.idRangoPlazoActual,
        idRangoPlazo: this.idRangoPlazoActual,
        valor: 0
      },
      2: {
        nroFila: this.idRangoPlazoActual,
        idRangoPlazo: this.idRangoPlazoActual,
        valor: 0
      }
    }; // inicializado
    this.idRangoPlazoActual++;
    this.contadorFilasPlazos++;
    this.rowsPlazos.push(filaNuevaPlazos);
    this.rowsPlazos = [...this.rowsPlazos];
    console.log('btn agregar');
    console.log(this.rowsPlazos);
  }

  newRowMontos(): void {
    const filaNuevaMontos = {
      1: {
        nroFila: this.idRangoMontoActual,
        idRangoMonto: this.idRangoMontoActual,
        valor: 0
      },
      2: {
        nroFila: this.idRangoMontoActual,
        idRangoMonto: this.idRangoMontoActual,
        valor: 0
      }
    }; // inicializado
    this.idRangoMontoActual++;
    this.contadorFilasMontos++;
    this.rowsMontos.push(filaNuevaMontos);
    this.rowsMontos = [...this.rowsMontos];
    console.log('btn agregar');
    console.log(this.rowsMontos);
  }

  onRemoveRowPlazos(): void {
    console.log('onRemoveRowPlazos');
    this.selectedPlazos.forEach(childObj => {
      // @ts-ignore
      this.rowsPlazos.splice(childObj[1].nroFila, 1);
      console.log(childObj[1]);
      this.contadorFilasPlazos--;
    });
    this.rowsPlazos = [...this.rowsPlazos];
    this.selectedPlazos = [];
  }

  onRemoveRowMontos(): void {
    console.log('onRemoveRowMontos');
    this.selectedMontos.forEach(childObj => {
      // @ts-ignore
      this.rowsMontos.splice(childObj[1].nroFila, 1);
      console.log(childObj[1]);
      this.contadorFilasMontos--;
    });
    this.rowsMontos = [...this.rowsMontos];
    this.selectedMontos = [];
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

  onSave(): void {
    this.tasaEdit = false;

    const {idRol} = this.formF30;
    console.log('onSave');
    this.arrayRangoPlazos = this.parseMatrizPlazosF30(this.myDataPlazos.bodyComponent.rows);
    this.arrayRangoMontos = this.parseMatrizMontosF30(this.myDataMontos.bodyComponent.rows);
    console.log(this.arrayRangoPlazos);
    this.agfProviderService.getDataf30(
      this.idTipoTabla,
      idRol,
      this.contadorFilasMontos,
      this.contadorFilasPlazos,
      Number(this.idTipoMoneda),
      this.arrayRangoPlazos,
      this.arrayRangoMontos
    ).subscribe(
      data => {
        // @ts-ignore
        $('#modalMensaje').modal('show');
        $('#modalLabel').text('Actualización de Rangos');
        $('#modalTexto').text('Rangos Actualizados');
        console.log(data);
      },
      err => {
        console.log(err);
        // @ts-ignore
        // $('#sesionInvalida').modal('show');
      }
    );
  }

  parseMatrizPlazosF30(myDataPlazos: any[]): any[] {
    const arrPlazos: any[] = [];
    myDataPlazos.forEach(item => {
        // @ts-ignore
        const objetoF30: {
          idRangoPlazo: number;
          diasDesde: number;
          diasHasta: number;
        } = {};
        objetoF30.idRangoPlazo = Number(item[1].idRangoPlazo);
        objetoF30.diasDesde = item[1].valor;
        objetoF30.diasHasta = item[2].valor;
        arrPlazos.push(objetoF30);
    });
    console.log('resultado');
    return arrPlazos;
  }

  parseMatrizMontosF30(myDataMontos: any[]): any[] {
    const arrMontos: any[] = [];
    myDataMontos.forEach(item => {
      // @ts-ignore
      const objetoF30: {
        idRangoMonto: number;
        montoDesde: number;
        montoHasta: number;
      } = {};
      objetoF30.idRangoMonto = Number(item[1].idRangoMonto);
      objetoF30.montoDesde = item[1].valor;
      objetoF30.montoHasta = item[2].valor;
      arrMontos.push(objetoF30);
    });
    console.log('resultado');
    return arrMontos;
  }

}
