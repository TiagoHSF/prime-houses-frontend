import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BotaoPadraoComponent } from './botao-padrao.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [BotaoPadraoComponent],
})
export class BotaoPadraoModule { }
