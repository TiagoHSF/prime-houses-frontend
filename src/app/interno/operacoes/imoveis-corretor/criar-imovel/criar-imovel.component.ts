import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ConstantesEndpointService } from 'src/app/interno/service/backend/constantes-endpoint.service';
import { ImovelCorretorEndpointService } from 'src/app/interno/service/backend/imovel-corretor-endpoint.service';
import { StorageService } from 'src/app/interno/service/util/storage.service';
import { DetalhesImovelDTO } from 'src/app/model/detalhes-imovel-dto.model';
import { EnderecoDTO } from 'src/app/model/endereco-dto.model';
import { ImovelDTO } from 'src/app/model/imovel-dto.model';
import Swal from 'sweetalert2';
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

  opcoes: string[] = ['SIM', 'NÃO'];

  constructor(
    private _criarImovelService: CriarImovelService,
    private _constanteEndpointService: ConstantesEndpointService,
    private _storageService: StorageService,
    private _imovelCorretorEndpointService: ImovelCorretorEndpointService,
    private _router: Router
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
    if(this.stepper._getFocusIndex() == 1 && !this.formDetalhamento){
      this.formDetalhamento = this._criarImovelService.generateDetalhamento();
    } else if (this.stepper._getFocusIndex() == 2 && !this.formEndereco){
      this.formEndereco = this._criarImovelService.generateEndereco();
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

  opcaoSelecionada(opcao: string): boolean {
    if(opcao == 'SIM'){
      return true;
    }
    return false;
  }

  finalizar(){
    const endereco = this.formEndereco.value as EnderecoDTO;
    const detalhes = this.formDetalhamento.value as DetalhesImovelDTO;
    const imovel = this.formInformacoes.value as ImovelDTO;
    const fotos = this.uploadedFiles as File[];

    imovel.empresaId = this._storageService.localStorage.find('eId');
    imovel.corretorId = this._storageService.localStorage.find('cId');
    imovel.endereco = endereco;
    imovel.detalhes = detalhes;
    imovel.fotos = fotos;

    this._imovelCorretorEndpointService
      .criar(imovel)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          Swal.fire({
            title: 'Sucesso!',
            text: `Imóvel criado!`,
            icon: 'success',
            showConfirmButton: true,
          }).then((value) =>{
            if(value.isConfirmed){
              this._router.navigateByUrl('imoveis');
            }
          })
        },
        error: (error) => {
          Swal.fire({
            title: 'Ops!',
            text: `Não foi possível criar o imóvel. ${error.error}`,
            icon: 'error',
            showConfirmButton: false,
          });
        },
      });
  }
}
