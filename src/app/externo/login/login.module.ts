import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BotaoPadraoModule } from 'src/app/interno/components/botao-padrao/botao-padrao.module';
import { InputPadraoModule } from 'src/app/interno/components/input-padrao/input-padrao.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BotaoPadraoModule,
    InputPadraoModule,
    FlexLayoutModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class LoginModule { }
