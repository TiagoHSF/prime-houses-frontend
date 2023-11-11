import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "../util/storage.service";

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoEndpointService {
    private base = "auth/"

    constructor(
        private _httpClient: HttpClient,
        private _storageService: StorageService,
        private router: Router
      ) { }

      public login(credentials: {email?: string, senha?: string}) {
        return this._httpClient.post<string>(`http://localhost:8080/${this.base}login`, credentials)
      }

      public logout() {
        this._storageService.localStorage.removeAll();
        this.router.navigateByUrl('/acesso');
      }
}