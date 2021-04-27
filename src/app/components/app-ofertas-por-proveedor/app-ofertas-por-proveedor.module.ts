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

@NgModule({
  declarations: [
    HtmlOfertasPorProveedorCursadasComponent,
    HtmlOfertasPorProveedorLineaComponent,
    HtmlOfertasPorProveedorPendientesComponent,
    HtmlOfertasPorProveedorRechazadasComponent,
    HtmlOfertasPorProveedorVigentesComponent
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
