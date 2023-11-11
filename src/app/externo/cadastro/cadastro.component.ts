import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit, AfterViewInit {
  public form!: FormGroup;

  public disabled: boolean = false;

  public checked: boolean = false;

  public inserirCreci: boolean = false;

  constructor(private _router: Router,
    private _cadastroService: CadastroService){

  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.form = this._cadastroService.generateFormCadastro();
  }

  loginNavigate(){
    this._router.navigateByUrl("/acesso")
  }

  finalizarCadastro(){
    if(!this.checked){
      Swal.fire({
        title: "Sucesso",
        text: `Bem vindo ${this.form?.get("nome")?.value}`,
        icon: "success",
        showConfirmButton: false,
      });
    } else if (this.checked && this.form.get("creci")?.value == ""){
      this.inserirCreci = true;
    }
  }

  disabledContinuar(): boolean{
    if(this.form?.get("senha")?.value != this.form?.get("confirmarSenha")?.value){
      this.form.get("confirmarSenha")?.setErrors(["Senhas não são iguais!"])
    }
    if(this.form.invalid){
      return true;
    }
    return false;
  }

  nomeBotao() :string{
    if(!this.checked){
      return "CRIAR CONTA";
    } else if(this.inserirCreci){
      return "CRIAR CONTA";
    } else {
      return "CONTINUAR";
    }
  }
}
