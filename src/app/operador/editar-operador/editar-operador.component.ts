import { Component, OnInit } from '@angular/core';
import { OperadorService } from '../operador.service';
import { ActivatedRoute } from '@angular/router';
import { Operador } from '../operador.model';

@Component({
  selector: 'app-editar-operador',
  templateUrl: './editar-operador.component.html',
  styleUrls: ['./editar-operador.component.css']
})
export class EditarOperadorComponent implements OnInit {

  id: number
  request: Operador

  constructor(
    private operadorService: OperadorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.operadorService.getOperador(this.id)
      .subscribe(resposta => { this.request = resposta })
  }

  editar() {
    this.request.id = this.id
    this.operadorService.updateOperador(this.request).subscribe()
  }

}
