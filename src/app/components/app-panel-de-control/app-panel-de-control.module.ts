import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlComboboxMonedaPanelComponent } from './html-combobox-moneda-panel/html-combobox-moneda-panel.component';
import { HtmlTextUltimaActualizacionPanelComponent } from './html-text-ultima-actualizacion-panel/html-text-ultima-actualizacion-panel.component';
import { HtmlTextUsuarioPanelComponent } from './html-text-usuario-panel/html-text-usuario-panel.component';
import { NgxTablaCostoFondoComponent } from './ngx-tabla-costo-fondo/ngx-tabla-costo-fondo.component';
import { HtmlComboboxClientePanelComponent } from './html-combobox-cliente-panel/html-combobox-cliente-panel.component';
import { HtmlComboboxConvenioPanelComponent } from './html-combobox-convenio-panel/html-combobox-convenio-panel.component';
import { NgxTablaSpreadClienteComponent } from './ngx-tabla-spread-cliente/ngx-tabla-spread-cliente.component';
import { HtmlBotoneraMatrizSpreadClienteComponent } from './html-botonera-matriz-spread-cliente/html-botonera-matriz-spread-cliente.component';
import { NgxTablaSpreadProveedorComponent } from './ngx-tabla-spread-proveedor/ngx-tabla-spread-proveedor.component';
import { HtmlBotoneraMatrizSpreadProveedorComponent } from './html-botonera-matriz-spread-proveedor/html-botonera-matriz-spread-proveedor.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { TabTasasMatrizCostofondoComponent } from './tab-tasas-matriz-costofondo/tab-tasas-matriz-costofondo.component';
import { TabTasasMatrizClienteComponent } from './tab-tasas-matriz-cliente/tab-tasas-matriz-cliente.component';
import { TabTasasSpreadProveedorComponent } from './tab-tasas-spread-proveedor/tab-tasas-spread-proveedor.component';
import { TabTasasListaNegraComponent } from './tab-tasas-lista-negra/tab-tasas-lista-negra.component';
import { TabConvenioClienteComponent } from './tab-convenio-cliente/tab-convenio-cliente.component';

@NgModule({
  declarations: [
    HtmlComboboxMonedaPanelComponent,
    HtmlTextUltimaActualizacionPanelComponent,
    HtmlTextUsuarioPanelComponent,
    NgxTablaCostoFondoComponent,
    HtmlComboboxClientePanelComponent,
    HtmlComboboxConvenioPanelComponent,
    NgxTablaSpreadClienteComponent,
    HtmlBotoneraMatrizSpreadClienteComponent,
    NgxTablaSpreadProveedorComponent,
    HtmlBotoneraMatrizSpreadProveedorComponent,
    TabTasasMatrizCostofondoComponent,
    TabTasasMatrizClienteComponent,
    TabTasasSpreadProveedorComponent,
    TabTasasListaNegraComponent,
    TabConvenioClienteComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  exports: [
    HtmlComboboxMonedaPanelComponent,
    HtmlTextUltimaActualizacionPanelComponent,
    HtmlTextUsuarioPanelComponent,
    NgxTablaCostoFondoComponent,
    HtmlComboboxClientePanelComponent,
    HtmlComboboxConvenioPanelComponent,
    NgxTablaSpreadClienteComponent,
    HtmlBotoneraMatrizSpreadClienteComponent,
    NgxTablaSpreadProveedorComponent,
    HtmlBotoneraMatrizSpreadProveedorComponent
  ]
})
export class AppPanelDeControlModule { }
