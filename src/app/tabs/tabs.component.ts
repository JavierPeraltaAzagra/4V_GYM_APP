import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  selectedTab: number = 1;

  setActiveTab(tabNumber: number): void {
    this.selectedTab = tabNumber;
  }
}
