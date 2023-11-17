import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AutenticacaoEndpointService } from 'src/app/interno/service/backend/autenticacao-endpoint.service';
import { StorageService } from 'src/app/interno/service/util/storage.service';
import Swal from 'sweetalert2';
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
        this._storageService.localStorage.add('t', result.token);
        if(result.tipo == 'CORRETOR'){
          this._router.navigateByUrl('/dashboard')
        } else if(result.tipo == 'CLIENTE'){
          this._router.navigateByUrl('listar/imoveis')
        }
        this._storageService.localStorage.add('tUsuario', result.tipo);
      },
      error: (error) => {
        Swal.fire({
          title: 'Ops!',
          text: `Email ou senha inválidos!`,
          icon: 'error',
          showConfirmButton: false,
        });
      }
    });
  }

  cadastroNavigate(){
    this._router.navigateByUrl("cadastro")
  }
}
