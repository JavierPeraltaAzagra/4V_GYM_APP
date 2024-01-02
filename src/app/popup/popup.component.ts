import { Component } from '@angular/core';
import { PopupService } from '../Services/popup.service';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.openPopup();
  }

  closePopup(){
    this.popupService.closePopup();
  }
}
