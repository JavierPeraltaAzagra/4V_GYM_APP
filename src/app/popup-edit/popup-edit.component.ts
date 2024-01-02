import { Component } from '@angular/core';
import { PopupService } from '../Services/popup.service';
import { MatDialogModule } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Monitor, MonitorService } from '../Services/monitor.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule],
  templateUrl: './popup-edit.component.html',
  styleUrl: './popup-edit.component.scss'
})
export class PopupEditComponent {
  monitorService: MonitorService;

  constructor(private popupService: PopupService, monitorService: MonitorService) {
    this.monitorService = monitorService;
  }

  openPopupEdit() {
    this.popupService.openPopup();
  }

  closePopupEdit(){
    this.popupService.closePopup();
  }

  monitorForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    telephone: new FormControl(),
  });
  
  // editMonitor(){
  //   this.monitorService.getIdByEmail(this.monitorForm.value.email);
  //   const editMonitorData: Monitor = {id: id, name: this.monitorForm.value.name, email: this.monitorForm.value.email, telephone: this.monitorForm.value.telephone};
  //   this.monitorService.editMonitorPopup(editMonitorData)
  //   .subscribe(response => {
  //     this.monitorService.notifyUpdateActivity(null);
  //   });
  //   this.closePopupEdit();
  // }
}
