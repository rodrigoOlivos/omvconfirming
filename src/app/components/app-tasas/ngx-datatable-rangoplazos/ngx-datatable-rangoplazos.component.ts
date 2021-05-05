import {Component, Input} from '@angular/core';
import {ColumnMode, SelectionType} from '@swimlane/ngx-datatable';
import {NgxDataF29Service} from '../../../services/ngx-data-f29.service';
import {any} from 'codelyzer/util/function';
import {TokenStorageService} from '../../../services/token-storage.service';

@Component({
  selector: 'app-ngx-datatable-rangoplazos',
  templateUrl: './ngx-datatable-rangoplazos.component.html',
  styleUrls: ['./ngx-datatable-rangoplazos.component.scss']
})
export class NgxDatatableRangoplazosComponent {

  editing: any = {};
  rows: any[] = [];
  idTipoTabla = 12;
  public val1 = {};
  public val2 = { };
  preCargaRows: any[] = [];
  cargaRows: any = [];
  itemsRows = {};
  @Input()
  idTipoMoneda = 1;
  @Input()
  tasaEdit = true;
  loadingIndicator = false;
  columns: any;

  selected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor(private ngxDataF29Service: NgxDataF29Service) {
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

  updateValue(event: any, cell: any, rowIndex: any): void {
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
