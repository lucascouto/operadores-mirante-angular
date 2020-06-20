import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.model';
import { OperadorService } from 'src/app/operador/operador.service';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

  request: Pessoa = {
    id: 0,
    nome: "",
    documento: "",
    dataNascimento: "",
    nomePai: "",
    nomeMae: "",
    loginOperador: "",
    tipoPessoa: "F",
    telefones: []
  }

  response: Pessoa

  constructor(
    private pessoaService: PessoaService,
    private route: Router
  ) { }

  ngOnInit(): void {

  }

  cadastrar() {
    this.pessoaService.createPessoa(this.request)
      .subscribe(resposta => {
        this.response = resposta
        this.route.navigate(['/pessoas'])
      })
  }

}
