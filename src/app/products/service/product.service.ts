import {Injectable, signal} from '@angular/core';
import {Product} from "../product";
import {products} from "../products";
import {CartItem} from "../../cart/cart-item";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cart = signal<CartItem[]>([
    {...products[0], quantity: 3, total: products[0].price * 3},
  ])
  private total = signal(3 * products[0].price);

  constructor() { }

  loadedCart() {
    return this.cart.asReadonly()
  }

  totalAmount() {
    return this.total.asReadonly()
  }

  addToCart(product: Product) {
    this.cart.update(products => {
      const existing = products.find(p => p === product)
      if (existing) {
        existing.quantity++
        existing.total = existing.price * existing.quantity
      } else {
        products.push({...product, quantity: 1, total: product.price})
      }
      return products
    })

    this.total.update(total => total + product.price)
  }

  deleteFromCart(product: Product) {
    this.cart.update(products => {
      const existing = products.find(p => p === product)
      if (existing) {
        existing.quantity--
        existing.total = existing.price * existing.quantity
        if (existing.quantity === 0) {
          products.splice(products.indexOf(existing), 1)
        }
      }
      return products
    })

    this.total.update(total => total - product.price);
  }
}
