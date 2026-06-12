import { Component } from '@angular/core';

@Component({
  selector: 'app-observations',
  standalone: true,
  template: `<div class="page"><h2>Observations</h2></div>`,
  styles: `.page { padding: 8px; } h2 { color: var(--primary); }`,
})
export class ObservationsComponent {}

@Component({
  selector: 'app-motor-details',
  standalone: true,
  template: `<div class="page"><h2>Motor Details</h2></div>`,
  styles: `.page { padding: 8px; } h2 { color: var(--primary); }`,
})
export class MotorDetailsComponent {}

@Component({
  selector: 'app-notifications',
  standalone: true,
  template: `<div class="page"><h2>Notifications</h2></div>`,
  styles: `.page { padding: 8px; } h2 { color: var(--primary); }`,
})
export class NotificationsComponent {}
