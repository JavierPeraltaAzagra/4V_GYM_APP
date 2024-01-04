import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl('/');
  }
  selectedTab: number = 1;

  setActiveTab(tabNumber: number): void {
    this.selectedTab = tabNumber;
  }
}
