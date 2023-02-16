import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({ name: '', address: '' });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    //processes checkout
    this.items = this.cartService.clearCart();
    window.alert(
      `Your order has been confirmed\nYourAddress is ${this.checkoutForm.value.name}\n ${this.checkoutForm.value.address}`
    );
    this.checkoutForm.reset();
  }
}
