import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableTasasComponent } from './ngx-datatable-tasas/ngx-datatable-tasas.component';
import { HtmlComboboxMonedaComponent } from './html-combobox-moneda/html-combobox-moneda.component';
import { HtmlLabelFechaactualizacionComponent } from './html-label-fechaactualizacion/html-label-fechaactualizacion.component';
import { HtmlLabelUsuarioComponent } from './html-label-usuario/html-label-usuario.component';
import { HtmlBotoneraTablatasasComponent } from './html-botonera-tablatasas/html-botonera-tablatasas.component';
import { NgxDatatableResultadoComponent } from './ngx-datatable-resultado/ngx-datatable-resultado.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import {CostoFondoComponent} from './costo-fondo/costo-fondo.component';
import { TmcComponent } from './tmc/tmc.component';

@NgModule({
  declarations: [
    NgxDatatableTasasComponent,
    HtmlComboboxMonedaComponent,
    HtmlLabelFechaactualizacionComponent,
    HtmlLabelUsuarioComponent,
    HtmlBotoneraTablatasasComponent,
    NgxDatatableResultadoComponent,
    CostoFondoComponent,
    TmcComponent
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
    CostoFondoComponent,
    TmcComponent
  ]
})
export class AdministracionModule { }
