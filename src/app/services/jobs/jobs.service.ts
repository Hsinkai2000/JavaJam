import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor() {}

  submitApplication(
    name: string,
    email: string,
    start_date: Date,
    experience: string
  ) {
    console.log(
      `recieved application of : name: ${name} | email: ${email} | start date: ${start_date} | experience: ${experience}`
    );
  }
}
