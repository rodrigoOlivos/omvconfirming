import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
// tslint:disable-next-line:max-line-length
import {HtmlOfertasPorProveedorCursadasComponent} from './html-ofertas-por-proveedor-cursadas/html-ofertas-por-proveedor-cursadas.component';
import {HtmlOfertasPorProveedorLineaComponent} from './html-ofertas-por-proveedor-linea/html-ofertas-por-proveedor-linea.component';
import {HtmlOfertasPorProveedorPendientesComponent} from './html-ofertas-por-proveedor-pendientes/html-ofertas-por-proveedor-pendientes.component';
import {HtmlOfertasPorProveedorRechazadasComponent} from './html-ofertas-por-proveedor-rechazadas/html-ofertas-por-proveedor-rechazadas.component';
// tslint:disable-next-line:max-line-length
import {HtmlOfertasPorProveedorVigentesComponent} from './html-ofertas-por-proveedor-vigentes/html-ofertas-por-proveedor-vigentes.component';
import { NgxDatatableResumenComponent } from './ngx-datatable-resumen/ngx-datatable-resumen.component';
import { NgxDatatableOfertasComponent } from './ngx-datatable-ofertas/ngx-datatable-ofertas.component';
import { HtmlComboboxClienteComponent } from './html-combobox-cliente/html-combobox-cliente.component';
import { HtmlComboboxConvenioComponent } from './html-combobox-convenio/html-combobox-convenio.component';
import { HtmlInputRutComponent } from './html-input-rut/html-input-rut.component';

@NgModule({
  declarations: [
    HtmlOfertasPorProveedorCursadasComponent,
    HtmlOfertasPorProveedorLineaComponent,
    HtmlOfertasPorProveedorPendientesComponent,
    HtmlOfertasPorProveedorRechazadasComponent,
    HtmlOfertasPorProveedorVigentesComponent,
    NgxDatatableResumenComponent,
    NgxDatatableOfertasComponent,
    HtmlComboboxClienteComponent,
    HtmlComboboxConvenioComponent,
    HtmlInputRutComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
  ],
  exports: [
    HtmlOfertasPorProveedorCursadasComponent,
    HtmlOfertasPorProveedorLineaComponent,
    HtmlOfertasPorProveedorPendientesComponent,
    HtmlOfertasPorProveedorRechazadasComponent,
    HtmlOfertasPorProveedorVigentesComponent
  ]
})
export class AppOfertasPorProveedorModule {
}
