import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet, AsyncPipe],
  template: `
    <div class="layout">
      <app-navbar />
      <div class="layout-body">
        <app-sidebar />
        <main
          class="main-content"
          [class.sidebar-collapsed]="sidebarService.collapsed$ | async"
        >
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  styles: `
    .layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .layout-body {
      display: flex;
      flex: 1;
      margin-top: 56px;
    }

    .main-content {
      flex: 1;
      margin-left: 220px;
      padding: 24px;
      background-color: var(--bg);
      min-height: calc(100vh - 56px);
      overflow-y: auto;
      transition: margin-left 0.3s ease;
    }

    .main-content.sidebar-collapsed {
      margin-left: 60px;
    }
  `,
})
export class LayoutComponent {
  protected readonly sidebarService = inject(SidebarService);
}
