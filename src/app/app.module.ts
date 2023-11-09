import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './externo/cadastro/cadastro.component';
import { EsqueciSenhaComponent } from './externo/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './externo/login/login.component';
import { BotaoPadraoComponent } from './interno/components/botao-padrao/botao-padrao.component';
import { InputPadraoComponent } from './interno/components/input-padrao/input-padrao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    CadastroComponent,
    BotaoPadraoComponent,
    InputPadraoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
