import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public generateFormLogin(){
    const form = new FormGroup({});
    form.addControl("email", new FormControl("", [Validators.required]));
    form.addControl("senha", new FormControl("", [Validators.required]));
    return form;
  }

}
