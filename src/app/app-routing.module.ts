import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './externo/cadastro/cadastro.component';
import { LoginComponent } from './externo/login/login.component';
import { DashboardCorretorComponent } from './interno/operacoes/dashboard/dashboard-corretor/dashboard-corretor.component';
import { ImoveisComponent } from './interno/operacoes/imoveis-corretor/imoveis.component';

const routes: Routes = [
  { path: 'acesso', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'dashboard', component: DashboardCorretorComponent},
  { path: 'imoveis', component: ImoveisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
