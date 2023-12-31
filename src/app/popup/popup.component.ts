import { Component } from '@angular/core';
import { PopupService } from '../Services/popup.service';
import { MatDialogModule } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Monitor, MonitorService } from '../Services/monitor.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  monitorService: MonitorService;

  constructor(private popupService: PopupService, monitorService: MonitorService) {
    this.monitorService = monitorService;
    
  }

  

  openPopup() {
    this.popupService.openPopup();
  }

  closePopup(){
    this.popupService.closePopup();
  }

  monitorForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    telephone: new FormControl(),
  });
  
  newMonitor(){
    const newMonitorData: Monitor = {id: 4, name: this.monitorForm.value.name, email: this.monitorForm.value.email, telephone: this.monitorForm.value.telephone};
    this.monitorService.createMonitorAPI(newMonitorData)
    .subscribe(response => {
      this.monitorService.notifyUpdateActivity(null);
    });
    this.closePopup();
  }
}
