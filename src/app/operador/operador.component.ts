import { Component, OnInit } from '@angular/core';
import { OperadorService } from './operador.service';
import { Operador } from './operador.model';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.css']
})
export class OperadorComponent implements OnInit {

  operadores: Array<Operador>

  roleOperador: String = localStorage.getItem('roleOperador')

  constructor(private operadorService: OperadorService) { }

  ngOnInit(): void {
    this.operadorService.getOperadores()
      .subscribe(resultado => this.operadores = resultado)
  }

}
