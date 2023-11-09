import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BotaoPadraoModule } from 'src/app/interno/components/botao-padrao/botao-padrao.module';
import { InputPadraoModule } from 'src/app/interno/components/input-padrao/input-padrao.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BotaoPadraoModule,
    InputPadraoModule,
    FlexLayoutModule,
    MatCheckboxModule
  ]
})
export class LoginModule { }
