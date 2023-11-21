import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './externo/cadastro/cadastro.component';
import { EsqueciSenhaComponent } from './externo/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './externo/login/login.component';
import { BotaoPadraoComponent } from './interno/components/botao-padrao/botao-padrao.component';
import { InputPadraoComponent } from './interno/components/input-padrao/input-padrao.component';
import { SidebarComponent } from './interno/components/sidebar/sidebar.component';
import { DashboardCorretorComponent } from './interno/operacoes/dashboard/dashboard-corretor/dashboard-corretor.component';
import { GeoRelatorioComponent } from './interno/operacoes/geo-relatorio/geo-relatorio.component';
import { ImoveisComponent } from './interno/operacoes/imoveis-corretor/imoveis.component';
import { HttpsRequestInterceptor } from './interno/service/http-request.interceptor';
import { ListagemImoveisComponent } from './interno/visao-cliente/listagem-imoveis/listagem-imoveis.component';
import { NavbarComponent } from './interno/components/navbar/navbar.component';
import { CriarImovelComponent } from './interno/operacoes/imoveis-corretor/criar-imovel/criar-imovel.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    CadastroComponent,
    BotaoPadraoComponent,
    InputPadraoComponent,
    SidebarComponent,
    DashboardCorretorComponent,
    ImoveisComponent,
    GeoRelatorioComponent,
    ListagemImoveisComponent,
    NavbarComponent,
    CriarImovelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatCardModule,
    ChartModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { 

  constructor(){
    registerLocaleData(localePt);
  }

}
