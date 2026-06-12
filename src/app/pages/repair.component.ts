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

  generateJobNo(): void {

    const jobNo =
      'ERS-2026-' +
      Math.floor(10000 + Math.random() * 90000);

    alert(
      `ERS Job Generated : ${jobNo}`
    );
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