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
    form.addControl("tamanhoMtsQuadrados", new FormControl(0, [Validators.required]));
    form.addControl("quantidadeQuartos", new FormControl(0, [Validators.required]));
    form.addControl("quantidadeBanheiros", new FormControl(0, [Validators.required]));
    form.addControl("quantidadeSalas", new FormControl(0, [Validators.required]));
    form.addControl("quantidadeCozinhas", new FormControl(0, [Validators.required]));
    form.addControl("quantidadeSuites", new FormControl(0, [Validators.required]));
    form.addControl("quantidadeAreasExternas", new FormControl(0, [Validators.required]));
    form.addControl("piscina", new FormControl(false, [Validators.required]));
    form.addControl("areaDeChurrasco", new FormControl(false, [Validators.required]));
    form.addControl("quantidadeVagasGaragem", new FormControl(0, [Validators.required]));
    form.addControl("terrenoNivelado", new FormControl(false, [Validators.required])); //TERRENO
    form.addControl("aguaLigada", new FormControl(false, [Validators.required])); 
    form.addControl("energiaLigada", new FormControl(false, [Validators.required])); 
    form.addControl("acessoPavimentado", new FormControl(false, [Validators.required]));
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


