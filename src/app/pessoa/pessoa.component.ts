import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: Array<Pessoa>

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.getPessoas()
      .subscribe(resposta => this.pessoas = resposta)
  }

}
