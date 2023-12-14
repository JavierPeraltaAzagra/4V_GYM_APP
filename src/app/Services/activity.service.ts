import { Injectable } from '@angular/core';
import { ActivityType, ActivityTypeService } from './activity-type.service';
import { Monitor, MonitorService } from './monitor.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor() { }
  activity_type = new ActivityTypeService();
  spinning = this.activity_type.getActivityTypes()[0];
  bodyPump = this.activity_type.getActivityTypes()[1];
  pilates = this.activity_type.getActivityTypes()[2];
  monitorService = new MonitorService();
  monitors = this.monitorService.getMonitors();
  getActivities(): Activity[] {
    
    let activities = [{ id: 1, activity_type: this.spinning, beggining_date: new Date(2024, 1, 13, 10, 0), end_date: new Date(2024, 1, 13, 11, 30), monitors: [this.monitors[0]] },
    { id: 2, activity_type: this.bodyPump, beggining_date: new Date(2024, 1, 20, 13, 30), end_date: new Date(2024, 1, 20, 15, 0), monitors: [this.monitors[0], this.monitors[2]] },
    { id: 3, activity_type: this.pilates, beggining_date: new Date(2024, 1, 30, 10, 0), end_date: new Date(2024, 1, 30, 11, 30), monitors: [this.monitors[1]] },
    { id: 4, activity_type: this.bodyPump, beggining_date: new Date(2024, 1, 30, 17, 30), end_date: new Date(2024, 1, 30, 19, 0), monitors: [this.monitors[3], this.monitors[1]] }];
    return activities;
  }
}

export interface Activity {
  id : Number;
  activity_type: ActivityType;
  beggining_date: Date;
  end_date: Date;
  monitors: Monitor[];
}