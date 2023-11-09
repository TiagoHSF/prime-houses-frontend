import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-padrao',
  templateUrl: './botao-padrao.component.html',
  styleUrls: ['./botao-padrao.component.scss']
})
export class BotaoPadraoComponent {

  @Input()
  public nomeBotao: string | undefined;

  @Input()
  public icon: string | undefined;

  @Input()
  public class: string | undefined;

  @Input()
  public style: string | undefined;

  @Input()
  public desabilitado: Boolean | undefined;

  @Output()
  clickButton = new EventEmitter<any>();

  constructor() {

  }

}
