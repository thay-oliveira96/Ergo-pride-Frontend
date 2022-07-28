import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Funcoes } from '../models/funcoes';

@Injectable({
  providedIn: 'root'
})
export class FuncoeService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Funcoes> {
    return this.http.get<Funcoes>(`${API_CONFIG.baseUrl}/funcoes/${id}`);
  }

  findAll(): Observable<Funcoes[]> {
    return this.http.get<Funcoes[]>(`${API_CONFIG.baseUrl}/funcoes`);
  }

  create(funcoes: Funcoes): Observable<Funcoes> {
    return this.http.post<Funcoes>(`${API_CONFIG.baseUrl}/funcoes`, funcoes);

  }

  update(funcoes: Funcoes): Observable<Funcoes> {
    return this.http.put<Funcoes>(`${API_CONFIG.baseUrl}/funcoes/${funcoes.id}`, funcoes);
  }

  delete(id: any): Observable<Funcoes> {
    return this.http.delete<Funcoes>(`${API_CONFIG.baseUrl}/funcoes/${id}`);
  }
}
