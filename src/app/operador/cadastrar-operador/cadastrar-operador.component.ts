import { Component, OnInit } from '@angular/core';
import { Operador } from '../operador.model';
import { OperadorService } from '../operador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-operador',
  templateUrl: './cadastrar-operador.component.html',
  styleUrls: ['./cadastrar-operador.component.css']
})
export class CadastrarOperadorComponent implements OnInit {

  request: Operador = {
    id: 0,
    nome: "",
    login: "",
    senha: "",
    createdAt: new Date()
  }

  response: Operador

  constructor(
    private operadorService: OperadorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.operadorService.createOperador(this.request)
      .subscribe(resposta => this.response = resposta)
  }

}
