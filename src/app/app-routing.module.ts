import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperadorComponent } from './operador/operador.component';
import { CadastrarOperadorComponent } from './operador/cadastrar-operador/cadastrar-operador.component';
import { EditarOperadorComponent } from './operador/editar-operador/editar-operador.component';
import { DeletarOperadorComponent } from './operador/deletar-operador/deletar-operador.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { CadastrarPessoaComponent } from './pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { DeletarPessoaComponent } from './pessoa/deletar-pessoa/deletar-pessoa.component';
import { CadastrarTelefoneComponent } from './telefone/cadastrar-telefone/cadastrar-telefone.component';


const routes: Routes = [
  { path: "operadores", component: OperadorComponent },
  { path: "operadores/cadastrar", component: CadastrarOperadorComponent },
  { path: "operadores/editar/:id", component: EditarOperadorComponent },
  { path: "operadores/deletar/:id", component: DeletarOperadorComponent },
  { path: "pessoas", component: PessoaComponent },
  { path: "pessoas/cadastrar", component: CadastrarPessoaComponent },
  { path: "pessoas/editar/:id", component: EditarPessoaComponent },
  { path: "pessoas/deletar/:id", component: DeletarPessoaComponent },
  { path: "telefones/cadastrar/:id", component: CadastrarTelefoneComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
