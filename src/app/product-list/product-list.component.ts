import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  // When child comp emits this function will be fired
  onNotify() {
    console.log('testing emit');
    window.alert('You will be notified when the product goes on sale');
  }
}
