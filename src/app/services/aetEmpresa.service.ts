import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { AetEmpresas } from '../models/aetEmpresas';


@Injectable({
  providedIn: 'root'
})
export class AetEmpresaService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<AetEmpresas> {
    return this.http.get<AetEmpresas>(`${API_CONFIG.baseUrl}/aetEmpresas/${id}`);
  }

  findAll(): Observable<AetEmpresas[]> {
    return this.http.get<AetEmpresas[]>(`${API_CONFIG.baseUrl}/aetEmpresas`);
  }

  create(aetEmpresas: AetEmpresas): Observable<AetEmpresas> {
    return this.http.post<AetEmpresas>(`${API_CONFIG.baseUrl}/aetEmpresas`, aetEmpresas);

  }

  update(aetEmpresas: AetEmpresas): Observable<AetEmpresas> {
    return this.http.put<AetEmpresas>(`${API_CONFIG.baseUrl}/aetEmpresas/${aetEmpresas.id}`, aetEmpresas);
  }

  delete(id: any): Observable<AetEmpresas> {
    return this.http.delete<AetEmpresas>(`${API_CONFIG.baseUrl}/aetEmpresas/${id}`);
  }
}
