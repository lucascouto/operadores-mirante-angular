import { Component, OnInit } from '@angular/core';
import { Pessoa, PessoaCadastro } from '../pessoa.model';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import * as Inputmask from "inputmask";
import { GlobalsService } from 'src/app/globals.service';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

  request: PessoaCadastro = {
    id: 0,
    nome: "",
    documento: "",
    dataNascimento: "",
    nomePai: "",
    nomeMae: "",
    loginOperador: this.globals.login,
    tipoPessoa: ""
  }

  response: Pessoa

  public customPatterns = { '0': { pattern: new RegExp('\[a-zA-Z\]') } };

  constructor(
    private pessoaService: PessoaService,
    private route: Router,
    public globals: GlobalsService
  ) { }

  ngOnInit(): void {
    Inputmask().mask(document.querySelectorAll("input"));
  }

  cadastrar() {
    this.pessoaService.createPessoa(this.request)
      .subscribe(resposta => {
        this.response = resposta
        this.route.navigate(['/pessoas'])
      })
  }

}
