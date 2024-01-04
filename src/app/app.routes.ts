import { Routes } from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';
import { ActivitiesComponent } from './activities/activities.component';

export const routes: Routes = [
    {path: "", component: ActivitiesComponent},
    {path: "monitors", component: MonitorComponent}
];
