import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Operador } from './operador.model';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  private url = "http://localhost:8080/api/operadores";

  constructor(private http: HttpClient) { }

  getOperadores(): Observable<Array<Operador>> {
    return this.http.get<Array<Operador>>(this.url);
  }

}
