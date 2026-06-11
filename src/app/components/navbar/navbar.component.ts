import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <header class="navbar">
      <div class="navbar-left">
        <button type="button" class="hamburger-btn" (click)="sidebarService.toggle()" aria-label="Toggle sidebar">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="logo-box">
          <span class="logo-text">JSW</span>
          <span class="logo-accent"></span>
        </div>
      </div>

      <div class="navbar-center">
        <h1 class="portal-title">Electrical Repair Shop Portal</h1>
      </div>

      <div class="navbar-right">
        <div class="search-wrapper">
          <input type="text" class="search-input" placeholder="Search" [(ngModel)]="searchQuery" />
        </div>

        <a routerLink="/notifications" class="icon-btn" aria-label="Notifications">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </a>

        <button type="button" class="sign-out-btn" (click)="signOut()">Sign out</button>

        <div class="profile-wrapper">
          <button type="button" class="avatar-btn" (click)="toggleProfileDropdown()" aria-label="Profile menu">
            <img src="https://ui-avatars.com/api/?name=Rashi+Agarwal&background=2a52be&color=fff&size=64" alt="Profile" class="avatar-img" />
          </button>

          @if (profileDropdownOpen) {
            <div class="profile-dropdown">
              <div class="profile-picture-wrapper">
                <img src="https://ui-avatars.com/api/?name=Rashi+Agarwal&background=2a52be&color=fff&size=128" alt="Rashi Agarwal" class="profile-picture" />
                <span class="edit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </span>
              </div>
              <p class="username">Rashi Agarwal</p>
              <button type="button" class="edit-profile-btn" routerLink="/profile" (click)="profileDropdownOpen = false">
                Edit Profile
              </button>
            </div>
          }
        </div>
      </div>
    </header>
  `,
  styles: `
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 56px;
      background-color: var(--primary);
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }

    .navbar-left,
    .navbar-right {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
    }

    .navbar-right {
      justify-content: flex-end;
    }

    .navbar-center {
      flex: 2;
      display: flex;
      justify-content: center;
    }

    .hamburger-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      background: none;
      border: none;
      padding: 8px;
      cursor: pointer;
    }

    .hamburger-btn span {
      display: block;
      width: 22px;
      height: 2px;
      background-color: var(--white);
      border-radius: 1px;
    }

    .logo-box {
      position: relative;
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 4px;
      padding: 6px 14px;
      overflow: hidden;
    }

    .logo-text {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 1px;
      color: var(--white);
    }

    .logo-accent {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background-color: #e63946;
    }

    .portal-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--white);
      white-space: nowrap;
    }

    .search-wrapper {
      width: 200px;
    }

    .search-input {
      width: 100%;
      background-color: var(--white);
      border: none;
      border-radius: 4px;
      padding: 6px 12px;
      font-size: 14px;
      color: #333;
    }

    .search-input:focus {
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
    }

    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      padding: 6px;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    .icon-btn:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .sign-out-btn {
      background: none;
      border: none;
      color: var(--white);
      font-size: 14px;
      font-weight: 500;
      padding: 6px 8px;
      white-space: nowrap;
    }

    .sign-out-btn:hover {
      text-decoration: underline;
    }

    .profile-wrapper {
      position: relative;
    }

    .avatar-btn {
      background: none;
      border: 2px solid rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      padding: 0;
      width: 36px;
      height: 36px;
      overflow: hidden;
      cursor: pointer;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

    .profile-dropdown {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      background: var(--white);
      color: #333;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      padding: 16px;
      min-width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      z-index: 1100;
    }

    .profile-picture-wrapper {
      position: relative;
      width: 72px;
      height: 72px;
    }

    .profile-picture {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
    }

    .edit-icon {
      position: absolute;
      bottom: 0;
      right: 0;
      background: var(--primary);
      color: var(--white);
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--white);
    }

    .username {
      font-weight: 600;
      font-size: 15px;
      color: #333;
    }

    .edit-profile-btn {
      background: var(--primary);
      color: var(--white);
      border: none;
      border-radius: 4px;
      padding: 8px 20px;
      font-size: 13px;
      font-weight: 500;
      width: 100%;
    }

    .edit-profile-btn:hover {
      background: var(--secondary);
    }
  `,
})
export class NavbarComponent {
  protected readonly sidebarService = inject(SidebarService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  searchQuery = '';
  profileDropdownOpen = false;

  signOut(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleProfileDropdown(): void {
    this.profileDropdownOpen = !this.profileDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  closeProfileDropdown(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.profile-wrapper')) {
      this.profileDropdownOpen = false;
    }
  }
}
