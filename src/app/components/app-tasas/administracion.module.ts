import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableTasasComponent } from './ngx-datatable-tasas/ngx-datatable-tasas.component';
import { HtmlComboboxMonedaComponent } from './html-combobox-moneda/html-combobox-moneda.component';
import { HtmlLabelFechaactualizacionComponent } from './html-label-fechaactualizacion/html-label-fechaactualizacion.component';
import { HtmlLabelUsuarioComponent } from './html-label-usuario/html-label-usuario.component';
import { HtmlBotoneraTablatasasComponent } from './html-botonera-tablatasas/html-botonera-tablatasas.component';
import { NgxDatatableResultadoComponent } from './ngx-datatable-resultado/ngx-datatable-resultado.component';
import { NgxDatatableTmcComponent } from './ngx-datatable-tmc/ngx-datatable-tmc.component';
import { HtmlBotoneraTmcComponent } from './html-botonera-tmc/html-botonera-tmc.component';
import { HtmlComboboxTipomatrizComponent } from './html-combobox-tipomatriz/html-combobox-tipomatriz.component';
import { HtmlBotoneraMatrizguardarComponent } from './html-botonera-matrizguardar/html-botonera-matrizguardar.component';
import { NgxDatatableRangoplazosComponent } from './ngx-datatable-rangoplazos/ngx-datatable-rangoplazos.component';
import { NgxDatatableRangomontosComponent } from './ngx-datatable-rangomontos/ngx-datatable-rangomontos.component';
import { HtmlBotoneraTablasmatrizComponent } from './html-botonera-tablasmatriz/html-botonera-tablasmatriz.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    NgxDatatableTasasComponent,
    HtmlComboboxMonedaComponent,
    HtmlLabelFechaactualizacionComponent,
    HtmlLabelUsuarioComponent,
    HtmlBotoneraTablatasasComponent,
    NgxDatatableResultadoComponent,
    NgxDatatableTmcComponent,
    HtmlBotoneraTmcComponent,
    HtmlComboboxTipomatrizComponent,
    HtmlBotoneraMatrizguardarComponent,
    NgxDatatableRangoplazosComponent,
    NgxDatatableRangomontosComponent,
    HtmlBotoneraTablasmatrizComponent
  ],
    imports: [
        CommonModule,
        NgxDatatableModule,
        FormsModule,
    ],
  exports: [
    NgxDatatableTasasComponent,
    HtmlComboboxMonedaComponent,
    HtmlLabelFechaactualizacionComponent,
    HtmlLabelUsuarioComponent,
    HtmlBotoneraTablatasasComponent,
    NgxDatatableResultadoComponent,
    NgxDatatableTmcComponent,
    HtmlBotoneraTmcComponent,
    HtmlComboboxTipomatrizComponent,
    HtmlBotoneraMatrizguardarComponent,
    NgxDatatableRangoplazosComponent,
    NgxDatatableRangomontosComponent,
    HtmlBotoneraTablasmatrizComponent
  ]
})
export class AdministracionModule { }
