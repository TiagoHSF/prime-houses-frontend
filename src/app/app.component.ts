import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { StorageService } from './interno/service/util/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Prime Houses';

  public exibeSidebar: boolean = true;

  constructor(private router: Router, 
    private _routeCheckService: AppService,
    private _storageService: StorageService ) {
    // if(this._storageService.localStorage.find('t') != null){
    //   this.router.navigateByUrl('/dashboard');
    // }
    this.router.events.subscribe((event) => {
      const segments = this.router.url.split('/');
      const path = segments[1];

      if (path === 'acesso' || path === 'cadastro') {
        this.exibeSidebar = false;
      } else {
        this.exibeSidebar = true;
      }
    });
  }

    // if(this._storageService.localStorage.find('t') == null){
      //   this._autenticacaoEndpointService.logout();
      //   this.router.navigateByUrl('acesso');
      // } else {
      //   if(tipoUsuario == 'CORRETOR'){
      //     if(path != "acesso" && path != "cadastro"){
      //       this.exibeSidebar = true;
      //     }
      //     this.router.navigateByUrl('dashboard');
      //   } else {
      //     this.exibeSidebar = false;
      //     this.router.navigateByUrl('listar/imoveis');
      //   }
      // }

  ngOnInit() {}
}
