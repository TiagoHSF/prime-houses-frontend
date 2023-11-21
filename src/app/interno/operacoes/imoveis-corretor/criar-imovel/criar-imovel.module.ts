import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarImovelComponent } from './criar-imovel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputPadraoModule } from 'src/app/interno/components/input-padrao/input-padrao.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { BotaoPadraoModule } from 'src/app/interno/components/botao-padrao/botao-padrao.module';


@NgModule({
  declarations: [CriarImovelComponent],
  imports: [
    CommonModule,
    InputPadraoModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    BotaoPadraoModule
  ]
})
export class CriarImovelModule { }
