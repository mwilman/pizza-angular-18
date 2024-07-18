import { Routes } from '@angular/router';
import {PizzaMenuComponent} from "./pizza-menu/pizza-menu.component";
import {CartComponent} from "./cart/cart.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";

export const routes: Routes = [
  {path: 'pizza', component: PizzaMenuComponent},
  {path: 'home', component: LandingPageComponent},
  // {path: 'pasta', component: PastaOverviewComponent},
  // {path: 'schnitzel', component: SchnitzelOverviewComponent},
  // {path: 'snacks', component: SnacksOverviewComponent},
  // {path: 'all', component: AllOverviewComponent},
  // {path: 'imprint', component: ImprintComponent},
  // {path: 'contact', component: ContactComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
