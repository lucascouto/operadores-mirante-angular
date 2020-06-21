import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperadorComponent } from './operador/operador.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarOperadorComponent } from './operador/cadastrar-operador/cadastrar-operador.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditarOperadorComponent } from './operador/editar-operador/editar-operador.component';
import { DeletarOperadorComponent } from './operador/deletar-operador/deletar-operador.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { CadastrarPessoaComponent } from './pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { DeletarPessoaComponent } from './pessoa/deletar-pessoa/deletar-pessoa.component';
import { TelefoneComponent } from './telefone/telefone.component';
import { CadastrarTelefoneComponent } from './telefone/cadastrar-telefone/cadastrar-telefone.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    OperadorComponent,
    CadastrarOperadorComponent,
    EditarOperadorComponent,
    DeletarOperadorComponent,
    PessoaComponent,
    CadastrarPessoaComponent,
    EditarPessoaComponent,
    DeletarPessoaComponent,
    TelefoneComponent,
    CadastrarTelefoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
