import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  activeTab = 'Motor Repair Status';

  toggleTab(tab: string): void {

    if (this.activeTab === tab) {
      this.activeTab = '';
      return;
    }

    this.activeTab = tab;
  }

}