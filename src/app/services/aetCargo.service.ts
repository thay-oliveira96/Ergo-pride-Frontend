import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { AetCargos } from '../models/aetCargo';
import { Segmento } from '../models/segmento';


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
    this.getCargoId(aetCargos);
    this.getSegmentoId(aetCargos);
    return this.http.post<AetCargos>(`${API_CONFIG.baseUrl}/aetCargos`, aetCargos);

  }

  getSegmentoId(aetCargos: AetCargos): any{
    var arr = [];
    aetCargos.segCorpoPrinc.map((i) => {
      arr.push({id: Number(i)})
    })
    aetCargos.segCorpoPrinc = arr;
    return aetCargos;
  }

  getCargoId(aetCargos: AetCargos): any{
    var arr = [];
    aetCargos.cargo.map((i) => {
      arr.push({id: Number(i)}) 
    })
    aetCargos.cargo = arr;
    return aetCargos;
  }

  update(aetCargos: AetCargos): Observable<AetCargos> {
    return this.http.put<AetCargos>(`${API_CONFIG.baseUrl}/aetCargos/${aetCargos.id}`, aetCargos);
  }

  delete(id: any): Observable<AetCargos> {
    return this.http.delete<AetCargos>(`${API_CONFIG.baseUrl}/aetCargos/${id}`);
  }
}
