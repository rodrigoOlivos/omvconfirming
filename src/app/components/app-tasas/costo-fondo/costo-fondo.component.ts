import {Component, Input, OnInit, Output, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ComboMonedaService} from "../../../services/combo-moneda.service";
import {AgfProviderService} from "../../../services/agf-provider.service";
import {DatatableComponent, ColumnMode} from "@swimlane/ngx-datatable";
import {MatDialog} from "@angular/material/dialog";
import {Dialog1Component} from "../../dialog1/dialog1.component";

@Component({
  selector: 'app-costo-fondo',
  templateUrl: './costo-fondo.component.html',
  styleUrls: ['./costo-fondo.component.scss']
})
export class CostoFondoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private comboMonedaService: ComboMonedaService,
              private agfProvider: AgfProviderService,
              public dialog: MatDialog) {
    this.form = this.formBuilder.group({orders: ['']});
    comboMonedaService.getComboMonedaHttp().subscribe(
      data => {
        this.monedaServicio = data.arrayOfMoneda.rowMoneda;
      },
      err => {
        console.log(err);
        this.dialog.open(Dialog1Component, {
          data: {title: "Error", message: "¡Ocurrió un Error Inesperado!"}
        });
      });
    this.cargaTabla();
  }

  curdate = new Date();
  isLoggedIn = false;
  timestamp: any;
  rutempresa: any;
  rutpersona: any;
  nombreUsuario: any;

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
  resultadosrows = [];

  @ViewChild(DatatableComponent)
  myCostoFondo!: DatatableComponent;

  onChangeCombo(value: string): void {
    this.idTipoMoneda = Number(value);
    this.cargaTabla();
  }

  onSave(): void {
    this.tasaEdit = false;

    const {idTipoMat, idComprador, idProveedor} = this.formF33;
    this.arrayCostoFondo = this.parseMatrizF33(this.myCostoFondo.bodyComponent.rows);
    console.log(this.arrayCostoFondo);
    this.agfProvider.getDataf33(idTipoMat, Number(this.idTipoMoneda), idComprador, idProveedor, this.arrayCostoFondo).subscribe(
      data => {
        this.dialog.open(Dialog1Component, {
          data: {title: "Guardado de Datos", message: "Se han actualizado los cambios "}
        })
      },
      err => {
        console.log(err);
        this.dialog.open(Dialog1Component, {
          data: {title: "Error", message: "¡Ocurrió un Error Inesperado!"}
        });
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

  onValidaTmc(): void{
    this.agfProvider.getDataf71().toPromise().then(data => {
     let data71 = data.arrayOfRow71;
     let error = data.codigoError;
      if(error === 0 ){
       this.resultadosrows = data.arrayOfRow71;
        this.dialog.open(Dialog1Component, {
          data: {title: "Validación TMC", message: "la validación ha sido exitosa. "}
        })
      }else{
        this.dialog.open(Dialog1Component, {
          data: {title: "Error", message: data.textoError}
        })
      }
      },
      err => {
        console.log(err);
        this.dialog.open(Dialog1Component, {
          data: {title: "Error", message: "¡Ocurrió un Error Inesperado!"}
        });
      }
    );
  }
  generarOfertas(): void {
    this.agfProvider.getDataF58().toPromise().then(data => {
        this.dialog.open(Dialog1Component, {
          data: {title: "Generación de Ofertas", message: "Proceso de Generación Iniciado"}
        });
      },
      err => {
        console.log(err);
        this.dialog.open(Dialog1Component, {
          data: {title: "Error", message: "¡Ocurrió un Error Inesperado!"}
        });
      }
    );
  }

  cargaTabla(): void {
    this.cargaRows = [];
    this.columnaReferencia = [];
    this.encabezadoTabla = [];
    this.loadingIndicator = true;
    this.agfProvider.getDataf31(this.idTipoTabla, this.idTipoMoneda).toPromise().then(data => {
        this.columnaReferencia = data.arrayOfRow311.row311;
        this.encabezadoTabla = data.arrayOfRow312.row312;
        this.columnaReferencia.forEach((value) => {
          this.ordenColums[value.idRangoMonto] = '>' + value.montoDesde + ', <= ' + value.montoHasta;
        });
        this.agfProvider.getDataf32(this.idTipoTabla, 0, 0, this.idTipoMoneda).toPromise().then(data => {
            this.preCargaRows = data.arrayOfRow32.row32;
            this.timestamp = data.timestampUpdate;
            this.nombreUsuario = data.userUpdate;
            console.log('datos servicio carga');
            console.log(this.preCargaRows);
            const orden = this.ordenColums;
            let columnaref = 0;
            let columncount = 0;
            let rowcount = 2;
            let ciclo = 0;

            if (this.preCargaRows.length > 0) {
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
            } else {
              console.log("datos erroneos en blanco")
              console.log(this.encabezadoTabla)
              console.log(this.columnaReferencia)
              console.log(this.ordenColums)
              this.itemsRows = {};
              this.columnaReferencia.forEach((row) => {
                rowcount = 2;
                // @ts-ignore
                this.itemsRows[1] = orden[row.idRangoMonto];
                this.encabezadoTabla.forEach((col) => {
                  this.val = {};
                  // @ts-ignore
                  this.val.idRangoMonto = row.idRangoMonto;
                  // @ts-ignore
                  this.val.idRangoPlazo = col.idRangoPlazo;
                  // @ts-ignore
                  this.val.tasa = 0;
                  // @ts-ignore
                  this.itemsRows[rowcount] = this.val;
                  rowcount++;
                });
                this.cargaRows.push(this.itemsRows);
                this.itemsRows = {};
              });
              this.rows = this.cargaRows;
              this.rows = [...this.rows];
              setTimeout(() => {
                this.loadingIndicator = false;
              }, 500);
            }
          },
          err => {
            console.log(err);
            this.dialog.open(Dialog1Component, {
              data: {title: "Error", message: "¡Ocurrió un Error Inesperado!"}
            });
          });
      },
      err => {
        console.log(err);
        this.dialog.open(Dialog1Component, {
          data: {title: "Error", message: "¡Ocurrió un Error Inesperado!"}
        });
      }
    );
  }

}
