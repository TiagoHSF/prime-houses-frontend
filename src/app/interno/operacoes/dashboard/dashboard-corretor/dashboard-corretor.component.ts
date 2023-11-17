import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-corretor',
  templateUrl: './dashboard-corretor.component.html',
  styleUrls: ['./dashboard-corretor.component.scss']
})
export class DashboardCorretorComponent implements OnInit {

  basicData: any;

  basicOptions: any;

  public dashboard = {
    totalVendasBrutas: 798,
    totalComissoes: 432,
    imoveisFinalizados: 2,
    documentosPendentesAssinatura: 5,
    quantidadePossiveisCompradores: 13,
    quantidadeImoveisProcessoCompra: 1,
    vistoriasEmAndamento: 5
  }

  constructor(private _router: Router){

  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicData = {
            labels: ['CASAS', 'APARTAMENTOS', 'KITNETS', 'LOFTS'],
            datasets: [
                {
                    label: 'CASAS',
                    data: [540, 325, 702, 620, 123, 5431, 231],
                    backgroundColor: ['#e14a8d', '#d85392', '#855bc1', '#6431af'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                    borderWidth: 1
                }
            ],
        };

        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
  

  navigateImoveis(){
    this._router.navigateByUrl("imoveis")
  }

}
