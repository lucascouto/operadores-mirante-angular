import { Component, OnInit } from '@angular/core';
import { OperadorService } from '../operador.service';
import { ActivatedRoute } from '@angular/router';
import { Operador } from '../operador.model';

@Component({
  selector: 'app-deletar-operador',
  templateUrl: './deletar-operador.component.html',
  styleUrls: ['./deletar-operador.component.css']
})
export class DeletarOperadorComponent implements OnInit {

  id: number
  operador: Operador

  constructor(
    private operadorService: OperadorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.operadorService.getOperador(this.id)
      .subscribe(resposta => { this.operador = resposta })
  }

  deletar() {
    this.operadorService.deleteOperador(this.id)
      .subscribe(resposta => alert('Removido com sucesso!'))
  }
}
