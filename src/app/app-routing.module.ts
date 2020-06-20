import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperadorComponent } from './operador/operador.component';
import { CadastrarOperadorComponent } from './operador/cadastrar-operador/cadastrar-operador.component';


const routes: Routes = [
  { path: "operadores", component: OperadorComponent },
  { path: "operadores/cadastrar", component: CadastrarOperadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
