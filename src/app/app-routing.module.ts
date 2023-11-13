import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './externo/cadastro/cadastro.component';
import { LoginComponent } from './externo/login/login.component';
import { DashboardCorretorComponent } from './interno/dashboard/dashboard-corretor/dashboard-corretor.component';

const routes: Routes = [
  { path: 'acesso', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'dashboard', component: DashboardCorretorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
