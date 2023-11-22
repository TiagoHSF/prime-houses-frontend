import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class ConstantesEndpointService {
    private base = 'constantes/';
  
    constructor(
      private _httpClient: HttpClient,
    ) {}

    public constantes(enumerator: string) {
        let params = new HttpParams();
        if (enumerator != null) {
          params = params.append('enumerator', `${enumerator}`);
        }
        return this._httpClient.get<string[]>(
          `http://localhost:8080/${this.base}enumerators`, {params}
        );
      }

  }