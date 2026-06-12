import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      query: ['', Validators.required]
    });

  }

  submit(): void {

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      alert(
        'Please fill all mandatory fields correctly.'
      );

      return;
    }

    alert(
      'Your query has been submitted successfully.'
    );

    this.contactForm.reset();

  }

}