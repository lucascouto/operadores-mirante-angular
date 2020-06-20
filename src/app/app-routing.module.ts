import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperadorComponent } from './operador/operador.component';


const routes: Routes = [
  { path: "operadores", component: OperadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
