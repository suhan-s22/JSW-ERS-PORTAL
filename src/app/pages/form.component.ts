import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private dataService = inject(DataService);

  form: FormGroup = this.fb.group({
    mainEquipmentName: ['', Validators.required],
    make: ['', Validators.required],

    equipmentSerialNo: ['', Validators.required],
    model: [''],

    motorManufacturingYear: ['', Validators.required],
    kw: [''],

    applicationUse: ['', Validators.required],
    frame: ['', Validators.required],

    installedLocation: [''],
    size: [''],

    installedQty: ['', Validators.required],
    rpm: [''],

    equipmentType: ['', Validators.required],
    serviceType: ['', Validators.required],

    receivedDate: ['', Validators.required],
    warrantyStatus: ['', Validators.required],

    bearingType: ['', Validators.required],

    kva: [''],
    voltage: [''],
    dutyCycle: [''],
    current: [''],

    receivedTime: ['', Validators.required],
    previousRefurbishmentNo: [''],
    sparesDetails: [''],

    department: [''],
    location: [''],

    spocName: ['', Validators.required],
    spocEmail: ['', [Validators.required, Validators.email]],
    spocContact: ['', Validators.required],

    electricalHeadName: ['', Validators.required],
    electricalHeadEmail: ['', [Validators.required, Validators.email]],

    hodName: ['', Validators.required],
    hodEmail: ['', [Validators.required, Validators.email]],

    defectsObserved: ['', Validators.required],
    repairsRequired: ['', Validators.required],
    reasonOfFailure: ['', Validators.required],

    sapMaterialCode: ['', Validators.required],
    sapEquipmentNo: ['', Validators.required],
    sapRefurbishmentOrderNo: ['', Validators.required],
    sapFundCenter: ['', Validators.required],
  });

  equipmentTypes = [
    'SQ. CAGE MOTORS CLASS -F',
    'SLIP RING MOTORS CLASS -F',
    'DOUBLE SPEED MOTORS CLASS-F',
    'CONTROL TRANSFORMER',
    'SUBMERSIBLE / MONOBLOCK PUMP MOTORS',
    '1-PHASE CAGE MOTORS',
    'BRAKE COILS',
    'WELDING COIL PRICE',
    'Overhauling of HT Motors',
    'Others',
  ];

  warrantyStatuses = ['Under Warranty', 'Out Of Warranty'];

  bearingTypes = [
    'Deep Groove Ball Bearing',
    'Angular Contact Ball Bearing',
    'Self Aligning Ball Bearing',
    'Cylindrical Roller Bearing',
    'Spherical Roller Bearing',
    'Tapered Roller Bearing',
    'O-Ring',
  ];

  failureReasons = [
    'Flash Over',
    'Contamination',
    'Inter Turn Short',
    'Bearings Failure',
    'Lead Change',
    'Overload',
    'Overheating',
    'Winding Damage',
    'Insulation Failure',
    'Voltage Fluctuation',
    'Single Phasing',
    'Short Circuit',
    'Loose Connections',
    'Cooling Failure',
    'Mechanical Jam',
    'Others',
  ];

  isInvalid(field: string): boolean {
  const control = this.form.get(field);

  return !!(
    control &&
    control.invalid &&
    control.touched
  );
}

getErrorMessage(field: string): string {
  const control = this.form.get(field);

  if (!control || !control.errors) {
    return '';
  }

  if (control.errors['required']) {
    return 'This field is required';
  }

  if (control.errors['email']) {
    return 'Please enter a valid email address';
  }

  return 'Invalid value';
}

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      alert('Please complete all mandatory fields correctly.');

      return;
    }

    const requisitionId =
      'REQ-' + Math.floor(10000 + Math.random() * 90000);

    this.dataService.addForm({
      id: requisitionId,
      ...this.form.value,
    });

    alert(
      `Requisition Created Successfully.\nID : ${requisitionId}`
    );

    this.router.navigate(['/repair', requisitionId]);
  }
}

