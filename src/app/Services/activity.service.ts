import { Injectable } from '@angular/core';
import { ActivityType, ActivityTypeService } from './activity-type.service';
import { Monitor, MonitorService } from './monitor.service';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private monitorService: MonitorService) {
    this.monitorsAPI = this.monitorService.getMonitorsAPI();
  }

  activity_type = new ActivityTypeService();
  spinning = this.activity_type.getActivityTypes()[0];
  bodyPump = this.activity_type.getActivityTypes()[1];
  pilates = this.activity_type.getActivityTypes()[2];

  monitorsAPI: Observable<Monitor[]>;
  monitors: Monitor[] = [];
  activities: Activity[] = [];

  // Se maneja la asincronía usando async/await (como que espera a que termine de recoger los datos de getMonitors())
  async getActivities(): Promise<Activity[]> {
    this.monitors = await this.getMonitors();
    this.fillActivities();
    return this.activities;
  }

  // Función para obtener monitores, maneja la asincronía usando lastValueFrom
  async getMonitors(): Promise<Monitor[]> {
    // Se utiliza lastValueFrom para obtener el último valor del observable y convertirlo en una promesa
    // Las promesas te permiten asegurarte de que se cargan los datos de un Observable, por ejemplo, que, al ser asincronos, puede que no devuelvan los datos cuando lo necesitas, sino más tarde
    // Las promesas pueden devolver:
    // Pendiente: El estado inicial, la promesa está en espera para determinar si se resolverá con un valor o se rechazará con una razón (error).
    // Resuelta: La operación asíncrona se completó con éxito y la promesa ahora tiene un valor asociado.
    // Rechazada: La operación asíncrona falló y la promesa tiene una razón (un error) asociada.
    return lastValueFrom(this.monitorsAPI);
  }

  fillActivities() {
    this.activities = [{ id: 1, activity_type: this.spinning, beggining_date: new Date(2024, 1, 4, 10, 0), end_date: new Date(2024, 1, 13, 11, 30), monitors: [this.monitors[0]] },
      { id: 2, activity_type: this.bodyPump, beggining_date: new Date(2024, 1, 20, 13, 30), end_date: new Date(2024, 1, 20, 15, 0), monitors: [this.monitors[0], this.monitors[2]] },
      { id: 3, activity_type: this.pilates, beggining_date: new Date(2024, 0, 30, 10, 0), end_date: new Date(2024, 1, 30, 11, 30), monitors: [this.monitors[1]] },
      { id: 4, activity_type: this.bodyPump, beggining_date: new Date(2024, 1, 4, 17, 30), end_date: new Date(2024, 1, 30, 19, 0), monitors: [this.monitors[3], this.monitors[1]] }];
  }

  removeActivity(id: number){
    this.activities.splice(this.activities.findIndex(activity => activity.id == id) , 1)
  }
}

export interface Activity {
  id: number;
  activity_type: ActivityType;
  beggining_date: Date;
  end_date: Date;
  monitors: Monitor[];
}
