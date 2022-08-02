import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Segmento } from '../models/segmento';

@Injectable({
  providedIn: 'root'
})
export class SegmentoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Segmento> {
    return this.http.get<Segmento>(`${API_CONFIG.baseUrl}/demSegm/${id}`);
  }

  findAll(): Observable<Segmento[]> {
    return this.http.get<Segmento[]>(`${API_CONFIG.baseUrl}/demSegm`);
  }

  create(segmento: Segmento): Observable<Segmento> {
    return this.http.post<Segmento>(`${API_CONFIG.baseUrl}/demSegm`, segmento);

  }

  update(segmento: Segmento): Observable<Segmento> {
    return this.http.put<Segmento>(`${API_CONFIG.baseUrl}/demSegm/${segmento.id}`, segmento);
  }

  delete(id: any): Observable<Segmento> {
    return this.http.delete<Segmento>(`${API_CONFIG.baseUrl}/demSegm/${id}`);
  }
}
