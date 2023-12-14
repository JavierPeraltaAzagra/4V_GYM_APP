import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {
  constructor() { }
  getActivities(): Activity_type[] {
    let activity_type = [{ id: 1, name: "Spinning", number_monitors: 1 },
    { id: 2, name: "BodyPump", number_monitors: 2 },
    { id: 3, name: "Pilates", number_monitors: 1 }];
    return activity_type;
  }
}

export interface Activity_type {
  id : Number;
  name: String;
  number_monitors: Number;
}