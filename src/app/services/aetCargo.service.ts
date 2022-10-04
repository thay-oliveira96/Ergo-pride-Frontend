import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { AetCargos } from '../models/aetCargo';


@Injectable({
  providedIn: 'root'
})
export class AetCargoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<AetCargos> {
    return this.http.get<AetCargos>(`${API_CONFIG.baseUrl}/aetCargos/${id}`);
  }

  findAll(): Observable<AetCargos[]> {
    return this.http.get<AetCargos[]>(`${API_CONFIG.baseUrl}/aetCargos`);
  }

  create(aetCargos: AetCargos): Observable<AetCargos> {
    return this.http.post<AetCargos>(`${API_CONFIG.baseUrl}/aetCargos`, aetCargos);

  }

  update(aetCargos: AetCargos): Observable<AetCargos> {
    return this.http.put<AetCargos>(`${API_CONFIG.baseUrl}/aetCargos/${aetCargos.id}`, aetCargos);
  }

  delete(id: any): Observable<AetCargos> {
    return this.http.delete<AetCargos>(`${API_CONFIG.baseUrl}/aetCargos/${id}`);
  }
}
