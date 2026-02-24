import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  /**
   * On initialization, we check if a policy already exists in localStorage. If not, we create a default policy and store it in localStorage. This ensures that the application has a policy to work with when it starts up for the first time.
   */
  ngOnInit(): void {
    const defaultPolicy = {
      policyId: "POL123",
      policyHolder: "John Doe",
      premiumAmount: 5000,
      dueDate: "2026-03-01",
      status: "Pending"
    };
    if (!localStorage.getItem('policy')) {
      localStorage.setItem('policy', JSON.stringify(defaultPolicy));
    }
  }
}