import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CriarImovelService {

  constructor() { }

  generateInformacoes(){
    const form = new FormGroup({});
    //IMÓVEL
    form.addControl("titulo", new FormControl("", [Validators.required]));
    form.addControl("descricao", new FormControl("", [Validators.required]));
    form.addControl("codigo", new FormControl("", [Validators.required]));
    form.addControl("tipo", new FormControl("", [Validators.required]));
    
    //PAGAMENTO
    form.addControl("valor", new FormControl("", [Validators.required]));
    form.addControl("pagamento", new FormControl("", [Validators.required]));
    form.addControl("comissao", new FormControl("", [Validators.required]));
    return form;
  }

  generateDetalhamento(){
    const form = new FormGroup({});

    //DETALHES
    form.addControl("tamanhoMtsQuadrados", new FormControl(0));
    form.addControl("quantidadeQuartos", new FormControl(0));
    form.addControl("quantidadeBanheiros", new FormControl(0));
    form.addControl("quantidadeSalas", new FormControl(0));
    form.addControl("quantidadeCozinhas", new FormControl(0));
    form.addControl("quantidadeSuites", new FormControl(0));
    form.addControl("quantidadeAreasExternas", new FormControl(0));
    form.addControl("piscina", new FormControl(false));
    form.addControl("areaDeChurrasco", new FormControl(false));
    form.addControl("quantidadeVagasGaragem", new FormControl(0));
    form.addControl("terrenoNivelado", new FormControl(false)); //TERRENO
    form.addControl("aguaLigada", new FormControl(false)); 
    form.addControl("energiaLigada", new FormControl(false)); 
    form.addControl("acessoPavimentado", new FormControl(false));
    return form;
  }
  
  public generateEndereco(){
    const form = new FormGroup({});

    //ENDEREÇO
    form.addControl("cep", new FormControl("", [Validators.required]));
    form.addControl("endereco", new FormControl("", [Validators.required]));
    form.addControl("bairro", new FormControl("", [Validators.required]));
    form.addControl("cidade", new FormControl("", [Validators.required]));
    form.addControl("estado", new FormControl("", [Validators.required]));
    form.addControl("numero", new FormControl("", [Validators.required]));
    form.addControl("complemento", new FormControl("", [Validators.required]));

    return form;
  }

}


