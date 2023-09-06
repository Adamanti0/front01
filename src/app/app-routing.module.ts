import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './utils/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',     component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }