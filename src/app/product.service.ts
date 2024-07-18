import {Injectable, signal} from '@angular/core';
import {Product} from "./products/product";
import {products} from "./products/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cart = signal<Product[]>([products[0]])
  constructor() { }

  loadedCart() {
    return this.cart.asReadonly()
  }

  addToCart(product: Product) {
    this.cart.update(products => [...products, product])
  }

  deleteFromCart(product: Product) {
    this.cart.update(products => products.filter(p => p !== product))
  }
}
