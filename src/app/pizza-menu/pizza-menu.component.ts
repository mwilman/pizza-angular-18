import { Component } from '@angular/core';
import {Product} from "../products/product";
import { products } from '../products/products';
import {TableModule} from "primeng/table";
import {ButtonDirective} from "primeng/button";

@Component({
  selector: 'app-pizza-menu',
  standalone: true,
  imports: [
    TableModule,
    ButtonDirective
  ],
  templateUrl: './pizza-menu.component.html',
  styleUrl: './pizza-menu.component.scss'
})
export class PizzaMenuComponent {
  //example of product
  /*
    {
    identifier: '1',
    description: 'Pizza Margherita',
    price: 4.50,
    type: 'pizza'
  },
   */

  //get the pizza menu
  products: Product[] = products.filter(product => product.type === 'pizza');

  //columns for the table
  cols = [
    {field: 'identifier', header: 'ID'},
    {field: 'description', header: 'Description'},
    {field: 'price', header: 'Price'}
  ];

  addToCart(product: any) {

  }
}
