import {Component} from '@angular/core';
import {Product} from "../../products/product";
import {products} from '../../products/products';
import {MenuItemComponent} from "../menu-item/menu-item.component";

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [
    MenuItemComponent
  ],
  templateUrl: './pizza-menu.component.html',
  styleUrl: './pizza-menu.component.scss'
})
export class PizzaMenuComponent {
  products: Product[] = products.filter(product => product.type === 'pizza');
}
