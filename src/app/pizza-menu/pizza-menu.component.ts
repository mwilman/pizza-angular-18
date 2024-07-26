import {Component, inject} from '@angular/core';
import {Product} from "../products/product";
import { products } from '../products/products';
import {TableModule} from "primeng/table";
import {ButtonDirective} from "primeng/button";
import {ProductService} from "../products/service/product.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-pizza-menu',
  standalone: true,
  imports: [
    TableModule,
    ButtonDirective,
    CurrencyPipe
  ],
  templateUrl: './pizza-menu.component.html',
  styleUrl: './pizza-menu.component.scss'
})
export class PizzaMenuComponent {
  productService = inject(ProductService);

  products: Product[] = products.filter(product => product.type === 'pizza');

  addToCart(product: Product) {
    console.log('Product added to cart: ', product);
    this.productService.addToCart(product);
  }
}
