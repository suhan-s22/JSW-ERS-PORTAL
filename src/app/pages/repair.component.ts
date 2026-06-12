import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent {

  showJobPopup = false;

  generateJobNo(): void {
    this.showJobPopup = true;
  }

  closePopup(): void {
    this.showJobPopup = false;
  }

  validateSap(): void {
    alert('SAP Code Validated Successfully');
  }

  sendAcknowledgement(): void {
    alert('Acknowledgement Sent Successfully');
  }

  rejectRequest(): void {
    alert('Request Rejected');
  }

}