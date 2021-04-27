import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import {AdminUsuariosListadoComponent} from './admin-usuarios-listado/admin-usuarios-listado.component';

@NgModule({
  declarations: [
    AdminUsuariosListadoComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
  ],
  exports: [
    AdminUsuariosListadoComponent
  ]
})
export class AppAdminUsuariosModule {
}
