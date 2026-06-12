import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ViewRecord {
  refurbishmentId: number;
  equipmentName: string;
  serialNo: string;
  mfgYear: number;
  make: string;
  model: string;
  kw: string;
  frame: string;
  rpm: string;
}

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  rows: ViewRecord[] = [];

  idFilter = '';
  equipmentFilter = '';
  serialFilter = '';
  makeFilter = '';

  constructor() {

    const makes = [
      'ABB',
      'Siemens',
      'Crompton',
      'Kirloskar',
      'BHEL'
    ];

    for (let i = 20; i <= 49; i++) {

      this.rows.push({
        refurbishmentId: i,
        equipmentName: 'Motor',
        serialNo: `EQ${1000 + i}`,
        mfgYear: 2018 + (i % 6),
        make: makes[i % makes.length],
        model: `M-${i}`,
        kw: `${50 + i}`,
        frame: `${100 + i}`,
        rpm: `${1450 + i}`
      });

    }

  }

  get filteredRows(): ViewRecord[] {

    return this.rows.filter(row => {

      const idMatch =
        row.refurbishmentId
          .toString()
          .includes(this.idFilter);

      const equipmentMatch =
        row.equipmentName
          .toLowerCase()
          .includes(
            this.equipmentFilter.toLowerCase()
          );

      const serialMatch =
        row.serialNo
          .toLowerCase()
          .includes(
            this.serialFilter.toLowerCase()
          );

      const makeMatch =
        row.make
          .toLowerCase()
          .includes(
            this.makeFilter.toLowerCase()
          );

      return (
        idMatch &&
        equipmentMatch &&
        serialMatch &&
        makeMatch
      );

    });

  }

  exportCsv(): void {

    const headers = [
      'Refurbishment ID',
      'Equipment Name',
      'Serial No',
      'Mfg Year',
      'Make',
      'Model',
      'KW',
      'Frame',
      'RPM'
    ];

    const csvRows = this.filteredRows.map(row => [
      row.refurbishmentId,
      row.equipmentName,
      row.serialNo,
      row.mfgYear,
      row.make,
      row.model,
      row.kw,
      row.frame,
      row.rpm
    ]);

    const csvContent = [
      headers.join(','),
      ...csvRows.map(r => r.join(','))
    ].join('\n');

    const blob = new Blob(
      [csvContent],
      { type: 'text/csv;charset=utf-8;' }
    );

    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = 'equipment-data.csv';

    link.click();
  }

  openSettings(): void {
  this.showSettings = true;
}

closeSettings(): void {
  this.showSettings = false;
}

  viewAllotment(id: number): void {
    alert(`Opening Equipment Details for ID ${id}`);
  }

  showSettings = false;

availableColumns = [
  'Refurbishment ID',
  'Allotment',
  'Main Equipment Name',
  'Serial No',
  'Mfg Year',
  'Make',
  'Model',
  'KW',
  'Frame',
  'RPM'
];

}

