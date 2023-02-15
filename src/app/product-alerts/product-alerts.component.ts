import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  //This is how you setup a prop in the child comp
  @Input() product: Product | undefined;
  // setting up being able to emit from the child comp to the parent component. It will emit when the value of notify changes
  @Output() notify = new EventEmitter();
}
