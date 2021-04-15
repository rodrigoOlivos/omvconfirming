import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginOldComponent } from './pages/login/login.component';
import { LoginComponent } from './pages/login2/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { IndicadoresComponent } from './pages/indicadores/indicadores.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { BoardModeratorComponent } from './pages/board-moderator/board-moderator.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { DemoComponent } from './pages/demo/demo.component';
import {CookieService} from 'ngx-cookie-service';
import {TasasComponent} from './pages/administracion/tasas/tasas.component';
import {HeaderLayoutComponent} from './components/header-layout/header-layout.component';
import {FooterLayoutComponent} from './components/footer-layout/footer-layout.component';
import {TitleLayoutComponent} from './components/title-layout/title-layout.component';

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
    DashboardComponent,
    LoginOldComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    DemoComponent,
    TasasComponent,
    TitleLayoutComponent,
    FooterLayoutComponent,
    HeaderLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    HeaderLayoutComponent,
    TitleLayoutComponent,
    NavbarComponent,
    FooterLayoutComponent,
    TasasComponent,

  ],
  providers: [CookieService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
