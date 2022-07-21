import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Empresas } from '../models/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Empresas> {
    return this.http.get<Empresas>(`${API_CONFIG.baseUrl}/empresas/${id}`);
  }

  findAll(): Observable<Empresas[]> {
    return this.http.get<Empresas[]>(`${API_CONFIG.baseUrl}/empresas`);
  }

  create(empresas: Empresas): Observable<Empresas> {
    this.getDepartamentosId(empresas);
    return this.http.post<Empresas>(`${API_CONFIG.baseUrl}/empresas`, empresas);

  }

  getDepartamentosId(empresas: Empresas): any{
    var arr = [];
    empresas.departamentos.map((i) => {
      arr.push({id: Number(i)}) 
    })

    empresas.departamentos = arr;
    return empresas;
  }

  update(empresas: Empresas): Observable<Empresas> {
    return this.http.put<Empresas>(`${API_CONFIG.baseUrl}/empresas/${empresas.id}`, empresas);
  }

  delete(id: any): Observable<Empresas> {
    return this.http.delete<Empresas>(`${API_CONFIG.baseUrl}/empresas/${id}`);
  }
}
