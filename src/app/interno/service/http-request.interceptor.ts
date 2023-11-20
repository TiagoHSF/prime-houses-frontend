import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AutenticacaoEndpointService } from './backend/autenticacao-endpoint.service';
import { UsuarioEndpointService } from './backend/usuario-endpoint.service';
import { StorageService } from './util/storage.service';

@Injectable({
  providedIn: 'root',
})
export class HttpsRequestInterceptor implements HttpInterceptor {
  cache: {
    [url: string]: {
      createAt: Date;
      response: HttpEvent<any>;
    };
  } = {};

  constructor(
    private _router: Router,
    private _usuarioEndpointService: UsuarioEndpointService,
    private _autenticacaoEndpointService: AutenticacaoEndpointService,
    private _storageService: StorageService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    console.log("tESTE")
    let copia: HttpRequest<any>;

    copia = req.clone({
      url: `${req.url}`,
    });

    if(!copia.url.includes("/login") && !copia.url.includes("usuario/criar")){
      copia = req.clone({
        url: `${req.url}`,
        headers: new HttpHeaders().append(
          'Authorization',
          'Bearer ' + this._storageService.localStorage.find('t') || ''
        ),
      });
    }

    console.log(copia);

    return next.handle(copia).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (req.method === 'GET') {
            this.cache[req.urlWithParams] = {
              createAt: new Date(),
              response: event,
            };
          }
          switch (event.status) {
            case 0:
            case 401:
            case 403:
          }
        }
        return event;
      })
    );

    // if (req.method === 'GET') {
    // 	const cache = this.cache[req.urlWithParams];
    // 	if (cache) {
    // 		const difference = moment().diff(moment(cache.createAt), 'milliseconds');
    // 		if (difference <= 1000) {
    // 			return of(cache.response);
    // 		}
    // 	}
    // }
    // if (req.url.startsWith('/')) {
    // 	copia = req.clone({
    // 		url: `${environment.url.backend}${req.url}`,
    // 		headers: new HttpHeaders().append('Authorization', this._usuarioEndpointService.token || '')
    // 	});

    // } else {
    // 	copia = req.clone({});
    // }
  }
}
