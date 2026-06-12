import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChecklistItem {
  name: string;
  remarks: string;
  status: string;
}

@Component({
  selector: 'app-equipment-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.css']
})
export class EquipmentDetailsComponent {

  leftChecklist: ChecklistItem[] = [
    { name: 'End Cover DE', remarks: '', status: '' },
    { name: 'End Cover NDE', remarks: '', status: '' },
    { name: 'Grease Cup DE', remarks: '', status: '' },
    { name: 'Grease Cup NDE', remarks: '', status: '' },
    { name: 'Spacer', remarks: '', status: '' },
    { name: 'Springs', remarks: '', status: '' },
    { name: 'Brushes', remarks: '', status: '' },
    { name: 'Brush Holders', remarks: '', status: '' },
    { name: 'Rocker Arms', remarks: '', status: '' },
    { name: 'Bearing DE', remarks: '', status: '' }
  ];

  rightChecklist: ChecklistItem[] = [
    { name: 'Ingress of Dust', remarks: '', status: '' },
    { name: 'Bearing Failure', remarks: '', status: '' },
    { name: 'Bearing Housing Loose', remarks: '', status: '' },
    { name: 'Over Greasing', remarks: '', status: '' },
    { name: 'Brush Failure', remarks: '', status: '' },
    { name: 'Key Way Failure', remarks: '', status: '' },
    { name: 'Shaft Bent', remarks: '', status: '' },
    { name: 'Entry of Water/Oil', remarks: '', status: '' },
    { name: 'Rotor Winding Failure', remarks: '', status: '' },
    { name: 'Rotor Core Damage', remarks: '', status: '' },
    { name: 'Slip Ring Unit Failure', remarks: '', status: '' },
    { name: 'Rotor Bars Open', remarks: '', status: '' },
    { name: 'Rotor Core Loose on Shaft', remarks: '', status: '' },
    { name: 'Rotor Unbalance', remarks: '', status: '' }
  ];

  saveChecklist(): void {
    alert('Equipment Allotment Saved Successfully');
  }

}