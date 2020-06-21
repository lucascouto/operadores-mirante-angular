import { Component, OnInit } from '@angular/core';
import { Operador } from '../operador.model';
import { OperadorService } from '../operador.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-operador',
  templateUrl: './cadastrar-operador.component.html',
  styleUrls: ['./cadastrar-operador.component.css']
})
export class CadastrarOperadorComponent implements OnInit {

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  request: Operador = {
    id: 0,
    nome: "",
    login: "",
    senha: "",
    createdAt: new Date(),
    updatedAt: new Date()
  }

  response: Operador

  constructor(
    private operadorService: OperadorService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.operadorService.createOperador(this.request)
      .subscribe(resposta => {
        this.response = resposta
        this.route.navigate(['/operadores'])
      })
  }

  cancelar() {
    this.route.navigate(['/operadores'])
  }

}
