import {Component, inject} from '@angular/core';
import {ProductService} from "../products/service/product.service";
import {Button, ButtonDirective} from "primeng/button";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {Product} from "../products/product";
import {CardModule} from "primeng/card";
import {CurrencyPipe} from "@angular/common";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    ButtonDirective,
    PrimeTemplate,
    TableModule,
    CardModule,
    CurrencyPipe,
    DividerModule,
    Button
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  productService = inject(ProductService);
  cart = this.productService.loadedCart();
  total = this.productService.totalAmount();

  removeProduct(product: Product) {
    this.productService.deleteFromCart(product);
  }

  addProduct(product: Product) {
    this.productService.addToCart(product);
  }

  order() {

  }
}
