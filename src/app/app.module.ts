import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { IndicadoresComponent } from './pages/indicadores/indicadores.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AdministracionComponent,
    ConsultaComponent,
    IndicadoresComponent,
    UsuariosComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
