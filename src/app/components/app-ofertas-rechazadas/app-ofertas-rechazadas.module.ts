import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import { HtmlInputRutComponent } from './html-input-rut/html-input-rut.component';
import { HtmlComboboxConvenioComponent } from './html-combobox-convenio/html-combobox-convenio.component';
import { NgxDatatableRechazadasComponent } from './ngx-datatable-rechazadas/ngx-datatable-rechazadas.component';

@NgModule({
  declarations: [
    HtmlInputRutComponent,
       HtmlComboboxConvenioComponent,
       NgxDatatableRechazadasComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
  ],
  exports: []
})
export class AppOfertasRechazadasModule {
}
