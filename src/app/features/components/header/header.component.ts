import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- Template Start -->
    <div class="header-container">
      <app-navbar></app-navbar>
      <div class="header-content-container">
        <p>Helping Others</p>
        <p>LIVE & TRAVEL</p>
        <p>Special offers to suit your plan</p>
      </div>
    </div>
    <!-- Template End -->
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
