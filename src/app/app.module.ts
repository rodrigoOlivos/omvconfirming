import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginOldComponent } from './pages/profile/login-old/login.component';
import { LoginComponent } from './pages/profile/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { IndicadoresComponent } from './pages/indicadores/indicadores.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

import { RegisterComponent } from './pages/profile/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardAdminComponent } from './pages/profile/board-admin/board-admin.component';
import { BoardModeratorComponent } from './pages/profile/board-moderator/board-moderator.component';
import { BoardUserComponent } from './pages/profile/board-user/board-user.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import {CookieService} from 'ngx-cookie-service';
import {TasasComponent} from './pages/administracion/tasas/tasas.component';
import {HeaderLayoutComponent} from './components/header-layout/header-layout.component';
import {FooterLayoutComponent} from './components/footer-layout/footer-layout.component';
import {TitleLayoutComponent} from './components/title-layout/title-layout.component';
import {PanelComponent} from './pages/administracion/panel/panel.component';
import {AltaComponent} from './pages/administracion/alta/alta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { TablaComponent } from './components/tabla/tabla.component';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AcercaDeComponent } from './pages/ayuda/acerca-de/acerca-de.component';
import { NominasComponent } from './pages/operaciones/nominas/nominas.component';
import { RecaudacionCobranzaComponent } from './pages/operaciones/recaudacion-cobranza/recaudacion-cobranza.component';
import {AdminUsuariosComponent} from './pages/usuarios/admin-usuarios/admin-usuarios.component';
import {OfertasPendientesComponent} from './pages/consulta/ofertas-pendientes/ofertas-pendientes.component';
import {OfertasRechazadasComponent} from './pages/consulta/ofertas-rechazadas/ofertas-rechazadas.component';
import {OfertasPorProveedorComponent} from './pages/consulta/ofertas-por-proveedor/ofertas-por-proveedor.component';
import {TipoCambioComponent} from './pages/indicadores/tipo-cambio/tipo-cambio.component';
import {TablaJqueryComponent} from './components/tabla-jquery/tabla-jquery.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AdministracionComponent,
    ConsultaComponent,
    IndicadoresComponent,
    UsuariosComponent,
    LoginOldComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    TasasComponent,
    TitleLayoutComponent,
    FooterLayoutComponent,
    HeaderLayoutComponent,
    PanelComponent,
    AltaComponent,
    TablaComponent,
    DashboardComponent,
    AcercaDeComponent,
    NominasComponent,
    RecaudacionCobranzaComponent,
    AdminUsuariosComponent,
    OfertasPendientesComponent,
    OfertasRechazadasComponent,
    OfertasPorProveedorComponent,
    TipoCambioComponent,
    TablaJqueryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    HeaderLayoutComponent,
    TitleLayoutComponent,
    NavbarComponent,
    FooterLayoutComponent,
    TasasComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [CookieService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
