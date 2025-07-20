import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.models';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: 'products-list.component.html',
  styleUrl: 'products-list.component.css'
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Black Panther #17',
      price: 9.99,
      image: 'shared/img/blackpanther.png',
      stock: 0,
    },
    {
      id: 2,
      title: 'Superman #205',
      price: 7.99,
      image: 'shared/img/superman.png',
      stock: 2,
    },
    {
      id: 3,
      title: 'DragonBall Super #12',
      price: 6.99,
      image: 'shared/img/dragonball.png',
      stock: 8,
    },
    {
      id: 4,
      title: 'Bleach Volume#7',
      price: 6.99,
      image: 'shared/img/bleach.png',
      stock: 4,
    },
  ]);
}
