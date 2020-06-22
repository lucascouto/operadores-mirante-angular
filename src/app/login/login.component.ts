import { Component, OnInit } from '@angular/core';
import { LoginRequest } from './login-request.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { OperadorService } from '../operador/operador.service';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: LoginRequest = {
    username: "",
    password: ""
  }

  usuarioInvalido: boolean = false;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private operadorService: OperadorService,
    private globals: GlobalsService
  ) { }

  ngOnInit(): void { }

  login() {
    this.loginService.login(this.usuario)
      .subscribe(response => {

        localStorage.clear()
        localStorage.setItem('token', response.jwt)

        this.operadorService.buscarPorLogin(this.usuario.username)
          .subscribe(response => {
            this.globals.nome = response.nome
            this.globals.login = response.login
            this.globals.role = response.role
            this.globals.mostrarMenu = true

            //ARMAZENA AS VARIAVEIS DE SESSAO NO LOCAL STORAGE
            //PARA EVITAR QUE AS VARIAVEIS GLOBAIS PERCAM SEUS VALORES
            //NO REFRESH DA PAGINA
            localStorage.setItem('nome', response.nome)
            localStorage.setItem('login', response.login)
            localStorage.setItem('role', response.role)
            localStorage.setItem('mostrarMenu', JSON.stringify(this.globals.mostrarMenu))
          })

      }).add(() => this.route.navigate(['/pessoas']))

  }



}
