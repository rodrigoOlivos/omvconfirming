import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponentOld } from './pages/login/login.component';
import { LoginComponent } from './pages/login2/login.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';
import { BoardModeratorComponent } from './pages/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import {DemoComponent} from './pages/demo/demo.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'demo/signin', component: DemoComponent },
  { path: 'login-old', component: LoginComponentOld },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: AdministracionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
