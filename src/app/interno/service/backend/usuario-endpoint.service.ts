import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioDTO } from "src/app/model/usuario-dto.model";
import { StorageService } from "../util/storage.service";

@Injectable({
  providedIn: 'root',
})
export class UsuarioEndpointService {

  private base = 'usuario/'

    constructor(
        private _httpClient: HttpClient,
        private _storageService: StorageService,
        private router: Router
      ) { }

    get token(): string | null {
        return this._storageService.localStorage.find('t');
      }
    
      set token(token: string) {
        this._storageService.localStorage.add('t', token);
      }

      public criarUsuario(usuarioDTO: UsuarioDTO){
        return this._httpClient.post<UsuarioDTO>(
          `http://localhost:8080/${this.base}criar`, usuarioDTO
        );
      
      }
}