import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../service/util/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usuarioLogado: boolean = false;

  constructor(private _storageService: StorageService,
    private _router: Router){

  }

  ngOnInit(): void {
    if(this._storageService.localStorage.find('t')) {
      this.usuarioLogado = true;
    }
  }

  logout(){
    this._storageService.localStorage.removeAll();
    this._router.navigateByUrl("acesso")
  }

}
