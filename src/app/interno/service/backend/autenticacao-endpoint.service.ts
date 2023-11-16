import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from 'src/app/model/usuario-dto.model';
import { StorageService } from '../util/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoEndpointService {
  private base = 'auth/';

  constructor(
    private _httpClient: HttpClient,
    private _storageService: StorageService,
    private router: Router
  ) {}

  public login(credentials: { email?: string; senha?: string }) {
    return this._httpClient.post<string>(
      `http://localhost:8080/${this.base}login`,
      credentials
    );
  }

  public findUserByToken(token: string) {
    let params = new HttpParams();
    if (token) {
      params = params.append('token', `${token}`);
    }
    return this._httpClient.get<UsuarioDTO>(
      `http://localhost:8080/${this.base}find-usuario`,
      {}
    );
  }

  public logout() {
    this._storageService.localStorage.removeAll();
    this.router.navigateByUrl('/acesso');
  }
}
