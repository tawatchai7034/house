import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <!-- template Start -->
    <nav class="navbar-container">
      <ul class="navbar-item-container">
        <li class="empty"></li>
        <li class="company-name">
          <h5>Enoca Booking</h5>
        </li>
        <li class="button-section">
          <button class="login-button">Login</button>
          <button class="sign-up-button">Sign Up</button>
        </li>
      </ul>
    </nav>
    <!-- template End -->
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {}
