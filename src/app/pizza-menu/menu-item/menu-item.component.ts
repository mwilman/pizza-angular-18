import {Component, inject, Input} from '@angular/core';
import {Product} from "../../products/product";
import {CurrencyPipe} from "@angular/common";
import {ProductService} from "../../products/service/product.service";
import {ButtonDirective} from "primeng/button";

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    ButtonDirective
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  @Input() product!: Product;

  productService = inject(ProductService);

  addToCart(product: Product) {
    console.log('Product added to cart: ', product);
    this.productService.addToCart(product);
  }
}
