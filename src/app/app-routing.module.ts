import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './pages/profile/register/register.component';
import { LoginOldComponent } from './pages/profile/login/login.component';
import { LoginComponent } from './pages/profile/login2/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardUserComponent } from './pages/profile/board-user/board-user.component';
import { BoardModeratorComponent } from './pages/profile/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './pages/profile/board-admin/board-admin.component';
import {AuthGuard} from './auth.guard';
import {TasasComponent} from './pages/administracion/tasas/tasas.component';
import {PanelComponent} from './pages/administracion/panel/panel.component';
import {AltaComponent} from './pages/administracion/alta/alta.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AdminUsuariosComponent} from './pages/usuarios/admin-usuarios/admin-usuarios.component';
import {AcercaDeComponent} from './pages/ayuda/acerca-de/acerca-de.component';
import {TipoCambioComponent} from './pages/indicadores/tipo-cambio/tipo-cambio.component';
import {OfertasPorProveedorComponent} from './pages/consulta/ofertas-por-proveedor/ofertas-por-proveedor.component';
import {OfertasPendientesComponent} from './pages/consulta/ofertas-pendientes/ofertas-pendientes.component';
import {OfertasRechazadasComponent} from './pages/consulta/ofertas-rechazadas/ofertas-rechazadas.component';
import {NominasComponent} from './pages/operaciones/nominas/nominas.component';
import {RecaudacionCobranzaComponent} from './pages/operaciones/recaudacion-cobranza/recaudacion-cobranza.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'login-old', component: LoginOldComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: DashboardComponent, canActivate: [AuthGuard] },

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // Administración
  { path: 'tasas', component: TasasComponent, canActivate: [AuthGuard] },
  { path: 'panel', component: PanelComponent, canActivate: [AuthGuard] },
  { path: 'alta', component: AltaComponent, canActivate: [AuthGuard] },
  // Operaciones
  { path: 'nominas', component: NominasComponent, canActivate: [AuthGuard] },
  { path: 'recaudacion-cobranza', component: RecaudacionCobranzaComponent, canActivate: [AuthGuard] },
  // Consultas
  { path: 'ofertas-rechazadas', component: OfertasRechazadasComponent, canActivate: [AuthGuard] },
  { path: 'ofertas-pendientes', component: OfertasPendientesComponent, canActivate: [AuthGuard] },
  { path: 'ofertas-por-proveedor', component: OfertasPorProveedorComponent, canActivate: [AuthGuard] },
  // Indicadores
  { path: 'tipo-cambio', component: TipoCambioComponent, canActivate: [AuthGuard] },
  // Usuarios
  { path: 'admin-usuarios', component: AdminUsuariosComponent, canActivate: [AuthGuard] },
  // Ayuda
  // { path: 'acerca-de', component: AcercaDeComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'user', component: BoardUserComponent, canActivate: [AuthGuard] },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
