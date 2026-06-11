import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

interface NavItem {
  label: string;
  route: string;
  icon: 'grid' | 'chart' | 'eye' | 'check-circle' | 'eye-circle' | 'wrench' | 'bell' | 'phone' | 'help';
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  template: `
    <aside class="sidebar" [class.collapsed]="sidebarService.collapsed$ | async">
      <nav class="sidebar-nav">
        @for (item of navItems; track item.route) {
          <a
            [routerLink]="item.route"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: item.route === '/dashboard' }"
            class="nav-item"
            [title]="item.label"
          >
            <span class="nav-icon" [innerHTML]="getIcon(item.icon)"></span>
            <span class="nav-label">{{ item.label }}</span>
          </a>
        }
      </nav>
    </aside>
  `,
  styles: `
    .sidebar {
      position: fixed;
      top: 56px;
      left: 0;
      bottom: 0;
      width: 220px;
      background-color: var(--white);
      border-right: 1px solid #e0e0e0;
      transition: width 0.3s ease;
      overflow: hidden;
      z-index: 900;
    }

    .sidebar.collapsed {
      width: 60px;
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      padding: 8px 0;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      color: #555;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;
      white-space: nowrap;
      text-decoration: none;
    }

    .sidebar.collapsed .nav-item {
      justify-content: center;
      padding: 12px 0;
    }

    .nav-item:hover {
      background-color: rgba(26, 58, 143, 0.08);
      color: var(--primary);
    }

    .nav-item.active {
      background-color: var(--primary);
      color: var(--white);
    }

    .nav-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 24px;
      height: 24px;
    }

    .nav-icon :deep(svg) {
      width: 20px;
      height: 20px;
    }

    .nav-label {
      overflow: hidden;
      transition: opacity 0.2s ease;
    }

    .sidebar.collapsed .nav-label {
      opacity: 0;
      width: 0;
      display: none;
    }
  `,
})
export class SidebarComponent {
  protected readonly sidebarService = inject(SidebarService);

  readonly navItems: NavItem[] = [
    { label: 'Requisition Form', route: '/form', icon: 'grid' },
    { label: 'Dashboard', route: '/dashboard', icon: 'chart' },
    { label: 'View', route: '/view', icon: 'eye' },
    { label: 'Equipment Details', route: '/allotment/1', icon: 'check-circle' },
    { label: 'Observations', route: '/observations', icon: 'eye-circle' },
    { label: 'Motor Details', route: '/motor-details', icon: 'wrench' },
    { label: 'Notifications', route: '/notifications', icon: 'bell' },
    { label: 'Contact Us', route: '/contact', icon: 'phone' },
    { label: 'Help', route: '/help', icon: 'help' },
  ];

  getIcon(icon: NavItem['icon']): string {
    const icons: Record<NavItem['icon'], string> = {
      grid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
      chart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
      eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
      'check-circle': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      'eye-circle': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>`,
      wrench: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      bell: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
      phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
      help: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    };
    return icons[icon];
  }
}
