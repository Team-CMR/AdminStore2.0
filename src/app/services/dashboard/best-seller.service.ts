import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BestSellerProduct } from 'src/app/models/dashboard/best-seller-product.model';

const baseUrl = 'http://localhost:8004/api/venta';

@Injectable({
  providedIn: 'root'
})

export class BestSellerService {

  constructor(private http: HttpClient) { }
  
  getBestSellers(): Observable<BestSellerProduct[]> {
    return this.http.get<BestSellerProduct[]>(baseUrl+"/best-sellers");
  }
}
