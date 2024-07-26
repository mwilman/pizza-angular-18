import {Component, inject} from '@angular/core';
import {ProductService} from "../product.service";
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
  quantity = 3;

  removeProduct(product: Product) {
    console.log('Product deleted from cart: ', product);
    this.productService.deleteFromCart(product);
    this.quantity--; //todo: fix this
  }

  addProduct(product: Product) {
    this.productService.addToCart(product);
  }

  add(product: Product) {
    this.quantity++;
  }

  remove(product: Product) {
    this.quantity--;
    if (this.quantity === 0) {
      this.removeProduct(product);
    }
  }

  total() {
    return 0;
  }

  order() {

  }
}
