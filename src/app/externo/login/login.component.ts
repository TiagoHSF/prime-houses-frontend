import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AutenticacaoEndpointService } from 'src/app/interno/service/backend/autenticacao-endpoint.service';
import { StorageService } from 'src/app/interno/service/util/storage.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  public form!: FormGroup;

  public constructor(
    private _loginService: LoginService,
    private _autenticacaoEndpointService: AutenticacaoEndpointService,
    private _router: Router,
    private _storageService: StorageService
  ) {}
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.form = this._loginService.generateFormLogin();
  }

  login() {
    this._autenticacaoEndpointService.login({
      email: this.form.get('email')?.value,
      senha: this.form.get('senha')?.value,
    }).pipe(
      take(1) 
    ).subscribe({
      next: (result) => {
        this._storageService.localStorage.add('t', result);
        this._autenticacaoEndpointService.findUserByToken(result)
          .subscribe({
            next: (user) => {
              console.log(user);
              if (user.tipo == 'CORRETOR') {
                this._router.navigateByUrl("dashboard");
              } else {
                this._router.navigateByUrl("cadastro");
              }
            },
            error: (error) => {
              console.log(error);
            }
          });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  cadastroNavigate(){
    this._router.navigateByUrl("cadastro")
  }
}
