import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { BotaoPadraoModule } from '../../components/botao-padrao/botao-padrao.module';
import { CriarImovelComponent } from './criar-imovel/criar-imovel.component';




@NgModule({
  declarations: [
    CriarImovelComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    BotaoPadraoModule
  ]
})
export class ImoveisModule { }
