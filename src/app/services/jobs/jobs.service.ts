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
    // Log the application details to the console
    console.log(
      `Received application of: Name: ${name} | Email: ${email} | Start Date: ${start_date.toISOString()} | Experience: ${experience}`
    );

    // Create a success message with application details
    const successMessage = `
      Application successful with:
      Name: ${name}
      Email: ${email}
      Start Date: ${start_date.toLocaleDateString()} 
      Experience: ${experience}
    `;

    // Alert the user with the success message
    alert(successMessage);
  }
}
