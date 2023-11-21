import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { BotaoPadraoModule } from '../../components/botao-padrao/botao-padrao.module';
import { CriarImovelComponent } from './criar-imovel/criar-imovel.component';
import { InputPadraoModule } from '../../components/input-padrao/input-padrao.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImoveisComponent } from './imoveis.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    ImoveisComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    BotaoPadraoModule,
  ]
})
export class ImoveisModule { }
