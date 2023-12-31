import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ImovelDTO } from 'src/app/model/imovel-dto.model';
import { ImovelResumoDTO } from 'src/app/model/imovel-resumo-dto.model';
import { PageResponse } from 'src/app/model/page-response.model';
import { StorageService } from '../util/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ImovelCorretorEndpointService {
  private base = 'corretor/imoveis/';

  constructor(
    private _httpClient: HttpClient,
    private _storageService: StorageService,
    private router: Router
  ) {}

  public listar(
    arg: { page: number; size: number; order: string },
    empresaId: number
  ) {
    let params = new HttpParams();
    if (arg.page != null) {
      params = params.append('page', `${arg.page}`);
    }
    if (arg.size != null) {
      params = params.append('size', `${arg.size}`);
    }
    if (arg.order != null) {
      params = params.append('order', `${arg.order}`);
    }
    if (empresaId != null) {
      params = params.append('empresaId', `${empresaId}`);
    }
    return this._httpClient.get<PageResponse<ImovelResumoDTO>>(
      `http://localhost:8080/${this.base}listar`,
      { params }
    );
  }

  public excluir(id: number) {
    let params = new HttpParams();
    if (id != null) {
      params = params.append('id', `${id}`);
    }
    return this._httpClient.delete(
      `http://localhost:8080/${this.base}excluir`, {params}
    );
  }

  public criar(
    imovelDTO: ImovelDTO,
  ) {
    let params = new HttpParams();
    // if (imovelDTO.corretorId != null) {
      params = params.append('corretorId', `${2}`);
    // }
    return this._httpClient.post<ImovelDTO>(
      `http://localhost:8080/${this.base}criar`, imovelDTO, { params }
    );
  }
}
