import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-padrao',
  templateUrl: './input-padrao.component.html',
  styleUrls: ['./input-padrao.component.scss']
})
export class InputPadraoComponent implements OnInit, ControlValueAccessor {

  @Input()
  public nomeInput: string = "";

  @Input()
  public placeholder: string = "";

  @Input()
  public style: string = "";

  @Input()
  public type: string = "";

  @Input()
  public icone: string | undefined;

  public value: string | undefined;
  public onChange: ((value?: any) => void) | undefined;

  @Input()
  public iconePrefixo: boolean = false;

  @Input()
  public iconeSufixo: boolean = false;

  @Input()
  public appearance: any = "";

  public constructor() {
    
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void { }

  ngOnInit(): void { }

  get possuiIcone(){
    if(this.icone != undefined && this.icone != ""){
      return true;
    }
    return false;
  }
}
