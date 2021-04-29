import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import { HtmlComboboxConvenioComponent } from './html-combobox-convenio/html-combobox-convenio.component';
import { HtmlInputRutComponent } from './html-input-rut/html-input-rut.component';
import { NgxDatatablePendientesComponent } from './ngx-datatable-pendientes/ngx-datatable-pendientes.component';
import { NgxDatatableDocOfertasComponent } from './ngx-datatable-doc-ofertas/ngx-datatable-doc-ofertas.component';

@NgModule({
  declarations: [
  
    HtmlComboboxConvenioComponent,
       HtmlInputRutComponent,
       NgxDatatablePendientesComponent,
       NgxDatatableDocOfertasComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
  ],
  exports: []
})
export class AppOfertasPendientesModule {
}
