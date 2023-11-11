import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  public generateFormCadastro(){
    const form = new FormGroup({});
    form.addControl("nome", new FormControl("", [Validators.required]));
    form.addControl("sobrenome", new FormControl("", [Validators.required]));

    form.addControl("documento", new FormControl("", [Validators.required]));
    form.addControl("dataNascimento", new FormControl("", [Validators.required]));

    form.addControl("email", new FormControl("", [Validators.required]));
    form.addControl("celular", new FormControl("", [Validators.required]));

    form.addControl("senha", new FormControl("", [Validators.required]));
    form.addControl("confirmarSenha", new FormControl("", [Validators.required]));

    form.addControl("creci", new FormControl(""));
    return form;
  }
  
}
