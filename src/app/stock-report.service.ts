import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class StockReportService {

  private url = "https://localhost:5001/api/admin/stock/report";

  constructor(private http : HttpClient) { }

  public getReport() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
