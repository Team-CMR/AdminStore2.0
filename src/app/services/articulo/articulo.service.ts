import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../../models/articulo/articulo.model';

// const baseUrl = 'http://localhost:8004/api/articulos';
const baseUrl = 'https://localhost:8004/api/articulos';

@Injectable({
  providedIn: 'root'
})

export class ArticuloService {

  constructor(private http: HttpClient) { }

  // getAll(): Observable<Articulo[]> {
  //   return this.http.get<Articulo[]>(baseUrl);
  // }

  getAllProducts(data: any): Observable<Articulo[]> {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://localhost:8004/api/articulos',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJBUFAgUFdBIEFOR1VMQVIgLyBTUFJJTkcgQk9PVCIsImp0aSI6IjEiLCJzdWIiOiJ3d3cudmFsaWRhbmRvLXRva2VuLXB3YS5jb20iLCJhdXRob3JpdGllcyI6WyJBRE1JTiJdLCJuYW1lIjoiQWRtQ2xhdWRpYSIsImVtYWlsIjoiYWRtaW4uY2xhdWRpYUBtYWlsLmNvbSIsInJvbCI6IkFETUlOIiwiaWF0IjoxNjcwMDIxNzEwLCJleHAiOjE2NzAwMjIzMTB9.hWHkojdP6o77ZN7DOAYlo6qTREKv6n7ZrYOsvDQRd8sRm05csiNuw_CQE9GDqwBcT7laNfTL0e145Yn4dqs9bQNArKInFaD_mMfy36vzyg7MP1uV1439O8mT5MCk3bUdM42l8Kf-zT-pqDV0hf0x-JuOVP44pdNU9KGn1eTKxLY_WJgWbb2vW11Hsv4nSpWeo_c6YaK33l4gV8AaDTDQbsb1_gr-Y2HCzxVYfWlLfrU5cSZHAVVelZKnkgCMCI4xQBpiQXQYNYKYgzYHjQBwAwqjkpJlHb3eigqkZI8FQNYqmjhZZhbcXMQ28RnGTgSwK7KnwW5P--2kjbTjhP22I6WzD1lwMsULND_oL7wtrhTuArGBxoqy9tYa6tJoBnWrKWSkwBsEefgWZV0r2qd6mP9qdPjwGaN4lggHTAv4oxwdhfZTy1D53LIlY6ojxym1wUlWJZgW71KBbNfCfDdOJlMKJxWMa4yzNzG1i4K7pSq1QTQxvkCO719rJsIE7wx3mAKQGO2H54D6zkw_0hTaNZKGXrFWwdcrwnvc2Ii27RUBW0Fv52RF-beajH2Okbaq4zWpFxKFYuIzct2vrlfVttl04eb0Lom5EiqyqTjZ22tMZ1GRP_bf9qgh6PJGlv7NxwbNVulwGYUX01PUfq0hK6m1MhMwOEmz54st60LStds',
        'Cookie': 'JSESSIONID=2D0E8E54FD13771B91F8A52B80A118D1'
      }
    };

    axios(config)
      .then(function (response: any) {
        console.log(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });


    return this.http.post<Articulo[]>(baseUrl, data);
  }

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
