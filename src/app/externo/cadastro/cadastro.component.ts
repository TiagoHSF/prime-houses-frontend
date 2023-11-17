import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { UsuarioEndpointService } from 'src/app/interno/service/backend/usuario-endpoint.service';
import { StorageService } from 'src/app/interno/service/util/storage.service';
import { UsuarioDTO } from 'src/app/model/usuario-dto.model';
import Swal from 'sweetalert2';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit, AfterViewInit {
  public form!: FormGroup;

  public disabled: boolean = false;

  public checked: boolean = false;

  public inserirCreci: boolean = false;

  constructor(
    private _router: Router,
    private _cadastroService: CadastroService,
    private _usuarioEndpointService: UsuarioEndpointService,
    private _storageService: StorageService
  ) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.form = this._cadastroService.generateFormCadastro();
  }

  loginNavigate() {
    this._router.navigateByUrl('/acesso');
  }

  finalizarCadastro() {
    if (!this.checked) {
      this.criarUsuario();
    } else if (this.checked && this.form.get('creci')?.value == '') {
      this.inserirCreci = true;
    } else if (this.checked && this.form.get('creci')?.value != '') {
      this.criarUsuario();
    }
  }

  criarUsuario() {
    this._usuarioEndpointService
      .criarUsuario(this.form.value as UsuarioDTO)
      .pipe(take(1))
      .subscribe({
        next: (result) => {
          Swal.fire({
            title: 'Sucesso!',
            text: `Bem vindo ${this.form?.get('nome')?.value}!`,
            icon: 'success',
            showConfirmButton: true,
          }).then((value) => {
            if(value.isConfirmed){
              this._storageService.localStorage.add('t', result.token);
              if (result.tipo == 'CORRETOR') {
                this._router.navigateByUrl('/dashboard');
              } else if (result.tipo == 'CLIENTE') {
                this._router.navigateByUrl('listar/imoveis');
              }
              this._storageService.localStorage.add('tUsuario', result.tipo);
            }
          });
        },
        error: (error) => {
          Swal.fire({
            title: 'Ops!',
            text: `Não foi possível criar o usuário. ${error.error}`,
            icon: 'error',
            showConfirmButton: false,
          });
        },
      });
  }

  disabledContinuar(): boolean {
    if (
      this.form?.get('senha')?.value != this.form?.get('confirmarSenha')?.value
    ) {
      this.form.get('confirmarSenha')?.setErrors(['Senhas não são iguais!']);
    }
    if (this.form.invalid) {
      return true;
    }
    return false;
  }

  nomeBotao(): string {
    if (!this.checked) {
      return 'CRIAR CONTA';
    } else if (this.inserirCreci) {
      return 'CRIAR CONTA';
    } else {
      return 'CONTINUAR';
    }
  }
}
