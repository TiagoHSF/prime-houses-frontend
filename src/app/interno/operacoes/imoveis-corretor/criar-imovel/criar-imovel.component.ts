import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { take } from 'rxjs';
import { ConstantesEndpointService } from 'src/app/interno/service/backend/constantes-endpoint.service';
import { CriarImovelService } from './criar-imovel.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-criar-imovel',
  templateUrl: './criar-imovel.component.html',
  styleUrls: ['./criar-imovel.component.scss'],
})
export class CriarImovelComponent implements OnInit {
  public formInformacoes!: FormGroup;
  public formDetalhamento!: FormGroup;
  public formEndereco!: FormGroup;

  public tipos: string[] = [];
  public pagamentos: string[] = [];

  @ViewChild('stepper') stepper!: MatStepper;

  uploadedFiles: any[] = [];

  constructor(
    private _criarImovelService: CriarImovelService,
    private _constanteEndpointService: ConstantesEndpointService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.formInformacoes = this._criarImovelService.generateInformacoes();
    this.tiposImovel();
    this.formasPagamento();
  }

  tiposImovel() {
    this._constanteEndpointService
      .constantes('TipoImovel')
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          for (let item of data) {
            item = item.replace('_', ' ');
            this.tipos.push(item);
          }
        },
        error: (error) => {},
      });
  }

  formasPagamento() {
    this._constanteEndpointService
      .constantes('FormasPagamento')
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          for (let item of data) {
            item = item.replace('_', ' ');
            this.pagamentos.push(item);
          }
        },
        error: (error) => {},
      });
  }

  continuar() {
    console.log(this.stepper._getFocusIndex());
    console.log(this.formDetalhamento)
    if(this.stepper._getFocusIndex() == 1 && !this.formDetalhamento){
      this.formDetalhamento = this._criarImovelService.generateDetalhamento();
    }
    this.stepper.next();
  }

  voltar() {
    this.stepper.previous();
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  finalizar(){
    console.log()
  }
}
