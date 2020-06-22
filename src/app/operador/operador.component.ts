import { Component, OnInit } from '@angular/core';
import { OperadorService } from './operador.service';
import { Operador } from './operador.model';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.css']
})
export class OperadorComponent implements OnInit {

  operadores: Array<Operador>

  constructor(private operadorService: OperadorService, public globals: GlobalsService) { }

  ngOnInit(): void {
    this.operadorService.getOperadores()
      .subscribe(resultado => this.operadores = resultado)
  }

}
