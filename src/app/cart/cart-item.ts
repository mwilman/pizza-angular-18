import {Product} from "../products/product";

export interface CartItem extends Product {
  quantity: number
  total: number
}
