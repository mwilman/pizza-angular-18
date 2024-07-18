import {Component, inject} from '@angular/core';
import {ProductService} from "../product.service";
import {ButtonDirective} from "primeng/button";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Product} from "../products/product";
import {CardModule} from "primeng/card";
import {products} from "../products/products";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    ButtonDirective,
    PrimeTemplate,
    TableModule,
    CardModule,
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  productService = inject(ProductService);
  cart = this.productService.loadedCart();

  deleteProduct(product: Product) {
    console.log('Product deleted from cart: ', product);
    this.productService.deleteFromCart(product);
  }

  total() {
    return 0;
  }

  order() {

  }
}
