import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-padrao',
  templateUrl: './input-padrao.component.html',
  styleUrls: ['./input-padrao.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputPadraoComponent,
      multi: true
    }
  ],
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
  public formControlName!: string;

  @Input()
  public form!: FormGroup;

  @Input()
  public icone: string = "";

  public value: string = "";
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

  ngOnInit(): void { 
    console.log("PADRAO", this.form)
  }

  get possuiIcone(){
    if(this.icone != undefined && this.icone != ""){
      return true;
    }
    return false;
  }
}
