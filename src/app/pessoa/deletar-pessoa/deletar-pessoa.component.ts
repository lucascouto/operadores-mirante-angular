import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-deletar-pessoa',
  templateUrl: './deletar-pessoa.component.html',
  styleUrls: ['./deletar-pessoa.component.css']
})
export class DeletarPessoaComponent implements OnInit {

  id: number
  pessoa: Pessoa

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.pessoaService.getPessoa(this.id)
      .subscribe(resposta => { this.pessoa = resposta })
  }

  deletar() {
    this.pessoaService.deletePessoa(this.id)
      .subscribe(resposta => {
        alert('Removido com sucesso!')
        this._route.navigate(['/pessoas'])
      })
  }

  cancelar() {
    this._route.navigate(['/pessoas'])
  }



}
