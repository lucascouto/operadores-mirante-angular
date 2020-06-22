import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  role: string = localStorage.getItem('role');
  nome: string = localStorage.getItem('nome');;
  login: string = localStorage.getItem('login');
  mostrarMenu: boolean = JSON.parse(localStorage.getItem('mostrarMenu'));

  constructor() { }
}
