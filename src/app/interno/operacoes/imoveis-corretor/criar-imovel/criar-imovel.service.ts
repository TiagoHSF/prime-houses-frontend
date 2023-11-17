import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CriarImovelService {

  constructor() { }

  public generateFormImovel(){
    const form = new FormGroup({});
    form.addControl("titulo", new FormControl("", [Validators.required]));
    form.addControl("descricao", new FormControl("", [Validators.required]));
    form.addControl("valor", new FormControl("", [Validators.required]));
    form.addControl("codigo", new FormControl("", [Validators.required]));
    return form;
  }
  
}


