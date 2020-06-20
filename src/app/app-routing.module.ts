import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperadorComponent } from './operador/operador.component';
import { CadastrarOperadorComponent } from './operador/cadastrar-operador/cadastrar-operador.component';
import { EditarOperadorComponent } from './operador/editar-operador/editar-operador.component';
import { DeletarOperadorComponent } from './operador/deletar-operador/deletar-operador.component';


const routes: Routes = [
  { path: "operadores", component: OperadorComponent },
  { path: "operadores/cadastrar", component: CadastrarOperadorComponent },
  { path: "operadores/editar/:id", component: EditarOperadorComponent },
  { path: "operadores/deletar/:id", component: DeletarOperadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
