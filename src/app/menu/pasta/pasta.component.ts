import { Component } from '@angular/core';
import {MenuItemComponent} from "../menu-item/menu-item.component";
import {Product} from "../../products/product";
import { products } from '../../products/products';

@Component({
  selector: 'app-pasta',
  standalone: true,
    imports: [
        MenuItemComponent
    ],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.scss'
})
export class PastaComponent {
  products: Product[] = products.filter(product => product.type === 'pasta');

}
