
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Monitor } from '../Services/monitor.service';
import { MonitorService } from '../Services/monitor.service';
import { PopupService } from '../Services/popup.service';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.scss'
})
export class MonitorComponent{
    monitors: Monitor[] = [];
    popUp: PopupService;
    currentSlide = 0;

  constructor(private monitorService: MonitorService, popUp: PopupService) {
    this.monitors = monitorService.getMonitors();
    this.popUp = popUp;
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

  removeMonitor(id: number): void{
    this.monitors = this.monitors.filter(monitor => monitor.id !== id)
  }

  openPopUp(){
    this.popUp.openPopup();
  }
}