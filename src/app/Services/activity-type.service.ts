import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {
  constructor() { }
  getActivityTypes(): ActivityType[] {
    let activity_types = [{ id: 1, name: "Spinning", number_monitors: 1 },
    { id: 2, name: "BodyPump", number_monitors: 2 },
    { id: 3, name: "Pilates", number_monitors: 1 }];
    return activity_types;
  }
}

export interface ActivityType {
  id : Number;
  name: String;
  number_monitors: Number;
}