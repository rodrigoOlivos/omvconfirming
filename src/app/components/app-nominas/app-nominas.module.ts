import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import {HtmlComboboxClienteComponent} from './html-combobox-cliente/html-combobox-cliente.component';
import {HtmlComboboxConvenioComponent} from './html-combobox-convenio/html-combobox-convenio.component';
import {HtmlInputCanalDeCargaComponent} from './html-input-canal-de-carga/html-input-canal-de-carga.component';
import {HtmlInputRutComponent} from './html-input-rut/html-input-rut.component';
import {HtmlInputRazonSocialComponent} from './html-input-razon-social/html-input-razon-social.component';
import {HtmlInputNombreFantasiaComponent} from './html-input-nombre-fantasia/html-input-nombre-fantasia.component';
import {HtmlInputFormatoComponent} from './html-input-formato/html-input-formato.component';
import {HtmlNominasCargasComponent} from './html-nominas-cargas/html-nominas-cargas.component';
import {HtmlNominasNominasComponent} from './html-nominas-nominas/html-nominas-nominas.component';
import {NgxDatatableNominasComponent} from './ngx-datatable-nominas/ngx-datatable-nominas.component';
import {NgxDatatableCargasComponent} from './ngx-datatable-cargas/ngx-datatable-cargas.component';
import {HtmlLabelFechaUltActComponent} from './html-label-fecha-ult-act/html-label-fecha-ult-act.component';
import {HtmlLabelUsuarioComponent} from './html-label-usuario/html-label-usuario.component';

@NgModule({
  declarations: [
    HtmlComboboxClienteComponent,
    HtmlComboboxConvenioComponent,
    HtmlInputCanalDeCargaComponent,
    HtmlInputRutComponent,
    HtmlInputRazonSocialComponent,
    HtmlInputNombreFantasiaComponent,
    HtmlInputFormatoComponent,
    HtmlNominasCargasComponent,
    HtmlNominasNominasComponent,
    NgxDatatableNominasComponent,
    NgxDatatableCargasComponent,
    HtmlLabelFechaUltActComponent,
    HtmlLabelUsuarioComponent,
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
  ],
  exports: [
    HtmlComboboxClienteComponent,
    HtmlComboboxConvenioComponent,
    HtmlInputCanalDeCargaComponent,
    HtmlInputRutComponent,
    HtmlInputRazonSocialComponent,
    HtmlInputNombreFantasiaComponent,
    HtmlInputFormatoComponent,
    HtmlNominasCargasComponent,
    HtmlNominasNominasComponent,
    NgxDatatableNominasComponent,
    NgxDatatableCargasComponent,
  ]
})
export class AppNominasModule {
}
