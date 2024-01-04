import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, TabsComponent, MonitorComponent, ActivitiesComponent, HttpClientModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '4V_GYM_APP';
}
