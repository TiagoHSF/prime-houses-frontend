import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ImovelResumoDTO } from 'src/app/model/imovel-resumo-dto.model';
import { PageResponse } from 'src/app/model/page-response.model';
import Swal from 'sweetalert2';
import { ImovelCorretorEndpointService } from '../../service/backend/imovel-corretor-endpoint.service';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss'],
})
export class ImoveisComponent implements OnInit {
  public imoveis!: PageResponse<ImovelResumoDTO>;

  displayedColumns: string[] = [
    'opcoes',
    'codigo',
    'titulo',
    'valor',
    'seloVerificado',
    'status',
  ];
  dataSource: ImovelResumoDTO[] = [];

  constructor(private _imovelEndpointService: ImovelCorretorEndpointService,
    private _router: Router) {}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this._imovelEndpointService
      .listar({ page: 0, size: 10, order: '' }, 1)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.imoveis = data;
          this.dataSource = data.content || [];
        },
        error: (error) => {},
      });
  }

  editar(id: number) {}

  excluir(imovel: ImovelResumoDTO) {
    Swal.fire({
      title: 'Atenção!',
      text: `Deseja excluir o imóvel ${imovel.titulo}?`,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "EXCLUIR",
      cancelButtonText: "CANCELAR"
    }).then((value) => {
      if (value.isConfirmed) {
        this._imovelEndpointService
          .excluir(imovel.id)
          .pipe(take(1))
          .subscribe({
            next: (data) => {
              Swal.fire({
                title: 'Sucesso!',
                text: `Imóvel excluído!`,
                icon: 'success',
                showConfirmButton: true,
              });
              this.pesquisar();
            }, error: (error) => {
              Swal.fire({
                title: 'Ops!',
                text: `${error.error}`,
                icon: 'error',
                showConfirmButton: true,
              })
            }
          });
      }
    });
  }

  criarImovel(){
    this._router.navigateByUrl('imoveis/criar')
  }
}
