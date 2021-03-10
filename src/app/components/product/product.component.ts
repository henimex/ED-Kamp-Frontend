import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // product1 = { productId: 1, productName: 'Laptop', categoryId: 1, unitPrice: 5, unitsInStock:12 }
  // products: Product[] = [this.product1]

  products: Product[] = [];
  dataLoaded = false;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {      
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
}
