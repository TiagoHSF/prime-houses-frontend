import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoEndpointService } from 'src/app/interno/service/backend/autenticacao-endpoint.service';
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
    private _router: Router
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
    }).subscribe((result) => {
      console.log(result);
      //IF CORRETOR
      // this._router.navigateByUrl('dashboard')
      //ELSE
      // this._router.navigateByUrl('imoveis')
    })
    // this._router.navigateByUrl('dashboard')
  }

  cadastroNavigate(){
    this._router.navigateByUrl("cadastro")
  }
}
