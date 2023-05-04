import { Component, EventEmitter, Output, Input} from '@angular/core';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() imageSrc = 'assets/images/checkImage.png';
  @Input() popupText = 'Done';
  closeButtonImg = 'assets/images/closeButton.png';
  popupVisible = false;
  @Output() close = new EventEmitter<void>();

  showPopup() {
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
  }
}
