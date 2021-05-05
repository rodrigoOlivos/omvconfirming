import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDatatableTasasComponent} from './ngx-datatable-tasas/ngx-datatable-tasas.component';
import {NgxDatatableResultadoComponent} from './ngx-datatable-resultado/ngx-datatable-resultado.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import {CostoFondoComponent} from './costo-fondo/costo-fondo.component';
import {TmcComponent} from './tmc/tmc.component';

@NgModule({
  declarations: [
    NgxDatatableTasasComponent,
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
    NgxDatatableResultadoComponent,
    CostoFondoComponent,
    TmcComponent
  ]
})

export class AdministracionModule {
}
