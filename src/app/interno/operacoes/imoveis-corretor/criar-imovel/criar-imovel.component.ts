import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CriarImovelService } from './criar-imovel.service';

@Component({
  selector: 'app-criar-imovel',
  templateUrl: './criar-imovel.component.html',
  styleUrls: ['./criar-imovel.component.scss']
})
export class CriarImovelComponent implements OnInit {
  public form!: FormGroup;

  public tipos: string[] = ['APARTAMENTO','CASA','KITNET', 'LOFT'];

  constructor(private _criarImovelService: CriarImovelService){
    
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.form = this._criarImovelService.generateFormImovel();
  }

  continuar(){
    
  }

}
