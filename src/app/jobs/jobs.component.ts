import { Component, inject } from '@angular/core';
import { Job } from '../interfaces/job';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../services/jobs/jobs.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  jobService = inject(JobsService);

  applyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    start_date: new FormControl(''),
    experience: new FormControl(''),
  });

  constructor() {}

  submitApplication() {
    this.jobService.submitApplication(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.start_date
        ? new Date(this.applyForm.value.start_date)
        : new Date(),
      this.applyForm.value.experience ?? ''
    );
  }
}
