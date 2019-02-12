import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../_models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  baseURL = 'https://localhost:44383/api/Pessoas';

  constructor(private http: HttpClient) { }

  getAllPessoa(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.baseURL);
  }

  getPessoaById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.baseURL}/${id}`);
  }

  postPessoa(pessoa: Pessoa){
    return this.http.post(this.baseURL, pessoa);
  }

  putPessoa(pessoa: Pessoa) {
    return this.http.put(`${this.baseURL}/${pessoa.id}`, pessoa);
  }

  deletePessoa(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
