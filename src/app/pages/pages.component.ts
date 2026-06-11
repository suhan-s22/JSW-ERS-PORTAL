import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  template: `<div class="page"><h2>Requisition Form</h2></div>`,
  styles: `.page { padding: 8px; } h2 { color: var(--primary); }`,
})
export class FormComponent {}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `<div class="page"><h2>Dashboard</h2></div>`,
  styles: `.page { padding: 8px; } h2 { color: var(--primary); }`,
})
export class DashboardComponent {}

@Component({
  selector: 'app-view',
  standalone: true,
  template: `<div class="page"><h2>View</h2></div>`,
  styles: `.page { padding: 8px; } h2 { color: var(--primary); }`,
})
export class ViewComponent {}

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

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `<div class="page"><h2>Contact Us</h2></div>`,
  styles: `.page { padding: 8px; } h2 { color: var(--primary); }`,
})
export class ContactComponent {}

@Component({
  selector: 'app-help',
  standalone: true,
  template: `<div class="page"><h2>Help</h2></div>`,
  styles: `.page { padding: 8px; } h2 { color: var(--primary); }`,
})
export class HelpComponent {}

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `<div class="page"><h2>Profile</h2></div>`,
  styles: `.page { padding: 8px; } h2 { color: var(--primary); }`,
})
export class ProfileComponent {}

@Component({
  selector: 'app-repair',
  standalone: true,
  template: `<div class="page"><h2>Repair Details</h2></div>`,
  styles: `.page { padding: 8px; } h2 { color: var(--primary); }`,
})
export class RepairComponent {}

@Component({
  selector: 'app-allotment',
  standalone: true,
  template: `<div class="page"><h2>Equipment Details</h2></div>`,
  styles: `.page { padding: 8px; } h2 { color: var(--primary); }`,
})
export class AllotmentComponent {}
