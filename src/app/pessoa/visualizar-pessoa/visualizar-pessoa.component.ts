import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { GlobalsService } from 'src/app/globals.service';

@Component({
  selector: 'app-visualizar-pessoa',
  templateUrl: './visualizar-pessoa.component.html',
  styleUrls: ['./visualizar-pessoa.component.css']
})
export class VisualizarPessoaComponent implements OnInit {

  id: number
  pessoa: Pessoa

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private _route: Router,
    public globals: GlobalsService
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.pessoaService.getPessoa(this.id)
      .subscribe(resposta => { this.pessoa = resposta })
  }

  voltar() {
    this._route.navigate(['/pessoas'])
  }

}
