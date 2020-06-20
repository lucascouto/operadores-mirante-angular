import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa, Telefone } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url_pessoa = "http://localhost:8080/api/pessoas";
  private url_telefone = "http://localhost:8080/api/telefones";

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<Array<Pessoa>> {
    return this.http.get<Array<Pessoa>>(this.url_pessoa)
  }

  createPessoa(request: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.url_pessoa, request)
  }

  getPessoa(id: number): Observable<Pessoa> {
    const _url = `${this.url_pessoa}/${id}`
    return this.http.get<Pessoa>(_url)
  }

  updatePessoa(request: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(this.url_pessoa, request)
  }

  deletePessoa(id: number): Observable<Pessoa> {
    const _url = `${this.url_pessoa}/${id}`
    return this.http.delete<Pessoa>(_url)
  }

  addTelefone(idPessoa: number, request: Telefone): Observable<Telefone> {
    const _url = `${this.url_telefone}/${idPessoa}`
    return this.http.post<Telefone>(_url, request)
  }

  getTelefones(idPessoa: number): Observable<Array<Telefone>> {
    const _url = `${this.url_telefone}/${idPessoa}`
    return this.http.get<Array<Telefone>>(_url)
  }

  deleteTelefone(id: number): Observable<Telefone> {
    const _url = `${this.url_telefone}/${id}`
    return this.http.delete<Telefone>(_url)
  }

}
