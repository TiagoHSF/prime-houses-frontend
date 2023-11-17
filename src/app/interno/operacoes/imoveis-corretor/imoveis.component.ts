import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ImovelResumoDTO } from 'src/app/model/imovel-resumo-dto.model';
import { PageResponse } from 'src/app/model/page-response.model';
import { ImovelCorretorEndpointService } from '../../service/backend/imovel-corretor-endpoint.service';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss']
})
export class ImoveisComponent implements OnInit {

  public imoveis!: PageResponse<ImovelResumoDTO>;

  displayedColumns: string[] = ['opcoes', 'codigo', 'titulo', 'valor', 'seloVerificado', 'status'];
  dataSource: ImovelResumoDTO[] = [];

  constructor(private _imovelEndpointService: ImovelCorretorEndpointService){
    
  }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(){
    this._imovelEndpointService.listar({page: 0, size: 10, order: ""}, 1)
      .pipe(take(1)).subscribe({
        next: (data) => {
          this.imoveis = data;
          this.dataSource = data.content || [];
        }, error: (error) => {
        
        }
      })
  }

}
