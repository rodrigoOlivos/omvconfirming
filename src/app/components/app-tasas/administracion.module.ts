import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import {CostoFondoComponent} from './costo-fondo/costo-fondo.component';
import {TmcComponent} from './tmc/tmc.component';

@NgModule({
  declarations: [
    CostoFondoComponent,
    TmcComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
  ],
  exports: [
    CostoFondoComponent,
    TmcComponent
  ]
})

export class AdministracionModule {
}
