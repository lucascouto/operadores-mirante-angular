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
    return this.http.get<Array<Operador>>(this.url)
  }

  createOperador(request: Operador): Observable<Operador> {
    return this.http.post<Operador>(this.url, request)
  }

  getOperador(id: number): Observable<Operador> {
    const _url = `${this.url}/${id}`
    return this.http.get<Operador>(_url)
  }

  updateOperador(request: Operador): Observable<Operador> {
    return this.http.put<Operador>(this.url, request)
  }

  deleteOperador(id: number): Observable<String> {
    const _url = `${this.url}/${id}`
    return this.http.delete<String>(_url)
  }

}
