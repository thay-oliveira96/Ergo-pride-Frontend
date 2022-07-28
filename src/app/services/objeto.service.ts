import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Objeto } from '../models/objeto';

@Injectable({
  providedIn: 'root'
})
export class ObjetoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Objeto> {
    return this.http.get<Objeto>(`${API_CONFIG.baseUrl}/objetos/${id}`);
  }

  findAll(): Observable<Objeto[]> {
    return this.http.get<Objeto[]>(`${API_CONFIG.baseUrl}/objetos`);
  }

  create(objeto: Objeto): Observable<Objeto> {
    return this.http.post<Objeto>(`${API_CONFIG.baseUrl}/objetos`, objeto);

  }

  update(objeto: Objeto): Observable<Objeto> {
    return this.http.put<Objeto>(`${API_CONFIG.baseUrl}/objetos/${objeto.id}`, objeto);
  }

  delete(id: any): Observable<Objeto> {
    return this.http.delete<Objeto>(`${API_CONFIG.baseUrl}/objetos/${id}`);
  }
}
