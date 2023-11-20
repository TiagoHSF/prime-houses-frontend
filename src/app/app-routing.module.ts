import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './externo/cadastro/cadastro.component';
import { LoginComponent } from './externo/login/login.component';
import { DashboardCorretorComponent } from './interno/operacoes/dashboard/dashboard-corretor/dashboard-corretor.component';
import { GeoRelatorioComponent } from './interno/operacoes/geo-relatorio/geo-relatorio.component';
import { CriarImovelComponent } from './interno/operacoes/imoveis-corretor/criar-imovel/criar-imovel.component';
import { ImoveisComponent } from './interno/operacoes/imoveis-corretor/imoveis.component';
import { ListagemImoveisComponent } from './interno/visao-cliente/listagem-imoveis/listagem-imoveis.component';

const routes: Routes = [
  //CORRETOR
  { path: 'acesso', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'dashboard', component: DashboardCorretorComponent},
  { path: 'imoveis', component: ImoveisComponent},
  { path: 'imoveis/criar', component: CriarImovelComponent},
  { path: 'relatorio/geo', component: GeoRelatorioComponent},

  //CLIENTE
  { path: 'imoveis/listagem', component: ListagemImoveisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
