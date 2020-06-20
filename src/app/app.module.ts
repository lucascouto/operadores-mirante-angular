import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperadorComponent } from './operador/operador.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarOperadorComponent } from './operador/cadastrar-operador/cadastrar-operador.component';
import { FormsModule } from "@angular/forms";
import { EditarOperadorComponent } from './operador/editar-operador/editar-operador.component';
import { DeletarOperadorComponent } from './operador/deletar-operador/deletar-operador.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { CadastrarPessoaComponent } from './pessoa/cadastrar-pessoa/cadastrar-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    OperadorComponent,
    CadastrarOperadorComponent,
    EditarOperadorComponent,
    DeletarOperadorComponent,
    PessoaComponent,
    CadastrarPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
