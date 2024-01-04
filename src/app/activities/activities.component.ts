import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { NgIf, NgFor } from '@angular/common';
import { Activity, ActivityService } from '../Services/activity.service';
import { ActivityType } from '../Services/activity-type.service';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule, NgIf, NgFor],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  selected: Date | null = new Date();
  activityService: ActivityService;
  activities: Activity[] = [];
  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  spinning: ActivityType;
  bodyPump: ActivityType;
  pilates: ActivityType;
  // activitiesNotFound1: number;
  // activitiesNotFound2: number;
  // activitiesNotFound3: number;
  constructor(activityService: ActivityService) {
    this.activityService = activityService;
    this.spinning = this.activityService.spinning;
    this.bodyPump = this.activityService.bodyPump;
    this.pilates = this.activityService.pilates;
    // this.activitiesNotFound1 = 0;
    // this.activitiesNotFound2 = 0;
    // this.activitiesNotFound3 = 0;
  }

  // Se utiliza async/await para manejar la asincronía en ngOnInit
  async ngOnInit(): Promise<void> {
    // await hace que espere a que la función getActivities() devuelva los datos antes de continuar
    this.activities = await this.activityService.getActivities();
  }

  prev() {
    this.selected?.setDate(this.selected.getDate() - 1);
  }

  next() {
    this.selected?.setDate(this.selected.getDate() + 1);
  }
  removeActivity(id: number){
    this.activityService.removeActivity(id);
  }
}
