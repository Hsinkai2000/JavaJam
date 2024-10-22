import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../services/jobs/jobs.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  jobService = inject(JobsService);

  applyForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]+$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}$/),
    ]),
    start_date: new FormControl('', [
      Validators.required,
      this.startDateValidator as ValidatorFn,
    ]),
    experience: new FormControl('', [Validators.required]),
  });

  constructor() {}

  startDateValidator(control: FormControl) {
    const today = new Date();
    const selectedDate = new Date(control.value);
    return selectedDate >= today ? null : { invalidStartDate: true };
  }

  submitApplication() {
    if (this.applyForm.valid) {
      this.jobService.submitApplication(
        this.applyForm.value.name ?? '',
        this.applyForm.value.email ?? '',
        this.applyForm.value.start_date
          ? new Date(this.applyForm.value.start_date)
          : new Date(),
        this.applyForm.value.experience ?? ''
      );
    } else {
      // Handle form errors (show validation messages, etc.)
      console.error('Form is invalid:', this.applyForm.errors);
    }
  }
}
