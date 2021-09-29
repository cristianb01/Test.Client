import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  async getAll(): Promise<ProductModel[]> {
    const uri = 'https://localhost:44382/api/products';

    const products = await this.httpClient.get<ProductModel[]>(uri).toPromise();

    return products;
  }
}
