import { Component, OnInit } from '@angular/core';
import { Telefone } from 'src/app/pessoa/pessoa.model';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-telefone',
  templateUrl: './cadastrar-telefone.component.html',
  styleUrls: ['./cadastrar-telefone.component.css']
})
export class CadastrarTelefoneComponent implements OnInit {

  telefone: Telefone = {
    id: 0,
    ddd: "",
    numero: "",
    tipo: "",
    loginOperador: ""
  }

  id: number

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
  }

  cadastrar() {
    this.pessoaService.addTelefone(this.id, this.telefone)
      .subscribe(() => this._route.navigate(['/pessoas']))
  }

}
