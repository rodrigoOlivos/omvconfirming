import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AltaProveedoresComponent} from './alta-proveedores/alta-proveedores.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AltaProveedoresComponent,
  ],
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  exports: [
    AltaProveedoresComponent,
  ]
})

export class AppAltaDeProveedoresModule {
}
