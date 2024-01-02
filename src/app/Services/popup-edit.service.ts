import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupEditComponent } from '../popup-edit/popup-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PopupEditService {

  constructor(private dialog: MatDialog) { }

  openPopupEdit() {
    this.dialog.open(PopupEditComponent);
  }

  closePopupEdit(){
    this.dialog.closeAll();
  }
}
