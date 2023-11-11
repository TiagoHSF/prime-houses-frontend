import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './externo/cadastro/cadastro.component';
import { LoginComponent } from './externo/login/login.component';

const routes: Routes = [
  { path: 'acesso', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
