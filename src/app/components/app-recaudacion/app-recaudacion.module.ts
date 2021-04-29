import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import {HtmlRecaudacionCobranzaDetalleComponent} from './html-recaudacion-cobranza-detalle/html-recaudacion-cobranza-detalle.component';
import {HtmlRecaudacionCobranzaProximosComponent} from './html-recaudacion-cobranza-proximos/html-recaudacion-cobranza-proximos.component';
import {HtmlComboboxClienteComponent} from './html-combobox-cliente/html-combobox-cliente.component';
import {HtmlComboboxConvenioComponent} from './html-combobox-convenio/html-combobox-convenio.component';
import {HtmlInputRutComponent} from './html-input-rut/html-input-rut.component';
import {HtmlInputLineaAutorizComponent} from './html-input-linea-autoriz/html-input-linea-autoriz.component';
import {HtmlInputLineaUtilizaComponent} from './html-input-linea-utiliza/html-input-linea-utiliza.component';
import {HtmlInputLineaDisponiComponent} from './html-input-linea-disponi/html-input-linea-disponi.component';
import {HtmlInputInteresMoraComponent} from './html-input-interes-mora/html-input-interes-mora.component';
import {HtmlInputDeudaExigComponent} from './html-input-deuda-exig/html-input-deuda-exig.component';
import {HtmlInputSpreadMoraComponent} from './html-input-spread-mora/html-input-spread-mora.component';
import {HtmlInputSpreadProrrComponent} from './html-input-spread-prorr/html-input-spread-prorr.component';
import {HtmlInputTipoProrrComponent} from './html-input-tipo-prorr/html-input-tipo-prorr.component';
import {NgxDatatableRecaudacionComponent} from './ngx-datatable-recaudacion/ngx-datatable-recaudacion.component';
import {NgxDatatableProxCobrosComponent} from './ngx-datatable-prox-cobros/ngx-datatable-prox-cobros.component';

@NgModule({
  declarations: [
    HtmlComboboxClienteComponent,
    HtmlComboboxConvenioComponent,
    HtmlInputRutComponent,
    HtmlInputLineaAutorizComponent,
    HtmlInputLineaUtilizaComponent,
    HtmlInputLineaDisponiComponent,
    HtmlInputInteresMoraComponent,
    HtmlInputDeudaExigComponent,
    HtmlInputSpreadMoraComponent,
    HtmlInputSpreadProrrComponent,
    HtmlInputTipoProrrComponent,
    HtmlRecaudacionCobranzaDetalleComponent,
    HtmlRecaudacionCobranzaProximosComponent,
    NgxDatatableRecaudacionComponent,
    NgxDatatableProxCobrosComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
  ],
  exports: [
    HtmlComboboxClienteComponent,
    HtmlComboboxConvenioComponent,
    HtmlInputRutComponent,
    HtmlInputLineaAutorizComponent,
    HtmlInputLineaUtilizaComponent,
    HtmlInputLineaDisponiComponent,
    HtmlInputInteresMoraComponent,
    HtmlInputDeudaExigComponent,
    HtmlInputSpreadMoraComponent,
    HtmlInputSpreadProrrComponent,
    HtmlInputTipoProrrComponent,
    HtmlRecaudacionCobranzaDetalleComponent,
    HtmlRecaudacionCobranzaProximosComponent,
    NgxDatatableRecaudacionComponent,
    NgxDatatableProxCobrosComponent
  ]
})
export class AppRecaudacionModule {
}
