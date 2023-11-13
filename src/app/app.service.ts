import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  routes: string[] = [
    "acesso",
    "cadastro",
    "dashboard"
  ];

  isValidRoute(path: string): boolean {
   for(let route of this.routes){
    if(path == route){
      return true;
    }
   }
   return false;
  }
}
