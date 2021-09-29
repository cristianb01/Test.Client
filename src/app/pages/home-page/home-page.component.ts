import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public products!: ProductModel[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().then(products => this.products = products);
  }

}
