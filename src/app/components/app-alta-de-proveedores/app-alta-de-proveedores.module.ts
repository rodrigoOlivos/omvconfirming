import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlLabelRutProveedoresComponent } from './html-label-rut-proveedores/html-label-rut-proveedores.component';
import { HtmlComboboxRazonSocialComponent } from './html-combobox-razon-social/html-combobox-razon-social.component';
import { HtmlBotonBuscarComponent } from './html-boton-buscar/html-boton-buscar.component';
import { HtmlLabelFechaUltimaActualizacionComponent } from './html-label-fecha-ultima-actualizacion/html-label-fecha-ultima-actualizacion.component';
import { NgxTablaAltaProveedoresComponent } from './ngx-tabla-alta-proveedores/ngx-tabla-alta-proveedores.component';
import { HtmlBotonGuardarComponent } from './html-boton-guardar/html-boton-guardar.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    HtmlLabelRutProveedoresComponent,
    HtmlComboboxRazonSocialComponent,
    HtmlBotonBuscarComponent,
    HtmlLabelFechaUltimaActualizacionComponent,
    NgxTablaAltaProveedoresComponent,
    HtmlBotonGuardarComponent
  ],
    imports: [
        CommonModule,
        NgxDatatableModule
    ],
  exports: [
    HtmlLabelRutProveedoresComponent,
    HtmlComboboxRazonSocialComponent,
    HtmlBotonBuscarComponent,
    HtmlLabelFechaUltimaActualizacionComponent,
    NgxTablaAltaProveedoresComponent,
    HtmlBotonGuardarComponent
  ]
})
export class AppAltaDeProveedoresModule { }
