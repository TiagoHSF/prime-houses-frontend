import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { FileUploadModule } from 'primeng/fileupload';
import { BotaoPadraoModule } from 'src/app/interno/components/botao-padrao/botao-padrao.module';
import { InputPadraoModule } from 'src/app/interno/components/input-padrao/input-padrao.module';
import { CriarImovelComponent } from './criar-imovel.component';


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
    BotaoPadraoModule,
    MatStepperModule,
    FileUploadModule
  ]
})
export class CriarImovelModule { }
