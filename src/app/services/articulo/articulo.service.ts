import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../../models/articulo/articulo.model';

const baseUrl = 'http://localhost:8004/api/articulos';

@Injectable({
  providedIn: 'root'
})

export class ArticuloService {

  constructor(private http: HttpClient) { }

  // getAll(): Observable<Articulo[]> {
  //   return this.http.get<Articulo[]>(baseUrl);
  // }

  getAll(params: any): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(baseUrl, { params });
  }

  get(id: any): Observable<Articulo> {
    return this.http.get<Articulo>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updateEstatus(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/activo/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByBarcode(cod_Barras: any): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${baseUrl}/${cod_Barras}`);
  }
}
