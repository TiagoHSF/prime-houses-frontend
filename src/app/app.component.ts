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
  public exibeNavbar: boolean = false;

  constructor(private router: Router, 
    private _routeCheckService: AppService,
    private _storageService: StorageService ) {
    this.router.events.subscribe((event) => {
      // const segments = this.router.url.split('/');
      // const path = segments[1];

      // //USUÁRIO NÃO LOGADO
      // if(!this._storageService.localStorage.find('tUsuario')){
      //   this.exibeSidebar = false;
      //   this.exibeNavbar = false;
      //   if(path != "acesso" && path != "cadastro"){
      //     this.router.navigateByUrl("acesso");
      //   }
      // } else {
      //   //USUARIO CORRETOR
      //   if(this._storageService.localStorage.find('tUsuario') == 'CORRETOR'){
      //     this.exibeNavbar = true;
      //     this.exibeSidebar = true;
      //   } else if (this._storageService.localStorage.find('tUsuario') == 'CLIENTE'){
      //     this.exibeNavbar = false;
      //     this.exibeSidebar = false;
      //   }
      // }


      if(this._storageService.localStorage.find('tUsuario') && this._storageService.localStorage.find('tUsuario') == 'CLIENTE'){
        this.exibeNavbar = true;
      }
      const segments = this.router.url.split('/');
      const path = segments[1];

      if (path === 'acesso' || path === 'cadastro') {
        this.exibeSidebar = false;
      } else {
        if(this._storageService.localStorage.find('tUsuario') == 'CLIENTE'){
          this.exibeSidebar = false
        } else {
          this.exibeSidebar = true;
        }
      }
    });
  }

  ngOnInit() {}
}
