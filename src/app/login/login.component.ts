import { Component, OnInit } from '@angular/core';
import { LoginRequest } from './login-request.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { OperadorService } from '../operador/operador.service';

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
    private operadorService: OperadorService
  ) { }

  ngOnInit(): void { }

  login() {
    this.loginService.login(this.usuario)
      .subscribe(response => {
        this.route.navigate(['/pessoas'])
        localStorage.clear()
        localStorage.setItem('token', response.jwt)

        this.operadorService.buscarPorLogin(this.usuario.username)
          .subscribe(response => {

            localStorage.setItem('nomeOperador', response.nome)
            localStorage.setItem('roleOperador', response.role)
          })

      })
  }



}
