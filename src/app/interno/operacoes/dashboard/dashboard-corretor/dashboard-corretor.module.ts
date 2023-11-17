import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ChartModule } from 'primeng/chart';
import { BotaoPadraoModule } from '../../../components/botao-padrao/botao-padrao.module';
import { DashboardCorretorComponent } from './dashboard-corretor.component';



@NgModule({
  declarations: [DashboardCorretorComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    BotaoPadraoModule,
    ChartModule
  ]
})
export class DashboardCorretorModule { }
