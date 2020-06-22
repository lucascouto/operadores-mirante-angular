import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa, PessoaCadastro } from '../pessoa.model';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  id: number
  request: PessoaCadastro

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.pessoaService.getPessoa(this.id)
      .subscribe(resposta => this.request = resposta)
  }

  editar() {
    this.request.id = this.id
    this.pessoaService.updatePessoa(this.request)
      .subscribe(() => this._route.navigate(['/pessoas']))
  }

  cancelar() {
    this._route.navigate(['/pessoas'])
  }

}
