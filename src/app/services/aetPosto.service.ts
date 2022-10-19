import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { AetPostos } from '../models/aetPostos';

@Injectable({
  providedIn: 'root'
})
export class AetPostoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<AetPostos> {
    return this.http.get<AetPostos>(`${API_CONFIG.baseUrl}/aetPostos/${id}`);
  }

  findAll(): Observable<AetPostos[]> {
    return this.http.get<AetPostos[]>(`${API_CONFIG.baseUrl}/aetPostos`);
  }

  create(aetPostos: AetPostos): Observable<AetPostos> {
    //this.getCargoId(aetPostos);
    //this.getSegmentoId(aetPostos);
    return this.http.post<AetPostos>(`${API_CONFIG.baseUrl}/aetPostos`, aetPostos);

  }

  getSegmentoId(aetPostos: AetPostos): any{
    var arr = [];
    aetPostos.segCorpoPrinc.map((i) => {
      arr.push({id: Number(i)})
    })
    aetPostos.segCorpoPrinc = arr;
    return aetPostos;
  }

  getCargoId(aetPostos: AetPostos): any{
    var arr = [];
    aetPostos.cargo.map((i) => {
      arr.push({id: Number(i)}) 
    })
    aetPostos.cargo = arr;
    return aetPostos;
  }

  update(aetPostos: AetPostos): Observable<AetPostos> {
    return this.http.put<AetPostos>(`${API_CONFIG.baseUrl}/aetPostos/${aetPostos.id}`, aetPostos);
  }

  delete(id: any): Observable<AetPostos> {
    return this.http.delete<AetPostos>(`${API_CONFIG.baseUrl}/aetPostos/${id}`);
  }
}