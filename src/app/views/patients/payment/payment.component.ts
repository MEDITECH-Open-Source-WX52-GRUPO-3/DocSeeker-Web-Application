import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  popupVisible = false;
  @Input() totalAmount = 100;
  showPopup() {
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
  }
}
