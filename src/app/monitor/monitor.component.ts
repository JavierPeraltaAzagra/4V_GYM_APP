
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Monitor } from '../Services/monitor.service';
import { MonitorService } from '../Services/monitor.service';
import { PopupService } from '../Services/popup.service';
import { PopupEditService } from '../Services/popup-edit.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.scss'
})
export class MonitorComponent{
  subscriptionUpdate: Subscription = new Subscription;
  ngOnInit() {

    // We Fetch Information
    this.fetchActivities();

    // We subscribe to changes in Activities
    this.subscriptionUpdate = this.monitorService.changesOnActivities.subscribe(
      () => this.fetchActivities()
    );
 }

 private fetchActivities(): void {
  this.monitorService.getMonitorsAPI()
  .subscribe(data => {
      //let resultado = data;
      this.monitors = data;
    }
  );
}

    monitors: Monitor[] = [];
    popUp: PopupService;
    popUpEdit: PopupEditService;
    currentSlide = 0;

  constructor(private monitorService: MonitorService, popUp: PopupService, popUpEdit: PopupEditService) {
    this.popUp = popUp;
    this.popUpEdit = popUpEdit;
  }

  next(): void {
    if (this.currentSlide < this.monitors.length - 1) {
      this.currentSlide++;
    }else{
      this.currentSlide = 0;
    }
  }

  prev(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }else{
      this.currentSlide = this.monitors.length - 1;
    }
  }

  removeMonitor(id: number): void {
    // this.monitors = this.monitors.filter(monitor => monitor.id !== id)
    this.monitorService.deleteMonitorAPI(id);
  }
  // editMonitor(id: number): void {
  //   // let monitor = this.monitorService.getMonitorAPIbyId(id);
  //   this.monitorService.editMonitorAPI(id);
  // }

  openPopUp(){
    this.popUp.openPopup();
  }
  openPopUpEdit(){
    this.popUpEdit.openPopupEdit();
  }
}